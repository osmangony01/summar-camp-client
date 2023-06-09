import { FaBars, FaUsers } from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";
import useRole from "../../hooks/useRole";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import axios from "axios";

const Dashboard = () => {
    //const [isRole, setIsRole] = useState([]);
    const { user } = useContext(AuthContext);

    // useEffect(() => {
    //     const fetchRole = async () => {
    //         if (user?.email) {
    //             try {
    //                 const response = await axios.get(`http://localhost:5000/user?email=${user.email}`);
    //                 //const data = await response.json();
    //                 const data = response.data;
    //                 setIsRole(data);
    //             }
    //             catch (error) {
    //                 console.error('Error fetching role:', error);
    //             }
    //         }
    //     };
    //     fetchRole();
    // }, [user]);

    const isRole = useRole();

    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col m-10">
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-outline btn-accent drawer-button lg:hidden "><FaBars size={22}></FaBars></label>
            </div>
            <div className="drawer-side ">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full bg-purple-500 text-white font-semibold text-base block">
                    {isRole.role === 'admin' && <>
                        <li><Link to="/dashboard/admin-home"><FaUsers size={25}></FaUsers><span className="font-semibold">Admin Home</span></Link></li>
                        <li><Link to="/dashboard/alluser"><FaUsers size={25}></FaUsers><span className="font-semibold">All User</span></Link></li>
                        <li><Link to="/dashboard/random">Random</Link></li>
                    </>}
                    {isRole.role === 'instructor' && <>
                        <li><Link to="/dashboard/instructor-home"><FaUsers size={25}></FaUsers><span className="font-semibold">User Home</span></Link></li>
                        <li><Link to="/dashboard/my-classes">My Classes</Link></li>
                        <li><Link to="/dashboard/add-class">Add Class</Link></li>
                    </>}
                    {isRole.role === 'student' && <>
                        <li><Link to="/dashboard/student-home"><FaUsers size={25}></FaUsers><span className="font-semibold">All User</span></Link></li>
                        <li><Link to="/dashboard/random">Random</Link></li>
                    </>}
                    <div className="divider ">OR</div>
                    <ul className="">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/instructors">Instructors</Link></li>
                        <li><Link to="/classes">Classes</Link></li>
                    </ul>
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;