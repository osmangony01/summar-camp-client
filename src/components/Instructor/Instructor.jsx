import { useState } from "react";
import useApprovedClasses from "../../hooks/useApprovedClasses";
import Banner from '../../components/Banner/Banner';
import { useEffect } from "react";
import useTitle from "../../hooks/useTitle";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa6";


const Instructor = () => {
    const [approvedClasses] = useApprovedClasses();
    const [instructor, setInstructor] = useState([]);
    const [isShowAll, setIsShowAll] = useState(true);
    useTitle('Instructor');

    useEffect(() => {
        const sixInstructor = approvedClasses.slice(0, 6);
        setInstructor(isShowAll ? sixInstructor : approvedClasses);
    }, [approvedClasses, isShowAll]);

    const handleShowAllBtn = () => {
        setIsShowAll(false);
    }

    return (
        <div>
            <Banner img="../../../public/images/banner/t1.jpg" label="Home | Instructor "></Banner>
            {/* <div className="my-12">
                <h2 className="text-3xl text-orange-500 font-semibold mt-16 mb-10 text-center">All Instructors</h2>
                <div className="w-full md:w-4/5 lg:w-3/4 mx-auto  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 pt-5">
                    {
                        instructor.length === 0 ? <p>Loading...</p> : instructor.map(item => <div key={item._id} className={`card border bg-base-100 instructors rounded-md ${item.availableSeat == 0 ? 'hover:bg-red-300' : ''}`}>

                            <div className="mask  w-full h-[200px]">
                                <img src={item.instructorPhoto} className="w-full h-full" alt="Avatar" />
                            </div>
                            <div className="px-5 pb-5 pt-1">
                                <div className="card-actions justify-end">
                                    <h2 className="font-semibold">-- {item.instructorName} </h2>
                                </div>
                                <div className="pt-3">
                                    <span className="text-xl">{item.className} Specialist</span>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
                <div className="flex justify-center pt-10">
                    {isShowAll ? <button className='btn-show-all-instructor' onClick={handleShowAllBtn}>Show All Classes</button> : ""}
                </div>
            </div> */}
            <div className="my-12  text-black pb-16  px-10 md:px-0">
            <h2 className="text-3xl text-center font-semibold pt-10 pb-16 text-orange-500">All Instructor</h2>
            <div className=" w-full md:w-2/3 lg:w-11/12 xl:w-4/5 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-16">
                {
                    instructor.length === 0 ? <p>Loading...</p> : instructor.map((item) => {
                        return < div key={item._id} className="instructor gap-5">
                            <div className="relative">
                                <img src={item.instructorPhoto} className="w-[210px] h-[210px] rounded border" alt="img" />
                                <div className="absolute text-white bottom-4 left-4 flex">
                                    <span className="px-2"><FaFacebookF></FaFacebookF></span>
                                    <span className="px-2"><FaInstagram></FaInstagram></span>
                                    <span className="px-2"><FaTwitter></FaTwitter></span>
                                    <span className="px-2"><FaLinkedinIn></FaLinkedinIn></span>
                                </div>
                            </div>
                            <div className="relative h-[210px]">
                                <h2 className="text-2xl font-semibold">{item.instructorName}</h2>
                                <div className="text-base text-[#747373]">{item.className} Language Teacher</div>
                                <div className="text-[15px] text-[#797979] pt-4 ">{item.instructorName} is a passionate {item.className} language instructor, dedicated to inspiring her students with effective, engaging language instruction.</div>
                                <div className="absolute bottom-0 left-0">
                                    <button className="px-4 text-sm text-[#6e6e6e] rounded py-1 border border-slate-300 hover:bg-black hover:text-white hover:border-white">VIEW PROFILE</button>
                                </div>
                            </div>
                        </div>
                    })
                }
                </div>
                <div className="flex justify-center pt-16">
                    {isShowAll ? <button className='btn-show-all-instructor' onClick={handleShowAllBtn}>Show All Classes</button> : ""}
                </div>
        </div>
        </div>
    );
};

export default Instructor;