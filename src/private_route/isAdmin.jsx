import { useNavigate } from "react-router-dom";
import useRole from "../hooks/useRole";


const isAdmin = ({ children }) => {
    const isRole = useRole();
    const navigate = useNavigate();

    if (isRole.role === "admin") {
        return children;
    }
    else {
        navigate("/", { replace: true });
    }
};

export default isAdmin;