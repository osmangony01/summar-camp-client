import { FaRegUser } from "react-icons/fa";

const Newsletter = () => {
    return (
        <div className='bg-base-200 py-32 '>
            <div className="w-full px-6 md:px-0 md:w-4/5 lg:w-3/4 mx-auto">
                <div className='text-center font-semibold text-red-500'>GO AT YOUR OWN PACE</div>
                <div className='text-center py-3 text-3xl font-bold'>Subscribe to Our Newsletter</div>
                <div className='text-center px-0 md:px-20 lg:px-40 pb-6'>Subscribe to our newsletter for language tips, cultural insights, and exclusive updates. Stay connected with our vibrant language learning community and elevate your journey to fluency. Join us today!</div>
                <div className="w-full lg:w-2/3 mx-auto">
                    <div className="flex justify-center">
                        <input className='w-2/4 box-border py-2 md:py-2.5  px-3 rounded-md border border-transparent outline-none bg-gray-300' placeholder="Enter your email address"/>
                        <span type='submit' className="border-box flex items-center bg-orange-600 border-0 px-5 py-2.5 text-base lg:text-xl font-semibold text-white hover:bg-orange-700"><FaRegUser></FaRegUser><span className="pl-2 flex">Subscribe <span className="hidden sm:block pl-2">Now</span></span></span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Newsletter;
