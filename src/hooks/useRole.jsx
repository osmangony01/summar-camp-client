
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import axios from "axios";

const useRole = () => {
    const { user } = useContext(AuthContext);
    const [isRole, setIsRole] = useState([]);

    // useEffect(() => {
    //     if (user?.email) {
    //         fetch(`http://localhost:5000/user?email=${user.email}`)
    //             .then(res => res.json())
    //             .then(data => setRole(data))
    //     }
    // }, []);

    //console.log(role)

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

    // if (user?.email) {
    //     const { data:userData =[], isLoading } = useQuery('userData', async () => {
    //         const response = await axios.get(`http://localhost:5000/user?email=${user.email}`);
    //         //const data = await response.json();
    //         return response.data;
    //     })

    //     if (isLoading) {

    //         return <div>Loading...</div>;
    //     }
    //     console.log(userData)
    //     return [userData];
    // }


};

export default useRole;
