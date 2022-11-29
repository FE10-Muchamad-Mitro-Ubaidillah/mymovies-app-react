import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../services/api";
import MovieDetail from "../components/MovieDetail";
import MovieItemContent from "../components/MovieItemContent";
import {AiOutlineLoading} from "react-icons/ai";
import { useSelector } from "react-redux";

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
               <div className={`relative h-screen w-screen ${theme === 'dark' ? `bg-gray-800 text-white` : `bg-white text-black`} `}>
               <div className="absolute top-60 left-1/2 text-center">
                   <AiOutlineLoading className="animate-spin w-20 h-20" />
                   <p className="text-xl">Loading...</p>
               </div>
           </div>
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