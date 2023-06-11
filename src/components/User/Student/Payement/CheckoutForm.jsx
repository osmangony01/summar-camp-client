
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../../provider/AuthProvider';

import './CheckoutForm.css';
import instance from '../../../../routes/axiosInstance';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';


const CheckoutForm = ({ selectedClass, price }) => {
    const stripe = useStripe();
    const elements = useElements();
    const { user } = useContext(AuthContext);
    const [cardError, setCardError] = useState('');
    const [clientSecret, setClientSecret] = useState("");
    const [processing, setProcessing] = useState(false);

    const navigate = useNavigate();

    console.log(selectedClass)
    console.log(price);

    useEffect(() => {
        if (price > 0) {
            fetch("http://localhost:5000/create-payment-intent", {
                method: "POST",
                headers: { "content-type": "application/json" },
                body: JSON.stringify({ price }),
            })
                .then((res) => res.json())
                .then((data) => {
                    console.log(data.clientSecret);
                    setClientSecret(data.clientSecret)
                });
        }
    }, [])



    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement);
        if (card === null) {
            return
        }
        console.log(card);

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if (error) {
            console.log('error', error)
            setCardError(error.message);
        }
        else {
            setCardError('');
            console.log('payment method', paymentMethod)
        }

        setProcessing(true)

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: user?.email || 'unknown',
                        name: user?.displayName || 'anonymous'
                    },
                },
            },
        );

        if (confirmError) {
            console.log(confirmError);
        }

        console.log('payment intent', paymentIntent)

        setProcessing(false)

        if (paymentIntent.status === 'succeeded') {
            //     setTransactionId(paymentIntent.id);
            //     // save payment information to the server
            //     const payment = {
            //         email: user?.email,
            //         transactionId: paymentIntent.id,
            //         price,
            //         date: new Date(),
            //         quantity: cart.length,
            //         cartItems: cart.map(item => item._id),
            //         menuItems: cart.map(item => item.menuItemId),
            //         status: 'service pending',
            //         itemNames: cart.map(item => item.name)
            //     }
            //     axiosSecure.post('/payments', payment)
            //         .then(res => {
            //             console.log(res.data);
            //             if (res.data.result.insertedId) {
            //                 // display confirm
            //             }
            //         })
            const enrolledClass = {
                selectedClassId : selectedClass._id,
                classId: selectedClass.classId,
                className: selectedClass.className,
                image: selectedClass.image,
                studentName: selectedClass.studentName,
                studentEmail: selectedClass.studentEmail,
                instructorEmail: selectedClass.instructorEmail,
                instructorName: selectedClass.instructorName,
                price: selectedClass.price,
                date : new Date(),
                transactionId: paymentIntent.id,
                paymentStatus: "paid"
            }

            fetch("http://localhost:5000/payment", {
                method: "POST",
                headers: { "content-type": "application/json" },
                body: JSON.stringify(enrolledClass),
            })
                .then((res) => res.json())
                .then((data) => {
                    console.log(data);
                    if (data.insertedId) {
                        Swal.fire({
                            position: 'center',
                            icon: 'success',
                            title: 'Class Added Successfully',
                            showConfirmButton: false,
                            timer: 1500
                        })
                        navigate('/dashboard/my-enroll-classes', { replace: true })
                    }
                });
        }


    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button type="submit" className='px-4 text-black rounded-lg my-2 border border-blue-600 hover:bg-blue-600 hover:text-white' disabled={!stripe || !clientSecret || processing}>
                    Pay
                </button>
            </form>
            {cardError && <p className="text-red-600 ml-8">{cardError}</p>}
        </>
    );
};

export default CheckoutForm;