import { useContext } from "react";
import { AuthContext } from "../../../../provider/AuthProvider";
import useBookedClasses from "../../../../hooks/useBookedClasses";
import useEnrolledClasses from "../../../../hooks/useEnrolledClasses";


const StudentHome = () => {
    const {user} = useContext(AuthContext);
    const [bookedClasses] = useBookedClasses();
    const [enrolledClasses] = useEnrolledClasses();

    return (
        <div>
            <h2 className="text-2xl ">Hi, {user.displayName}</h2>
            <div className='flex gap-6'> 
            <div className="card w-[320px] bg-blue-500 shadow-xl mt-3">
                <div className="card-body">
                    <h2 className="text-2xl text-white font-semibold">Total Selected Class: {bookedClasses.length}</h2>
                </div>
            </div>
            <div className="card w-[320px] bg-green-500 shadow-xl mt-3">
                <div className="card-body">
                    <h2 className="text-2xl text-white font-semibold">Total Enrolled Class: {enrolledClasses.length}</h2>
                </div>
            </div>
            </div>
        </div>
    );
};

export default StudentHome;