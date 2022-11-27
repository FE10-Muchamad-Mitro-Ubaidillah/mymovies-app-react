import React, { useState, useEffect } from "react";
import api from "../services/api";
import MovieNavbar from "../components/MovieNavbar";
import MovieItemContent from "../components/MovieItemContent";
import MovieHero from "../components/MovieHero";

const HomePage = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    let slide_index = 1;
    let next = 2;

    // console.log(carousel);

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
        <div className="bg-gray-800 text-white">
            {loading && <div>loading</div>}
            {!loading && (
                <>
                    <MovieNavbar />
                    <div className="carousel w-full bg-gray-700">
                        {
                            movies.map(movie => (
                                <div className="carousel-item relative w-full" key={movie.id} id={slide_index++}>
                                    <MovieHero {...movie} />
                                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                        <a href={`#${next-2}`} className="btn btn-circle text-base">❮</a>
                                        <a href={`#${next++}`} className="btn btn-circle text-base">❯</a>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div className="p-10 mt-10">
                        <div className="my-10">
                            <h2 className="text-2xl mb-5 font-bold">Favorite Movies</h2>
                            <div className="relative overflow-auto w-auto">
                                <div className="flex overflow-x-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-300 p-5">
                                    {movies.map(movie => (
                                        <div className="flex-none relative first:mr-3 last:ml-3 mx-3" key={movie.id}>
                                            <MovieItemContent {...movie} />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="my-10">
                            <h2 className="text-2xl mb-5 font-bold">Now Playing</h2>
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
        </div >
    )
}

export default HomePage;