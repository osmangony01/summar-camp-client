import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../routes/axiosInstance";

const useApprovedClasses = () => {
   
    const { isLoading, refetch, data: approvedClass = [] } = useQuery({
        queryKey: ['approvedClass'],
        queryFn: async () => {
            const response = await axiosInstance.get("/approved-classes");
            return response.data;
        },
    })

    return [approvedClass, refetch];
};

export default useApprovedClasses;