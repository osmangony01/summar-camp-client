import axiosInstance from "../routes/axiosInstance";



const useInstructors = () => {
    const { data: instructors = [] } = useQuery({
        queryKey: ['instructors'],
        queryFn: async () => {
            const response = await axiosInstance.get(`/instructors`);
            return response.data;
        },
    })

    return [instructors];
};

export default useInstructors;