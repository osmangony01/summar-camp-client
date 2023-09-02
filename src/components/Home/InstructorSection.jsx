
import useApprovedClasses from "../../hooks/useApprovedClasses";

const InstructorSection = () => {

    const [approvedClass] = useApprovedClasses();
    let instructors =[];
    if (approvedClass.length > 6) {
        instructors = approvedClass.slice(0, 6);
    } 
    else {
        instructors = approvedClass;
    }


    return (
        <div className="mb-12 mt-16 bg-gray-200 py-12 px-10 md:px-0">
            <h2 className="text-3xl text-center font-semibold my-10">Popular Instructor</h2>
            <div className=" w-full md:w-4/5 lg:w-3/4 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

                {
                    instructors.map(item => <div key={item._id} className="card bg-base-200  rounded-md instructor-shadow">
                        <figure><img src={item.instructorPhoto} className="w-full h-[200px]" alt="img" /></figure>
                        <div className="flex flex-col p-4 gap-1">
                            <h2 className="card-title">{item.instructorName}</h2>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default InstructorSection;