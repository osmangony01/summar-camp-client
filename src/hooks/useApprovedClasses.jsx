import { useQuery } from "@tanstack/react-query";
import instance from "../routes/axiosInstance";

const useApprovedClasses = () => {
   
    const { isLoading, refetch, data: approvedClass = [] } = useQuery({
        queryKey: ['approvedClass'],
        queryFn: async () => {
            const response = await instance.get("/approved-classes");
            return response.data;
        },
    })

    return [approvedClass, refetch];
};

export default useApprovedClasses;