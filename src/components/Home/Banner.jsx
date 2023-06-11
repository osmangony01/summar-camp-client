import { Carousel } from 'flowbite-react';
import img1 from '../../../public/images/banner/b1.png';
import img2 from '../../../public/images/banner/b2.jpg';
import img3 from '../../../public/images/banner/b3.jpg';
import img4 from '../../../public/images/banner/b4.png';






const Banner = () => {

    const bannerContent = <>
        <div className="absolute h-full left-0 top-0 right-0 bg-[#151515] bg-opacity-50">
            <div className=' absolute  w-[2/3] md:w-[2/4] text-white space-y-5 top-10 left-12 right-12 md:right-0  md:left-[calc(50%-300px)] md:top-[calc(50%-150px)]'>
                <h2 className='text-lg font-bold sm:text-2xl md:text-5xl' >Discover a Universe <br /> of Language Learning</h2>
                <p className=''>Embrace the world, one language at a time, and unlock a universe of possibilities. <br />Discover the beauty of language and broaden your horizons <br /> with our immersive learning experience</p>
                <div>
                    <button className="btn btn-primary bg-purple-600 mr-4 border-0">Discover More</button>
                </div>
            </div>
        </div>
    </>

    return (
        <div>
            <div className="h-[280px] sm:h-[300px] md:h-[400px] xl:h-[500px] ">
                <Carousel className="rounded-none">
                    <div className="relative rounded-none">
                        <img src={img1} alt="..." className="h-[280px] sm:h-[300px] md:h-[400px] xl:h-[500px] w-full"/>
                        {bannerContent}
                    </div>
                    <div className="relative">
                    <img src={img2} alt="..." className="h-[280px] sm:h-[300px] md:h-[400px] xl:h-[500px] w-full"/>
                        {bannerContent}
                    </div>
                    <div className="relative">
                    <img src={img3} alt="..." className="h-[280px] sm:h-[300px] md:h-[400px] xl:h-[500px] w-full"/>
                        {bannerContent}
                    </div>
                    <div className="relative">
                    <img src={img4} alt="..." className="h-[280px] sm:h-[300px] md:h-[400px] xl:h-[500px] w-full"/>
                        {bannerContent}
                    </div>
                    
                </Carousel>
            </div>
        </div>
    );
};

export default Banner;