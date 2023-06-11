
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import axios from "axios";

const useRole = () => {
    const { user } = useContext(AuthContext);
    const [isRole, setIsRole] = useState([]);

    useEffect(() => {
        const fetchRole = async () => {
            if (user?.email) {
                try {
                    const response = await axios.get(`http://localhost:5000/user?email=${user.email}`);
                    //const data = await response.json();
                    const data = response.data;
                    setIsRole(data);
                }
                catch (error) {
                    console.error('Error fetching role:', error);
                }
            }
        };
        fetchRole();
    }, [user]);

    return isRole;
};

export default useRole;
