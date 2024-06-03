import axios from "axios";

const apiKey = "5174374ab9cd45b28fe281504edfe452"

export async function getGames() {
    const { data, error } = await axios.get(`https://rawg.io/api/games?token&key=${apiKey}`)

    if (error) {
        console.error(error)
        throw new Error("Games are not fetched")
    }

    return data.results;
}