import { FaBars, FaUsers } from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";


const Dashboard = () => {

    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col m-10">
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-outline btn-accent drawer-button lg:hidden "><FaBars size={22}></FaBars></label>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full bg-base-300 text-base-content">
                    <li><Link to="/dashboard/alluser"><FaUsers size={25}></FaUsers><span className="font-semibold">All User</span></Link></li>
                    <li><a>Sidebar Item 2</a></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;