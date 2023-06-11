import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../routes/axiosInstance";


const useEnrolledClasses = () => {
    const { user } = useContext(AuthContext);

    const { isLoading, refetch, data: enrolledClasses = [] } = useQuery({
        queryKey: ['enrolledClasses', user?.email],
        queryFn: async () => {
            const response = await axiosInstance.get(`/enrolled-classes?email=${user.email}`)
            return response.data;
        },
    })

    return [enrolledClasses];
};

export default useEnrolledClasses;