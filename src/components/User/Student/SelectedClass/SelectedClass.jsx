
import useBookedClasses from '../../../../hooks/useBookedClasses';
import { FaTrashAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import axiosInstance from '../../../../routes/axiosInstance';
import Swal from 'sweetalert2';

const SelectedClass = () => {
    const [bookedClasses, refetch] = useBookedClasses();
    console.log(bookedClasses);

    const handleDelete =  id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                async function deleteClass (){
                    const res = await axiosInstance.delete(`/delete-selected-class/${id}`);
                    const data = res.data;
                    if (data.deletedCount > 0) {
                        refetch();
                        Swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                        )
                    }
                }
                deleteClass();
            }
        })
    }

    return (
        <div>
            <div className="">
                <h2 className="text-3xl text-orange-500 font-semibold my-10">My Classes</h2>
                <div className="overflow-x-auto">
                    <table className="table table-zebra text-sm">
                        <thead className=" bg-slate-200  text-black font-semibold">
                            <tr>
                                <th>#</th>
                                <th>Image</th>
                                <th>Class Name</th>
                                <th>Instructor Name</th>
                                <th>Available seats</th>
                                <th>Price</th>
                                <th>Payment</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                bookedClasses.map((item, index) => <tr key={item._id}>
                                    <td>{index + 1}</td>
                                    <td>
                                        <div className="avatar">
                                            <div className="mask rounded-md w-[100px] h-[100px]">
                                                <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </td>
                                    <td>{item.className}</td>
                                    <td>{item.instructorName}</td>
                                    <td>{item.availableSeat}</td>
                                    <td>$ {item.price}</td>
                                    <td><Link to={`/dashboard/payment/${item._id}`}><button className='p-2 rounded-md text-base font-semibold bg-orange-500 text-white hover:bg-orange-700 border-orange-400'>Pay</button></Link></td>
                                    <td><button onClick={() => handleDelete(item._id)} className="p-2 rounded-md text-base font-semibold bg-red-600 hover:bg-slate-400"><FaTrashAlt color={'white'} size={25}></FaTrashAlt></button></td>
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

export default SelectedClass;