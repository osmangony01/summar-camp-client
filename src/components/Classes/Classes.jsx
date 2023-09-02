import { useContext, useEffect } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import useApprovedClasses from "../../hooks/useApprovedClasses";
import { useNavigate } from "react-router-dom";
import addSelectedClass from "../../loader/addSelectedClass";
import Banner from '../../components/Banner/Banner';
import useRole from "../../hooks/useRole";
import { useState } from "react";
import profileImg from "../../../public/images/profile.webp";
import useTitle from "../../hooks/useTitle";

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
            <div className="my-12">
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
            </div>
        </div >
    );
};

export default Classes;

