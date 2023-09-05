import React from 'react';

import sp from "../../../public/images/sp2.gif"

const About = () => {
    return (
        <div className="my-32">
            <div className='w-full px-6 md:px-0 md:w-4/5 lg:w-3/4 mx-auto'>
                <h2 className='text-3xl font-bold text-center pb-8'>What People Say About WorkSpeak</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-8 pt-10'>
                    <div className=''>
                        Welcome to <span className='font-semibold'>WorldSpeak</span>, where language learning comes to life. Our mission is to make foreign language learning accessible and enjoyable for all. With interactive lessons, personalized plans, and a diverse range of languages, we cater to beginners and enthusiasts alike. Our team of language experts ensures an effective and immersive learning experience. Join us to expand your horizons, connect with a global community, and embark on a journey of linguistic and cultural discovery. Start your adventure today!
                    </div>
                    <div className='flex justify-center items-center'>
                        <img className='w-[450px]' src={sp} alt="error" />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default About;