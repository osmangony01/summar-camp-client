import { useContext } from "react";
import useApprovedClasses from "../../../hooks/useApprovedClasses";
import { AuthContext } from "../../../provider/AuthProvider";
import { useNavigate } from "react-router-dom";
import addSelectedClass from "../../../loader/addSelectedClass";
import useRole from "../../../hooks/useRole";


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

    const handleClasses = (item) => {
        if (user) {
            addSelectedClass(item, user);
        }
        else {
            navigate("/login", { replace: true });
        }
    }

    return (
        <div className="my-10 mx-10 md:mx-0">
            <h2 className="text-3xl text-center font-semibold my-10">Top Popular Classes</h2>
            <div className="w-full md:w-4/5 lg:w-3/4 mx-auto  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {
                    topClasses.map(item => <div key={item._id} className={`card bg-base-100 top-classes border rounded-md ${item.availableSeat == 0 && 'hover:bg-red-300'}`}>
                        <figure><img src={item.image} className="w-full h-[200px]" alt="Shoes" /></figure>
                        <div className="flex flex-col px-4 pt-4 pb-2 gap-1">
                            <h2 className="card-title">{item.className} Language</h2>
                            <p>{item.description}</p>
                            <div className="card-actions justify-end">
                                <div className="badge badge-secondary ">$ {item.price}</div>
                            </div>
                            <div className="divider mt-2 mb-2"></div>
                            <div className="flex justify-end">
                                <button onClick={() => handleClasses(item)} disabled={isRole.role === "admin" ? true : isRole.role === "instructor" ? true : item.availableSeat === 0 ? true : false} className="btn btn-outline btn-primary btn-sm ">Enroll Now</button>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default TopClasses;

