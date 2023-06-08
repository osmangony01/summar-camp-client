import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { FaUserCircle } from "react-icons/fa";
import useRole from "../../hooks/useRole";


const Navbar = () => {
    const [userControl, setUserControl] = useState(false);
    const [toggle, setToggle] = useState(false);

    const { role } = useRole();

    const { user, logOut } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogOut = () => {
        logOut()
            .then(() => {
                navigate("/", { replace: true });
            })
            .catch(error => console.log(error.message))
    }

    const navItems = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/instructors">Instructors</Link></li>
        <li><Link to="/classes">Classes</Link></li>
        {user && <li><Link to={role === "admin" ? "/dashboard/admin-home" : role === 'instructor' ? "/dashboard/instructor-home" : "/dashboard/user-home"}>Dashboard</Link></li>}
        {!user && <li><Link to="/login">Login</Link></li>}
    </>

    return (
        // <div className="navbar bg-base-100">
        //     <div className="navbar-start">
        //         <div className="dropdown">
        //             <label tabIndex={0} className="btn btn-ghost lg:hidden">
        //                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        //             </label>
        //             <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        //                 {navItems}
        //             </ul>
        //         </div>
        //         <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
        //     </div>
        //     <div className="navbar-center hidden lg:flex">
        //         <ul className="menu menu-horizontal px-1">
        //             {navItems}
        //         </ul>
        //     </div>
        //     <div className="navbar-end">
        //         <a className="btn">Button</a>
        //     </div>
        // </div>
        <div className="navbar bg-base-100 px-10">
            <div className="navbar-start">
                <div className="relative" onClick={() => setToggle(!toggle)}>
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    {
                        toggle && <div className="absolute left-0 top-10 lg:hidden z-20">
                            <ul className="menu menu-compact mt-3 p-2 shadow bg-base-100 rounded-md w-52">
                                {navItems}
                            </ul>
                        </div>
                    }
                </div>
                <div className="flex items-center">
                    <img src="/images/logo2.png" alt="asdf" />
                    <a className="btn btn-ghost normal-case text-xl md:text-2xl">PlaySmart</a>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {user && navItems}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    !user && <div className="hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            {navItems}
                        </ul>
                    </div>
                }
                {
                    user && <div className="relative" onClick={() => setUserControl(!userControl)}>
                        <label className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                {user.photoURL ? <img src={user.photoURL} alt="" className='bg-slate-200' title={user.displayName} />
                                    : <span className='first-line:' title={user.displayName}><FaUserCircle size={40}></FaUserCircle></span>}
                            </div>
                        </label>
                        {
                            userControl && <div className="absolute right-0 top-10 z-10">
                                <ul className="menu menu-compact mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                    <li><span>{user.email}</span></li>
                                    <li onClick={handleLogOut}><a>Sign Out</a></li>
                                </ul>
                            </div>
                        }
                    </div>
                }
            </div>
        </div>
    );
};

export default Navbar;