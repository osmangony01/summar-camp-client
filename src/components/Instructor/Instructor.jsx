import { useState } from "react";
import useApprovedClasses from "../../hooks/useApprovedClasses";
import Banner from '../../components/Banner/Banner';
import { useEffect } from "react";
import useTitle from "../../hooks/useTitle";


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
            <div className="my-12">
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
            </div>
        </div>
    );
};

export default Instructor;