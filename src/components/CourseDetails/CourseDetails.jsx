import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaCalendarDays } from "react-icons/fa6";
import priceImg from "../../../public/images/icon-price.svg";
import seatImg from "../../../public/images/icon-availability.svg";
import locImg from "../../../public/images/icon-location.svg";
import levelImg from "../../../public/images/icon-difficulty.svg";
import { FaStar } from "react-icons/fa";
import { IoMdTime } from "react-icons/io";
import useRole from '../../hooks/useRole';
import { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import addSelectedClass from '../../loader/addSelectedClass';
import CourseDetailsImg from '../../../public/images/banner/c3.jpg';

const CourseDetails = () => {
    const location = useLocation();
    const isRole = useRole();

    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleClasses = (item) => {
        if (user) {
            addSelectedClass(item, user);
        }
        else {
            navigate("/login", { replace: true });
        }
    }

    // console.log(location);
    const { availableSeat, className, description, endDate, enrollStudent, feedbacks, image, instructorEmail, instructorName, instructorPhoto, price, startDate, status, _id
    } = location.state;

    return (
        <div className=''>
          
            <div className='relative'>
                <img src={CourseDetailsImg} className="h-[240px] sm:h-[280px] md:h-[350px] xl:h-[420px] w-full" alt="img" />
                <div className="absolute h-full left-0 top-0 right-0 bg-[#050505] bg-opacity-70">
                    <div className='absolute top-1/2 left-[calc(50%-69px)] text-lg text-[#cfcfcf]'>

                    </div>
                </div>
            </div>

            <div className="mb-16 mt-20 mx-10 sm:mx-32 md:mx-5 lg:mx-0">
                <div className='w-full md:w-2/3 lg:w-4/5 mx-auto'>
                    <div className='relative mt-[-165px] text-white'>
                        <div className='text-4xl font-semibold pb-2'>{className} Language</div>
                        <div className='flex  items-center gap-4'><FaCalendarDays size={25}></FaCalendarDays>{startDate}</div>
                    </div>
                    <div className='mt-10 text-[#747373]'>
                        <div className='text-2xl font-semibold pb-2 '>{className} Language</div>
                        <div className='flex justify-between items-center'>
                            <div className='flex gap-4'>
                                <div><img className="w-[50px] h-[50px] rounded-full" src={instructorPhoto} alt="img" /></div>
                                <div className='flex flex-col'>
                                    <span className='text-sm'>Teacher</span>
                                    <span>{instructorName}</span>
                                </div>
                            </div>
                            <div>
                                <button onClick={() => handleClasses(location.state)} disabled={isRole.role === "admin" ? true : isRole.role === "instructor" ? true : availableSeat === 0 ? true : false} className="px-4 py-2 font-semibold rounded cursor-pointer bg-purple-500 text-white hover:bg-purple-700 ">Enroll Course</button>
                            </div>
                        </div>
                    </div>
                    <div className='course-details pt-6 gap-10 '>
                        <div>
                            <div><img className="w-full h-[400px]" src={image} alt="img" /></div>
                            <div className='flex flex-col pt-5'>
                                <div className='flex justify-between items-center'>
                                    <span className='text-lg font-semibold'>Description</span>
                                    <span className="flex justify-center items-center gap-1 pr-2 text-base"><FaStar size={14} color="orange"></FaStar><span className="">4.7</span></span>
                                </div>

                                <span>{description}</span>
                            </div>
                        </div>
                        <div className='text-[#646464]'>
                            <div className='flex justify-between items-center py-5'>
                                <img className='w-[40px] h-[40px]' src={priceImg} alt="price" />
                                <span>Price : {price} $</span>
                            </div>
                            <hr />
                            <div className='flex justify-between items-center py-5'>
                                <img className='w-[40px] h-[40px]' src={seatImg} alt="price" />
                                <span>Max Availability : {price}</span>
                            </div>
                            <hr />
                            <div className='flex justify-between items-center py-5'>
                                <img className='w-[40px] h-[40px]' src={levelImg} alt="price" />
                                <span>Difficulty : Beginner</span>
                            </div>
                            <hr />
                            <div className='flex justify-between items-center py-5'>
                                <img className='w-[40px] h-[40px]' src={locImg} alt="price" />
                                <span>Location : Headquarter</span>
                            </div>
                            <hr />
                            <div className='flex justify-between items-center py-5'>
                                <FaCalendarDays size={35} color="gray"></FaCalendarDays>
                                <span>Start date : {startDate}</span>
                            </div>
                            <hr />
                            <div className='flex justify-between items-center py-5'>
                                <FaCalendarDays size={35} color="gray"></FaCalendarDays>
                                <span>End date : {endDate}</span>
                            </div>
                            <hr />
                            <div className='flex justify-between items-center py-5'>
                                <IoMdTime size={35} color="gray"></IoMdTime>
                                <span>Duration : 35h</span>
                            </div>
                            <hr />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default CourseDetails;