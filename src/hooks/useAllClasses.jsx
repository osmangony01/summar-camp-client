import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../routes/axiosInstance";

const useAllClasses = () => {
   
    const { isLoading, refetch, data: allClasses = [] } = useQuery({
        queryKey: ['allClasses'],
        queryFn: async () => {
            // const response = await fetch(`http://localhost:5005/courses`)
            // return response.json()
            const response = await axiosInstance.get("/courses");
            return response.data;
        },
    })

    return [allClasses, refetch];
};

export default useAllClasses;