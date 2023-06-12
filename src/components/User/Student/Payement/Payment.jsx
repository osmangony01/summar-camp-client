
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';
import { loadStripe } from '@stripe/stripe-js';
import { useLoaderData, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import instance from '../../../../routes/axiosInstance';

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

const Payment = () => {

    const selectedClass = useLoaderData();

    console.log(selectedClass);

    const priceClass = selectedClass && selectedClass.price;
    const price = parseFloat(priceClass?.toFixed(2));


    console.log("selected class :", selectedClass);
    console.log("price :", price);

    return (
        <div>
            <h2 className='text-2xl text-center font-semibold mb-8'>Payment</h2>
            <div className='w-2/3 mx-auto border border-blue-400 rounded-md p-10'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm selectedClass={selectedClass} price={price}></CheckoutForm>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;