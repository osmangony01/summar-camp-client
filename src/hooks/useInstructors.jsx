import axiosInstance from "../routes/axiosInstance";



const useInstructors = () => {
    const { data: instructors = [] } = useQuery({
        queryKey: ['instructors'],
        queryFn: async () => {
            const response = await axiosInstance.get(`http://localhost:5000/instructors`);
            return response.data;
        },
    })

    return [instructors];
};

export default useInstructors;