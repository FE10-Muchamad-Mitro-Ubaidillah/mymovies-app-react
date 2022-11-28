import React, { useState, useEffect, useContext } from "react";
import api from "../services/api";
import MovieItemContent from "../components/MovieItemContent";
import MovieHero from "../components/MovieHero";
import { AiOutlineLoading } from 'react-icons/ai';
import LocaleContext from "../context/context";

const HomePage = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const {theme} = useContext(LocaleContext);

    let slide_index = 1;
    let next = 2;

    useEffect(() => {
        const fetchData = async () => {
            await api.getNowPlayingMovies("now_playing")
                .then(response => {
                    setMovies(response.data.results);
                })
                .catch(error => {
                    console.log(error);
                })
            setLoading(false);
        }
        fetchData();
    }, []);


    return (
        <>
            {loading && (
                <div className="relative h-screen w-screen bg-gray-800">
                    <div className="absolute top-60 left-1/2 text-center">
                        <AiOutlineLoading className="animate-spin w-20 h-20" />
                        <p className="text-xl">Loading...</p>
                    </div>
                </div>
            )
            }
            {!loading && (
                <>
                    <div className={`carousel w-full ${theme === `dark` ? `bg-gray-700` : `bg-slate-200` }`}>
                        {
                            movies.map(movie => (
                                <div className="carousel-item relative w-full" key={movie.id} id={slide_index++}>
                                    <MovieHero {...movie} />
                                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                        <a href={`#${next - 2}`} className="btn btn-circle text-base">❮</a>
                                        <a href={`#${next++}`} className="btn btn-circle text-base">❯</a>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div className="p-10 mt-10">
                        <div className="my-10">
                            <h2 className={`text-2xl mb-5 font-bold ${theme === `dark` ? `text-gray-200` : `text-gray-800` }`}>Favorite Movies</h2>
                            <div className="relative overflow-auto w-auto">
                                <div className={`flex overflow-x-auto scrollbar-thin ${theme === `dark` ? `scrollbar-thumb-gray-700 scrollbar-track-gray-600` : `scrollbar-thumb-gray-500 scrollbar-track-gray-600` } p-5`}>
                                    {movies.map(movie => (
                                        <div className="flex-none relative first:mr-3 last:ml-3 mx-3" key={movie.id}>
                                            <MovieItemContent {...movie} />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="my-10">
                            <h2 className={`text-2xl mb-5 font-bold ${theme === `dark` ? `text-gray-200` : `text-gray-800` }`}>Now Playing</h2>
                            <div className="relative w-auto">
                                <div className="grid grid-cols-7 gap-6">
                                    {movies.map(movie => (
                                        <div className="w-auto relative" key={movie.id}>
                                            <MovieItemContent {...movie} />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )
            }
        </ >
    )
}

export default HomePage;