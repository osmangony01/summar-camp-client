import { useContext } from "react";
import { AuthContext } from "../../../../provider/AuthProvider";
import useInstructorClasses from "../../../../hooks/useInstructorClasses";


const InstructorHome = () => {

    const { user } = useContext(AuthContext);
    const [instructorClass] = useInstructorClasses();
    //console.log(instructorClass);


    return (
        <div>
            <h2 className="text-2xl ">Hi, {user.displayName}</h2>
            <div className="card w-[300px] bg-blue-400 shadow-xl mt-3">
                <div className="card-body">
                    <h2 className="text-2xl text-white font-semibold">Total Class: {instructorClass.length}</h2>
                </div>
            </div>
        </div>
    );
};

export default InstructorHome;