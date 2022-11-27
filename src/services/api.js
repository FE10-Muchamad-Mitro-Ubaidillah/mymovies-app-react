import axios from "axios";

const instance = axios.create({
    baseURL: `https://api.themoviedb.org/3/movie`
});


export default {
    getNowPlayingMovies:(keyword) =>
    instance({
        method: `GET`,
        url: `${keyword}?api_key=${import.meta.env.VITE_API_KEY}&language=en-US&page=1`,
    }),
    getMovie:(id) =>
    instance({
        method: `GET`,
        url: `${id}?api_key=${import.meta.env.VITE_API_KEY}&language=en-US`
    }),
    getSimilarMovies:(id) => 
    instance({
        method: `GET`,
        url: `${id}/similar?api_key=${import.meta.env.VITE_API_KEY}&language=en-US&page=1`
    })
}