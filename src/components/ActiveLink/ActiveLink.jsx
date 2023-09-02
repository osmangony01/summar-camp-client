
import { NavLink } from 'react-router-dom';

const ActiveLink = ({ to, children }) => {
    return (
        <NavLink
            to={to}
            className={({ isActive }) => isActive ? "hover:bg-white text-blue-500 " : "hover:bg-white hover:text-red-500"}
        >
            {children}
        </NavLink>
    );
};

export default ActiveLink;