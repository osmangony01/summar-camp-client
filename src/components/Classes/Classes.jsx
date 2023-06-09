import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const Classes = () => {
    const {user} = useContext(AuthContext);
    return (
        <div>
            <p>{user?.email}</p>
            <p>{user?.displayName}</p>
        </div>
    );
};

export default Classes;