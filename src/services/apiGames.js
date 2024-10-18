import axios from "axios";
import { apiKey } from "../constants/constants";


export async function getGames() {
    try {
        const { data } = await axios.get(`https://rawg.io/api/games?token&key=${apiKey}`)
        return data.results;
    } catch (err) {
        console.error(err)
        throw new Error("Games are not fetched")
    }
}

export async function getGame(id) {
    try {
        const { data } = await axios.get(`https://rawg.io/api/games/${id}?key=${apiKey}`)
        return data
    } catch (err) {
        console.error(err)
        throw new Error("Game can not be found")
    }
}