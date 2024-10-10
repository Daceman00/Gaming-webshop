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

export async function getGame(id) {
    try {
        const { data } = await axios.get(`https://rawg.io/api/games/${id}?key=${apiKey}`)
        return data
    } catch (err) {
        console.error(err)
        throw new Error("Game can not be found")
    }


}