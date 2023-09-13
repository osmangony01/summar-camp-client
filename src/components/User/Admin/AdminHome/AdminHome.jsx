import React, { useContext } from 'react';
import { AuthContext } from '../../../../provider/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import useAllClasses from '../../../../hooks/useAllClasses';

const AdminHome = () => {
    const {user} = useContext(AuthContext);

    const headers = {
        authorization: `Bearer ${localStorage.getItem('access_token')}`
    }

    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await fetch(`https://summar-camp-server.vercel.app/all-users`, { headers });
        return res.json();
    })

    const [allClasses] = useAllClasses();

    return (
        <div>
            <h2 className="text-2xl ">Hi, {user.displayName}</h2>
            <div className='flex gap-6'> 
            <div className="card w-[300px] bg-blue-500 shadow-xl mt-3">
                <div className="card-body">
                    <h2 className="text-2xl text-white font-semibold">Total Users: {users.length}</h2>
                </div>
            </div>
            <div className="card w-[300px] bg-green-500 shadow-xl mt-3">
                <div className="card-body">
                    <h2 className="text-2xl text-white font-semibold">Total Classes: {allClasses.length}</h2>
                </div>
            </div>
            </div>
        </div>
    );
};

export default AdminHome;