import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import useRole from "../../../../hooks/useRole";
import { useState } from "react";


const AllUser = () => {

    const headers = {
        authorization: `Bearer ${localStorage.getItem('access_token')}`
    }

    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await fetch(`http://localhost:5000/users`, { headers });
        return res.json();
    })

    const [isDisable, setIsDisable] = useState(false);
    const { role } = useRole();

    // if(role === 'admin' || role === 'instructor'){
    //     setIsDisable(true);
    // }
    // else {
    //     setIsDisable(false);
    // }


    const handleDelete = user => {
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
                fetch(`http://localhost:5000/users/${user._id}`, { method: "DELETE" })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )

                        }
                        console.log(data)
                    })
            }
        })
    }
    // const handleMakeAdmin = (user) => {
    //     fetch(`http://localhost:5000/user-role/${user._id}`, { method: "PATCH" })
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data);
    //             if (data.modifiedCount) {
    //                 refetch();
    //                 Swal.fire({
    //                     position: 'top-end',
    //                     icon: 'success',
    //                     title: `${user.name} is an Admin Now`,
    //                     showConfirmButton: false,
    //                     timer: 1500
    //                 })
    //             }
    //         })
    // }
    const handleMakeRole = async (user, roleName) => {
        const role = { id: user._id, name: roleName };
        const res = await axios.patch('http://localhost:5000/user-role/', role)
        const response = res.data;
        if (response.modifiedCount) {
            refetch();
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: `${user.name} is an ${roleName} Now`,
                showConfirmButton: false,
                timer: 1500
            })
        }
    }

    return (
        <div>
            <h3 className="text-3xl font-semibold mb-2">Total User: {users.length}</h3>
            <div className="overflow-x-auto">
                <table className="table table-zebra text-sm">
                    <thead className="bg-blue-200 text-base">
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <tr key={user._id}>
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.role}</td>
                                <td>

                                    <button onClick={() => handleMakeRole(user, 'admin')} className={`text-black  text-sm py-2 px-3 border border-orange-400 ${user.role === 'student' && ' hover:text-white hover:bg-orange-600'} rounded font-semibold mr-2`} disabled={user.role === 'admin' ? true : user.role === 'instructor' ? true : false}>Make Admin</button>
                                    <button onClick={() => handleMakeRole(user, 'instructor')} className={`text-black  text-sm py-2 px-3 border border-blue-400 ${user.role === 'student' && ' hover:text-white hover:bg-blue-600'} rounded font-semibold`} disabled={user.role === 'admin' ? true : user.role === 'instructor' ? true : false}>Make Instructor</button>

                                </td>
                                <td><button onClick={() => handleDelete(user)} className="btn btn-square bg-red-600"><FaTrashAlt color={'white'} size={20}></FaTrashAlt></button></td>
                            </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUser;