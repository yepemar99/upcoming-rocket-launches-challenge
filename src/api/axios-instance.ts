import axios from "axios";

const instance = axios.create({
    baseURL: "https://spacelaunchnow.me/api/3.3.0/"
})

export default instance