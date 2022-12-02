import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../services/api";
import MovieDetail from "../components/MovieDetail";
import MovieItemContent from "../components/MovieItemContent";
import { useSelector } from "react-redux";
import Loading from "../components/Loading";

const DetailPage = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState([]);
    const [similarMovies, setSimilarMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const theme = useSelector((state) => state.theme);

    useEffect(() => {
        const fetchData = async () => {
            await api.getMovie(id)
                .then(response => {
                    setMovie(response.data)
                    console.log(response.data);
                })
                .catch(error => {
                    alert(error)
                })

            await api.getSimilarMovies(id)
                .then(response => {
                    setSimilarMovies(response.data.results)
                })
                .catch(error => {
                    alert(error)
                })
            setLoading(false);
        }
        fetchData();
    }, []);

    return (
        <>   
            {loading && (
              <Loading />
            )
            }
            {!loading && (
                <>
                    <MovieDetail key={id} {...movie} />
                    <div className="m-14">
                        <h2 className={`text-3xl ${theme === `dark` ? `text-white` : `text-black`} mb-5 font-semibold`}>Similar Movies</h2>
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
                </>
            )}
        </>
    )
}

export default DetailPage;