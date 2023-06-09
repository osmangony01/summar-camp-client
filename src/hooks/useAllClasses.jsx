import { useQuery } from "@tanstack/react-query";

const useAllClasses = () => {
   
    const { isLoading, refetch, data: allClasses = [] } = useQuery({
        queryKey: ['allClasses'],
        queryFn: async () => {
            const response = await fetch(`http://localhost:5000/all-classes`)
            return response.json()
        },
    })

    return [allClasses, refetch];
};

export default useAllClasses;