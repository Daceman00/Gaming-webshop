import { useQuery } from "@tanstack/react-query";
import { getSingleGenre } from "../../services/apiGenres";
import { useParams } from "react-router-dom";

export function useSingleGenre() {
    const { genreName } = useParams()
    const { data: genre, isLoading, error } = useQuery({
        queryKey: ["genres", genreName],
        queryFn: () => getSingleGenre(genreName),
        retry: false
    })

    return { genre, isLoading, error };

}