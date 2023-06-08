import { useQuery } from "@tanstack/react-query";
import { FaTrashAlt, FaUserShield } from "react-icons/fa";
import Swal from "sweetalert2";


const AllUser = () => {

    const headers = {
        authorization: `Bearer ${localStorage.getItem('access_token')}`
    }

    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await fetch(`http://localhost:5000/users`, { headers });
        return res.json();
    })

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
    const handleMakeAdmin = (user) => {
        fetch(`http://localhost:5000/user-role/${user._id}`, { method: "PATCH" })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${user.name} is an Admin Now`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }

    return (
        <div>
            <h3 className="text-3xl font-semibold mb-2">Total User: {users.length}</h3>
            <div className="overflow-x-auto">
                <table className="table table-zebra text-base">
                    <thead className="bg-blue-200 text-base">
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <tr key={user._id}>
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>
                                    {user.role === 'admin' ? 'admin' : user.role === 'instructor' ? 'instructor' : <><button onClick={() => handleMakeAdmin(user)} className="btn btn-square bg-orange-500"><FaUserShield size={20} color={"white"}></FaUserShield></button></>}
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