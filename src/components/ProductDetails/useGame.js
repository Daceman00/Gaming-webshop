import { useQuery } from "@tanstack/react-query";
import { getGame } from "../../services/apiGames";
import { useParams } from "react-router-dom";

export function useGame() {
    const { gameID } = useParams()
    const { data: game, isLoading, error } = useQuery({
        queryKey: ["games", gameID],
        queryFn: () => getGame(gameID),
        retry: false
    })

    return { game, isLoading, error }
}