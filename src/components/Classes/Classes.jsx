import { useContext, useEffect } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import useApprovedClasses from "../../hooks/useApprovedClasses";
import { Link, useNavigate } from "react-router-dom";
import addSelectedClass from "../../loader/addSelectedClass";
import Banner from '../../components/Banner/Banner';
import useRole from "../../hooks/useRole";
import { useState } from "react";
import profileImg from "../../../public/images/profile.webp";
import useTitle from "../../hooks/useTitle";
import { PiBookmarksSimple } from "react-icons/pi";
import { FaStar } from "react-icons/fa6";
import { MdOutlineGroups } from "react-icons/md";

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
            <Banner img="../../../public/images/banner/c3.jpg" label="Home | Courses "></Banner>
            {/* <div className="my-12">
                <h2 className="text-3xl text-orange-500 font-semibold mb-10 mt-16 text-center">All Classes Here</h2>
                <div className="w-full md:w-4/5 lg:w-3/4 mx-auto  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {
                        classes?.map(item => <div key={item._id} className={`card border p-5 bg-base-100 classes rounded-md ${item.availableSeat == 0 ? 'hover:bg-red-300' : ''}`}>
                            <figure><img src={item.image} className="w-full h-[180px]" alt="Shoes" /></figure>
                            <div className="flex flex-col pt-3 gap-1">
                            <div className="flex items-center">
                                   <span className="pr-2"><img className="w-[45px] h-[45px]" src={profileImg} alt="profile"/></span><span className="font-semibold">{item.instructorName}</span>
                                </div>
                                <h2 className="text-2xl font-semibold pb-2">Learn {item.className} </h2>
                                
                                <div className="card-actions justify-between">
                                    <h4>Available Seats</h4>
                                    <span className="badge badge-accent">+{item.availableSeat}</span>
                                </div>
                                <div className="card-actions justify-between">
                                    <h4>Price</h4>
                                    <span className="badge badge-primary ">$ {item.price}</span>
                                </div>
                                <div className="divider mt-2 mb-2"></div>
                                <div className="card-actions justify-end">
                                    <button onClick={() => handleClasses(item)} disabled={isRole.role === "admin" ? true : isRole.role === "instructor" ? true : item.availableSeat === 0 ? true : false} className="btn btn-outline btn-primary btn-sm">Enroll</button>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
                <div className="flex justify-center pt-8">
                    {isShowAll ? <button className='btn-show-all-classes' onClick={handleShowAllBtn}>Show All Classes</button> : ""}
                </div>
            </div> */}
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

                                {/* <div className="divider mt-2 mb-2"></div> */}
                                <div className="flex justify-between items-center text-sm bg-slate-100 text-[#686868] mt-6 px-4 py-3">
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

