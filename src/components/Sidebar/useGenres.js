import { useQuery } from "@tanstack/react-query";
import { getGenres } from "../../services/apiGenres";

export function useGenres() {
    const { data: genres, isLoading, error } = useQuery({
        queryKey: ['genres'],
        queryFn: () => getGenres()
    })

    return { genres, isLoading, error }
}