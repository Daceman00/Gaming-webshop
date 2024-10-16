import axios from "axios";
import { apiKey } from "../constants/constants";

export async function getGenres() {
    try {
        const { data } = await axios.get(`https://api.rawg.io/api/genres?token&key=${apiKey}`)
        return data.results

    } catch (err) {
        console.error(err)
        throw new Error("Genres are not fetched")
    }
}

export async function getSingleGenre(name) {
    try {
        const { data } = await axios.get(`https://rawg.io/api/games/${name}?key=${apiKey}`)
        return data
    } catch (err) {
        console.error(err)
        throw new Error("Genre is not found")
    }
}