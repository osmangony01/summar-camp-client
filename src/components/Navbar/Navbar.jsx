import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { FaUserCircle } from "react-icons/fa";
import useRole from "../../hooks/useRole";
import ActiveLink from "../ActiveLink/ActiveLink";


const Navbar = () => {
    const [userControl, setUserControl] = useState(false);
    const [toggle, setToggle] = useState(false);

    const { user, logOut } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogOut = () => {
        logOut()
            .then(() => {
                navigate("/", { replace: true });
            })
            .catch(error => console.log(error.message))
    }

    const isRole = useRole();
    //console.log(isRole);

    const navItems = <>
        <li><ActiveLink to="/">HOME</ActiveLink></li>
        <li><ActiveLink to="/classes"> COURSES</ActiveLink></li>
        <li><ActiveLink to="/instructors"> INSTRUCTORS</ActiveLink></li>
        <li><ActiveLink to="/contact"> CONTACT</ActiveLink></li>

        {user && <li><ActiveLink to={isRole.role === "admin" ? "/dashboard/admin-home" : isRole.role === 'instructor' ? "/dashboard/instructor-home" : "/dashboard/student-home"}>PROFILE</ActiveLink></li>}
        {!user && <li><ActiveLink to="/login">SIGN IN</ActiveLink></li>}
    </>
    
    return (
        <div className="relative">


            <div className="navbar bg-neutral text-neutral-content  md:px-20 py-2  scroll-py-2.5">
                <div className="navbar-start">
                    <div className="relative" onClick={() => setToggle(!toggle)}>
                        <label tabIndex={0} className="btn btn-ghost lg:hidden m-0">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        {
                            toggle && <div className="absolute left-0 top-10 lg:hidden z-20">
                                <ul className="menu menu-compact mt-3 p-2 shadow bg-base-100 rounded-md w-52 text-black  text-sm">
                                    {navItems}
                                </ul>
                            </div>
                        }
                    </div>
                    <div className="flex items-center">
                        <img src="/images/logo3.png" alt="asdf" />
                        <a className="btn btn-ghost normal-case text-xl md:text-2xl">WorldSpeak</a>
                    </div>
                </div>
              
                <div className="navbar-end">
                    {
                        <div className="hidden lg:flex">
                            <ul className="menu menu-horizontal px-1 text-[#ece9e9]  text-sm">
                                {navItems}
                            </ul>
                        </div>
                    }
                    {
                        user && <div className="relative" onClick={() => setUserControl(!userControl)}>
                            <label className="btn btn-ghost btn-circle avatar m-0">
                                <div className="w-10 rounded-full">
                                    {user.photoURL ? <img src={user.photoURL} alt="" className='bg-slate-200' title={user.displayName} />
                                        : <span className='first-line:' title={user.displayName}><FaUserCircle size={40}></FaUserCircle></span>}
                                </div>
                            </label>
                            {
                                userControl && <div className="absolute right-0 top-10 z-10 text-black">
                                    <ul className="menu menu-compact mt-3 p-2 shadow bg-base-100 rounded-md w-52">
                                        <li><span>{user.email}</span></li>
                                        <li onClick={handleLogOut}><a>Sign Out</a></li>
                                    </ul>
                                </div>
                            }
                        </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;

