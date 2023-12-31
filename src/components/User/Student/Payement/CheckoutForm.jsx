
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../../provider/AuthProvider';

// import './CheckoutForm.css';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../../../routes/axiosInstance';


const CheckoutForm = ({ selectedClass, price }) => {
    const stripe = useStripe();
    const elements = useElements();
    const { user } = useContext(AuthContext);
    const [cardError, setCardError] = useState('');
    const [clientSecret, setClientSecret] = useState("");
    const [processing, setProcessing] = useState(false);

    const navigate = useNavigate();

    //console.log(selectedClass)
    //console.log(price);

    useEffect(() => {
        if (price > 0) {

            fetch("https://summar-camp-server.vercel.app/create-payment-intent", {
                method: "POST",
                headers: { "content-type": "application/json" },
                body: JSON.stringify({ price }),
            })
                .then((res) => res.json())
                .then((data) => {
                    //console.log(data.clientSecret);
                    setClientSecret(data.clientSecret)
                });
        }
    }, [])


    const makePayment = async (enrollCourseInfo) => {
        const response = await axiosInstance.post('/payment', { ...enrollCourseInfo })
        const data = response.data;
        if (data.ok) {
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Payment is Successfully',
                showConfirmButton: false,
                timer: 1500
            })
            navigate('/dashboard/my-enroll-classes', { replace: true })
        }
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement);
        if (card === null) {
            return
        }
        //console.log(card);

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if (error) {
            // console.log('error', error)
            setCardError(error.message);
        }
        else {
            setCardError('');
            //console.log('payment method', paymentMethod)
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
            //console.log(confirmError);
        }

        //console.log('payment intent', paymentIntent)

        setProcessing(false)

        if (paymentIntent.status === 'succeeded') {

            const enrolledClass = {
                selectedClassId: selectedClass._id,
                classId: selectedClass.classId,
                className: selectedClass.className,
                image: selectedClass.image,
                studentName: selectedClass.studentName,
                studentEmail: selectedClass.studentEmail,
                instructorEmail: selectedClass.instructorEmail,
                instructorName: selectedClass.instructorName,
                price: selectedClass.price,
                date: new Date(),
                transactionId: paymentIntent.id,
                paymentStatus: "paid"
            }

            makePayment(enrolledClass);
            
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
                <button type="submit" className='px-4 py-2  text-black rounded-lg mt-6 border border-blue-600 hover:bg-blue-600 hover:text-white' disabled={!stripe || !clientSecret || processing}>
                    Pay
                </button>
            </form>
            {cardError && <p className="text-red-600 mt-2">{cardError}</p>}
        </>
    );
};

export default CheckoutForm;