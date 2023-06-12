import { FaBars, FaHome, FaListUl, FaUserFriends, FaUsers } from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";
import useRole from "../../hooks/useRole";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import axios from "axios";
import { BsFillBookmarkPlusFill } from "react-icons/bs";
import { MdAddCard } from "react-icons/md";
import { GrCheckboxSelected } from "react-icons/gr";

//RiPlayListAddFill
import { RiPlayListAddFill } from "react-icons/ri";
const Dashboard = () => {
    //const [isRole, setIsRole] = useState([]);
    const { user } = useContext(AuthContext);

    const isRole = useRole();

    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col m-5">
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-outline btn-accent drawer-button lg:hidden "><FaBars size={22}></FaBars></label>
            </div>
            <div className="drawer-side ">
                <label htmlFor="my-drawer-2" className="drawer-overlay m-0"></label>
                <ul className="menu p-4 w-80 h-full bg-purple-500 text-white  text-sm block">
                    <div className="flex items-center mb-3">
                        <img src="/images/logo3.png" alt="asdf" />
                        <a className="ml-2 text-md font-semibold md:text-xl">WorldSpeak</a>
                    </div>
                    {isRole.role === 'admin' && <>
                        <li><Link to="/dashboard/admin-home"><FaHome size={20}></FaHome><span className="font-semibold">Admin Home</span></Link></li>
                        <li><Link to="/dashboard/manage-users"><FaUsers size={20}></FaUsers><span className="font-semibold">Manage Users</span></Link></li>
                        <li><Link to="/dashboard/manage-classes"><RiPlayListAddFill size={20}></RiPlayListAddFill><span className="font-semibold">Manage Classes</span></Link></li>
                        <li><Link to="/dashboard/random">Random</Link></li>
                    </>}
                    {isRole.role === 'instructor' && <>
                        <li><Link to="/dashboard/instructor-home"><FaHome size={20}></FaHome><span className="font-semibold">Instructor Home</span></Link></li>
                        <li><Link to="/dashboard/my-classes"><FaListUl size={20}></FaListUl>My Classes</Link></li>
                        <li><Link to="/dashboard/add-class"><RiPlayListAddFill size={20}></RiPlayListAddFill>Add Class</Link></li>
                    </>}
                    {isRole.role === 'student' && <>
                        <li><Link to="/dashboard/student-home"><FaHome size={20}></FaHome><span className="font-semibold">Student Home</span></Link></li>
                        <li><Link to="/dashboard/my-selected-classes"><FaListUl size={20}></FaListUl><span className="font-semibold">My Selected classes</span></Link></li>
                        <li><Link to="/dashboard/my-enroll-classes"><BsFillBookmarkPlusFill size={20}></BsFillBookmarkPlusFill> <span className="font-semibold">My Enroll classes</span></Link></li>
                        <li><Link to="/dashboard/payment-history"><MdAddCard size={20}></MdAddCard><span className="font-semibold">Payment history</span></Link></li>
                        <li><Link to="/dashboard/random">Random</Link></li>
                    </>}
                    <div className="divider ">OR</div>
                    <ul className="">
                        <li><Link to="/"><FaHome size={20}></FaHome>Home</Link></li>
                        <li><Link to="/instructors"><FaUserFriends size={20}></FaUserFriends> Instructors</Link></li>
                        <li><Link to="/classes"><FaListUl size={20}></FaListUl> Classes</Link></li>
                    </ul>
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;