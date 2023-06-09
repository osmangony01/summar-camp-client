import { useQuery } from '@tanstack/react-query';
import { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';


const useInstructorClasses = () => {
    const { user } = useContext(AuthContext);

    const { isLoading, refetch, data: instructorClass = [] } = useQuery({
        queryKey: ['instructorClass', user?.email],
        queryFn: async () => {
            const response = await fetch(`http://localhost:5000/instructor/classes?email=${user.email}`)
            return response.json()
        },
    })

    return [instructorClass, refetch];
};

export default useInstructorClasses;