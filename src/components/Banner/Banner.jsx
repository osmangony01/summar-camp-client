import React from 'react';

const Banner = ({img, label}) => {
    return (
        <div className='relative'>
            <img src={img} className="h-[240px] sm:h-[280px] md:h-[350px] xl:h-[400px] w-full" />
            <div className="absolute h-full left-0 top-0 right-0 bg-[#050505] bg-opacity-70">
                <div className='absolute top-1/2 left-[calc(50%-69px)] text-lg text-[#cfcfcf]'>
                   {label}
                </div>
            </div>
        </div>
    );
};

export default Banner;