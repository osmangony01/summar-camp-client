import React from 'react';
import resultImg from "../../../public/images/banner/co1.png"

const Result = () => {
    return (
        <div className='relative'>
            <img src={resultImg} className="h-[220px] sm:h-[260px] md:h-[330px] xl:h-[380px] w-full" />
            <div className="absolute h-full left-0 top-0 right-0 bg-[#050505] bg-opacity-70">
                <div className='absolute top-1/2 left-20 text-lg text-[#cfcfcf]'>
                    <div className='flex justify-between text-3xl text-white'>
                        <div className='px-20' >16+ Courses</div>
                        <div className='px-20'>20+ Teacher</div>
                        <div className='px-20'>200+ Students</div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Result;