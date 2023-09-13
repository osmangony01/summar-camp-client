import { useEffect, useState } from "react";
import { set } from "react-hook-form";
import { FaRegUser } from "react-icons/fa";

const Newsletter = () => {

    const [active, setActive] = useState(false);
    const [val, setVal] = useState('')

    const handleChange = (e) => {
        const v = e.target.value;
        setVal(v);
       // console.log(v)
        //console.log(val)
       
    }
    const handleSubscribe = (e) => {
        e.preventDefault();
        const form = e.target;
        //console.log('1')
        const v = form.subscribe.value;
        form.reset();
        setVal('')
    }

    useEffect(() => {
        if (val) {
            setActive(true)
        }
        else {
            setActive(false)
        }
    },[val])

    return (
        <div className='bg-base-200 py-32 '>
            <div className="w-full px-6 md:px-0 md:w-4/5 lg:w-3/4 mx-auto">
                <div className='text-center font-semibold text-red-500'>GO AT YOUR OWN PACE</div>
                <div className='text-center py-3 text-3xl font-bold'>Subscribe to Our Newsletter</div>
                <div className='text-center px-0 md:px-20 lg:px-40 pb-6'>Subscribe to our newsletter for language tips, cultural insights, and exclusive updates. Stay connected with our vibrant language learning community and elevate your journey to fluency. Join us today!</div>
                <div className="w-full lg:w-2/3 mx-auto">
                    <form className="flex justify-center" onSubmit={handleSubscribe}>
                        <input name="subscribe" onChange={handleChange} className='w-2/4 box-border py-2 md:py-2.5  px-3  outline-none bg-white border border-orange-300 hover:border-orange-500 placeholder:text-sm' placeholder="Enter your email address"/>
                        <button  type='submit' className={` ${active == true ? 'bg-orange-600 hover:bg-orange-800 cursor-pointer': 'bg-orange-300 '} border-box flex items-center  border-0 px-5 py-2.5 text-base lg:text-md font-semibold text-white `}><FaRegUser></FaRegUser><span className="pl-2 flex">Subscribe <span className="hidden sm:block pl-2">Now</span></span></button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Newsletter;
