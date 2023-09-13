import { useQuery } from '@tanstack/react-query';
import { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import axiosInstance from '../routes/axiosInstance';


const useInstructorClasses = () => {
    const { user } = useContext(AuthContext);

    const { isLoading, refetch, data: instructorClass = [] } = useQuery({
        queryKey: ['instructorClass', user?.email],
        queryFn: async () => {
            const response = await axiosInstance.get(`/instructor-courses?email=${user.email}`)
            return response.data;
        },
    })

    return [instructorClass, refetch];
};

export default useInstructorClasses;