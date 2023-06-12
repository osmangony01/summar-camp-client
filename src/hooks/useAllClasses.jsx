import { useQuery } from "@tanstack/react-query";

const useAllClasses = () => {
   
    const { isLoading, refetch, data: allClasses = [] } = useQuery({
        queryKey: ['allClasses'],
        queryFn: async () => {
            const response = await fetch(`https://summar-camp-server.vercel.app/all-classes`)
            return response.json()
        },
    })

    return [allClasses, refetch];
};

export default useAllClasses;