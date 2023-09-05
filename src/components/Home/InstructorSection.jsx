
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import useApprovedClasses from "../../hooks/useApprovedClasses";

const InstructorSection = () => {

    const [approvedClass] = useApprovedClasses();
    let instructors = [];
    if (approvedClass.length > 6) {
        instructors = approvedClass.slice(0, 4);
    }
    else {
        instructors = approvedClass;
    }


    return (
        <div className="my-12 bg-[#444444] text-white pb-24 pt-12 px-10 md:px-0">
            <h2 className="text-3xl text-center font-semibold pt-10 pb-16">Popular Instructor</h2>
            <div className=" w-full md:w-2/3 lg:w-11/12 xl:w-4/5 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-16">
                {
                    instructors.map((item) => {
                        return < div key={item._id} className="instructor gap-5">
                            <div className="relative">
                                <img src={item.instructorPhoto} className="w-[210px] h-[210px] rounded instructor-img" alt="img" />
                                <div className="absolute bottom-4 left-4 flex">
                                    <span className="px-2"><FaFacebookF ></FaFacebookF></span>
                                    <span className="px-2"><FaInstagram></FaInstagram></span>
                                    <span className="px-2"><FaTwitter></FaTwitter></span>
                                    <span className="px-2"><FaLinkedinIn></FaLinkedinIn></span>
                                </div>
                            </div>
                            <div className="relative h-[210px]">
                                <h2 className="text-2xl font-semibold">{item.instructorName}</h2>
                                <div className="text-base text-[#d1d0d0]">{item.className} Language Teacher</div>
                                <div className="text-[15px] text-[#d1d0d0] pt-4 ">{item.instructorName} is a passionate {item.className} language instructor, dedicated to inspiring her students with effective, engaging language instruction.</div>
                                <div className="absolute bottom-0 left-0">
                                    <button className="px-4 text-sm text-[#d1d0d0] rounded py-1 border border-slate-300 hover:bg-black">VIEW PROFILE</button>
                                </div>
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    );
};

export default InstructorSection;

{/* < div key={item._id} className="instructor gap-5">
                            <div className="relative">
                                <img src={item.instructorPhoto} className="w-[300px] h-[300px] lg:w-[210px] lg:h-[210px] rounded" alt="img" />
                                <div className="absolute bottom-4 left-4 flex">
                                    <span className="px-2"><FaFacebookF ></FaFacebookF></span>
                                    <span className="px-2"><FaInstagram></FaInstagram></span>
                                    <span className="px-2"><FaTwitter></FaTwitter></span>
                                    <span className="px-2"><FaLinkedinIn></FaLinkedinIn></span>
                                </div>
                            </div>
                            <div className="relative h-[300px] lg:h-[210px]">
                                <h2 className="text-2xl font-semibold">{item.instructorName}</h2>
                                <div className="text-base text-[#d1d0d0]">{item.className} Language Teacher</div>
                                <div className="text-base text-[#d1d0d0] pt-4 ">A lyrical language with deep cultural heritage, spoken by millions worldwide and revered for its beauty.</div>
                                <div className="absolute bottom-0 left-0">
                                    <button className="px-4 text-sm text-[#d1d0d0] rounded py-1 border border-slate-300 hover:bg-black">VIEW PROFILE</button>
                                </div>
                            </div>
                        </div> */}