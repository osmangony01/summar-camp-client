

import img4 from '../../../public/images/h1.jpg';

const BannerHome = () => {

    const bannerContent = <>
        <div className="absolute h-full left-0 top-0 right-0 bg-gray-500 bg-opacity-30">
            <div className='absolute md:w-[2/4]  space-y-5 top-10 left-24 right-12 md:right-0  md:left-[calc(50%-300px)] md:top-[calc(50%-150px)]'>
                <h2 className='text-xl text-white font-bold sm:text-3xl md:text-4xl' >Discover a Universe <br /> of Language Learning</h2>
                <p className='hidden text-white sm:block'>Embrace the world, one language at a time, and unlock a universe of possibilities. <br />Discover the beauty of language and broaden your horizons <br /> with our immersive learning experience</p>
                <div>
                    <button className="btn btn-primary bg-purple-600 mr-4 border-0">Discover More</button>
                </div>
            </div>
        </div>
    </>


    return (
        <div>
            <div className='relative'>
                <img src={img4} className="h-[280px] sm:h-[300px] md:h-[400px] xl:h-[500px] w-full" />
                {bannerContent}
            </div>
        </div>
    );
};

export default BannerHome;

