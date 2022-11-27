import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../services/api";
import MovieDetail from "../components/MovieDetail";
import MovieNavbar from "../components/MovieNavbar";
import MovieItemContent from "../components/MovieItemContent";

const DetailPage = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState([]);
    const [similarMovies, setSimilarMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            await api.getMovie(id)
                .then(response => {
                    setMovie(response.data)
                })
                .catch(error => {
                    console.log(error)
                })

            await api.getSimilarMovies(id)
                .then(response => {
                    console.log(response.data.results)
                    setSimilarMovies(response.data.results)
                })
                .catch(error => {
                    console.log(error)
                })

            setLoading(false);
        }
        fetchData();
    }, []);

    return (
        <div className="bg-gray-800">
            {loading && <div>loading</div>}
            {!loading && (
                <>
                    <MovieNavbar />
                    <MovieDetail key={id} {...movie} />
                </>
            )}
            <div className="m-14">
                <h2 className="text-3xl text-white mb-5 font-semibold">Similar Movies</h2>
                <div className="relative w-auto">
                    <div className="grid grid-cols-7 gap-6">
                        {similarMovies.map(movie => (
                            <div className="w-auto relative" key={movie.id}>
                                <MovieItemContent {...movie} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailPage;