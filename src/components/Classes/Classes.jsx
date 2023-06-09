import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import useApprovedClasses from "../../hooks/useApprovedClasses";
import { useNavigate } from "react-router-dom";
import addSelectedClass from "../../loader/addSelectedClass";

const Classes = () => {
    const { user } = useContext(AuthContext);
    const [approvedClasses] = useApprovedClasses();
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
        <div>
            <p>{user?.email}</p>
            <p>{user?.displayName}</p>
            <div className="w-4/5 mx-auto my-10">
                <h2 className="text-3xl text-orange-500 font-semibold my-10 text-center">All Classes Here</h2>
                <div className="overflow-x-auto">
                    <table className="table table-zebra">
                        {/* head */}
                        <thead className="text-base bg-slate-200  text-black font-semibold">
                            <tr>
                                <th>#</th>
                                <th>Image</th>
                                <th>Class Name</th>
                                <th>Instructor Name</th>
                                <th>Available seats</th>
                                <th>Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                approvedClasses.map((item, index) => <tr key={item._id}>
                                    <td>{index + 1}</td>
                                    <td>
                                        <div className="avatar">
                                            <div className="mask rounded-md w-[100px] h-[100px]">
                                                <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </td>
                                    <td>{item.className}</td>
                                    <td className="font-bold">{item.instructorName}</td>
                                    <td>{item.availableSeat}</td>
                                    <td>$ {item.price}</td>
                                    <td><button onClick={() => handleClasses(item)} className="btn btn-outline btn-primary btn-sm">Choose</button></td>
                                </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Classes;

