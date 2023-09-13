import { useContext, useEffect } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import useApprovedClasses from "../../hooks/useApprovedClasses";
import { Link, useNavigate } from "react-router-dom";
import addSelectedClass from "../../loader/addSelectedClass";
import useRole from "../../hooks/useRole";
import { useState } from "react";
import useTitle from "../../hooks/useTitle";
import { PiBookmarksSimple } from "react-icons/pi";
import { FaStar } from "react-icons/fa6";
import { MdOutlineGroups } from "react-icons/md";
import classHomeImg from "../../../public/images/banner/c3.jpg";

const Classes = () => {
    const { user } = useContext(AuthContext);
    const [approvedClasses] = useApprovedClasses();
    const [classes, setClasses] = useState([]);
    const [isShowAll, setIsShowAll] = useState(true);
    const navigate = useNavigate();
    useTitle('Classes');

    useEffect(() => {
        const sixClass = approvedClasses.slice(0, 6);
        setClasses(isShowAll ? sixClass : approvedClasses);
    }, [approvedClasses, isShowAll]);

    const handleClasses = (item) => {
        if (user) {
            addSelectedClass(item, user);
        }
        else {
            navigate("/login", { replace: true });
        }
    }

    const isRole = useRole();

    const handleShowAllBtn = () => {
        setIsShowAll(false);
    }

    return (
        <div>
           
            <div className='relative'>
                <img src={classHomeImg} className="h-[240px] sm:h-[280px] md:h-[350px] xl:h-[420px] w-full" alt="img" />
                <div className="absolute h-full left-0 top-0 right-0 bg-[#050505] bg-opacity-70">
                    <div className='absolute top-1/2 left-[calc(50%-69px)] text-lg text-[#cfcfcf]'>
                        Home | Courses
                    </div>
                </div>
            </div>
            
            <div className="mb-16 mt-20 mx-10 sm:mx-32 md:mx-5 lg:mx-0">
                <h2 className="text-3xl text-orange-500 text-center font-semibold mt-10 mb-16">All Courses Here</h2>
                <div className="w-full md:w-2/3 lg:w-4/5 mx-auto  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
                    {
                        classes?.map(item => <div key={item._id} className={`card bg-base-100 top-classes border rounded ${item.availableSeat == 0 && 'hover:bg-red-300'}`}>
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
                                <div className=" flex justify-between items-center text-sm bg-slate-100 text-[#686868] mt-6 px-4 py-3">
                                    <div className="flex justify-center items-center gap-2 ">
                                        <img className="h-[25px] w-[25px] rounded-full border border-slate-400" src={item.instructorPhoto} alt="logo" />
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
                <div className="flex justify-center pt-8">
                    {isShowAll ? <button className='btn-show-all-classes' onClick={handleShowAllBtn}>Show All Classes</button> : ""}
                </div>
            </div>
        </div >
    );
};

export default Classes;

