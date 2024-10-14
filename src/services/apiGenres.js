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