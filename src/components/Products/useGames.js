
import { useQuery } from "@tanstack/react-query";
import { getGames } from "../../services/apiGames";

export function useGames() {
    const { data: games, error, isLoading } = useQuery({
        queryKey: ['games'],
        queryFn: () => getGames()
    })

    return { games, error, isLoading }
}