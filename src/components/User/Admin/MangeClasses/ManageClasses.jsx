import { FaRegEdit, FaTrashAlt } from "react-icons/fa";
import useAllClasses from "../../../../hooks/useAllClasses";


const ManageClasses = () => {
    const [allClasses, refetch] = useAllClasses();

    return (
        <div>
            <h3 className="text-3xl font-semibold mb-2">Total Classes: {allClasses.length}</h3>
            <div className="overflow-x-auto">
                <table className="table table-zebra text-sm">
                    <thead className="bg-purple-200 font-semibold">
                        <tr>
                            <th>#</th>
                            <th>Image</th>
                            <th>Class Name</th>
                            <th>Instructor name</th>
                            <th>Instructor email</th>
                            <th>Available seats</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allClasses.map((item, index) => <tr key={item._id}>
                                <th>{index + 1}</th>
                                <td><img src={item.image} alt="" /></td>
                                <td>{item.className}</td>
                                <td>{item.instructorName}</td>
                                <td>{item.instructorEmail}</td>
                                <td>{item.availableSeat}</td>
                                <td>$ {item.price}</td>
                                <td>{item.status}</td>
                                <td className="flex">
                                    <button  className="text-black  text-sm py-1 px-1 border border-blue-300 hover:text-white hover:bg-blue-600 rounded font-semibold mr-2">Approved</button>
                                    <button  className="text-black  text-sm py-1 px-1 border border-orange-300 hover:text-white hover:bg-orange-600 rounded font-semibold mr-2">Deny</button>
                                    <button  className="text-black  text-sm py-1 px-1 border border-purple-300 hover:text-white hover:bg-purple-600 rounded font-semibold mr-2">Feedback</button>
                                </td>
                            </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageClasses;