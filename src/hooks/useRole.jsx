
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";

const useRole = () => {
    const { user } = useContext(AuthContext);
    const [role, setRole] = useState([]);

    useEffect(() => {
        const fetchRole = async () => {
            if (user?.email) {
                const response = await fetch(`http://localhost:5000/user?email=${user.email}`);
                const data = await response.json();
                setRole(data);
            }
        };
        fetchRole();
    }, [user]);

    return role;
};

export default useRole;
