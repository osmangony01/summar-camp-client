import { useContext } from "react";
import useApprovedClasses from "../../hooks/useApprovedClasses";
import { AuthContext } from "../../provider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import useRole from "../../hooks/useRole";

import { PiBookmarksSimple } from "react-icons/pi";
import { FaStar } from "react-icons/fa";
import { MdOutlineGroups } from "react-icons/md";

const TopClasses = () => {
    const [approvedClass] = useApprovedClasses();
    //console.log(approvedClass);

    const isRole = useRole();

    const sortedClass = approvedClass.sort((a, b) => b.enrollStudent - a.enrollStudent);

    let topClasses = [];
    if (approvedClass.length > 6) {
        topClasses = sortedClass.slice(0, 6);
    }
    else {
        topClasses = sortedClass;
    }

    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    
    const handleBookmark = (item) => {
        if (user) {
            //addToCard(item, user);
        }
        else {
            navigate("/login", { replace: true });
        }
    }

    return (
        <div className="mb-32 mt-20 mx-10 sm:mx-32 md:mx-5 lg:mx-0">
            <h2 className="text-3xl text-center font-semibold mt-10 mb-16">Top Popular Courses</h2>
            <div className="w-full md:w-2/3 lg:w-4/5 mx-auto  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
                {
                    topClasses.map(item => <div key={item._id} className={`card bg-base-100 top-classes border rounded ${item.availableSeat == 0 && 'hover:bg-red-300'}`}>
                        <div className="relative">
                            <img src={item.image} className="w-full h-[200px]" alt="course" />
                            <div className=" bg-pink-500 text-white py-0.5 px-1 text-sm rounded-s absolute bottom-0 right-0">$ {item.price}</div>
                            <div onClick={() => handleBookmark(item)} className="absolute top-3 right-3 cursor-pointer"><PiBookmarksSimple size={22} color="gray"></PiBookmarksSimple></div>
                        </div>
                        <div className="flex flex-col  gap-1">
                            <div className="flex justify-between items-center px-4 pt-4 pb-2">
                                <h2 className="card-title">{item.className} Language</h2>
                                <span className="flex justify-center items-center gap-1"><FaStar size={14} color="orange"></FaStar><span className="text-sm">4.7</span></span>
                            </div>

                            <p className="text-[15px] px-4 pt-2 text-[#777777]">{item.description}</p>
                            
                            {/* <div className="divider mt-2 mb-2"></div> */}
                            <div className="flex justify-between items-center text-sm bg-slate-100 text-[#686868] mt-6 px-4 py-3">
                                <div className="flex justify-center items-center gap-2 ">
                                    <img className="h-[25px] w-[25px] rounded-full border border-slate-400" src={item.instructorPhoto} alt="logo"/>
                                    <span>{item.instructorName}</span>
                                </div>

                                <div className="flex justify-center items-center gap-2 text-gray-600">
                                    <MdOutlineGroups size={25} color=""></MdOutlineGroups>
                                    <span>{item.availableSeat}</span>
                                </div>
                                <Link to={`/course-details/${item._id}`} state={item}><button disabled={isRole.role === "admin" ? true : isRole.role === "instructor" ? true : item.availableSeat === 0 ? true : false} className="px-2 py-1 rounded cursor-pointer border border-purple-400 text-[#686868] hover:bg-purple-700 hover:text-white">Details</button></Link>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default TopClasses;

