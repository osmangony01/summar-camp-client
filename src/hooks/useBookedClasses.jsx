import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import axiosInstance from '../routes/axiosInstance';

const useBookedClasses = () => {
    const { user } = useContext(AuthContext);

    const { isLoading, refetch, data: bookedClasses = [] } = useQuery({
        queryKey: ['bookedClasses', user?.email],
        queryFn: async () => {
            const response = await axiosInstance.get(`/booked-classes?email=${user.email}`)
            return response.data;
        },
    })

    return [bookedClasses, refetch];
};


export default useBookedClasses;