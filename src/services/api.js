import axios from "axios";

const instance = axios.create({
    baseURL: `https://api.themoviedb.org/3/movie`
});


export default {
    getNowPlayingMovies:(keyword) =>
    instance({
        method: `GET`,
        url: `${keyword}?api_key=4cee0d1f3d660d8d420266c93e1f1e5d`
    })
}