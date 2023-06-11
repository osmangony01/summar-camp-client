
import Swal from "sweetalert2";
import useAllClasses from "../../../../hooks/useAllClasses";
import axiosInstance from "../../../../routes/axiosInstance";


const ManageClasses = () => {
    const [allClasses, refetch] = useAllClasses();

    const handleUpdateStatus = async (id, status) => {
        const updateStatus = { id: id, status: status }
        const response = await axiosInstance.patch("/update-status", updateStatus);
        console.log(response.data);
        const data = response.data;
        if (data.modifiedCount > 0) {
            refetch();
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: `Status updated successfully`,
                showConfirmButton: false,
                timer: 1500
            })
        }

    }

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
                                <td><img src={item.image} alt="img" /></td>
                                <td>{item.className}</td>
                                <td>{item.instructorName}</td>
                                <td>{item.instructorEmail}</td>
                                <td>{item.availableSeat}</td>
                                <td>$ {item.price}</td>
                                <td>{item.status}</td>
                                <td className="flex">
                                    <button onClick={() => handleUpdateStatus(item._id, "approved")} className={`manage-class-btn  border border-blue-300 ${item.status === 'pending' ? 'hover:text-white hover:bg-blue-600 text-black' : 'text-slate-400'} `} disabled={item.status === "pending" ? false : true}>Approved</button>
                                    <button onClick={() => handleUpdateStatus(item._id, "deny")} className={`manage-class-btn  border border-orange-300  ${item.status === 'pending' ? 'hover:text-white hover:bg-orange-600 text-black' : 'text-slate-400'} `} disabled={item.status === "pending" ? false : true}>Deny</button>
                                    <button className={`manage-class-btn border border-purple-300 ${item.status ==="deny" ? 'hover:text-white hover:bg-purple-600 text-black' : 'text-slate-400'} `} disabled={item.status ==="deny" ? false : true}>Feedback</button>
                                </td>
                            </tr>
                            )
                        }
                        {/* {`manage-class-btn border border-purple-300 ${item.status ==="deny" && 'hover:text-white hover:bg-purple-600'} `} */}
                        {/* /images/learn_img.jpg */}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageClasses;