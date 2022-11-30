import React, { useState, useEffect } from "react";
import api from "../services/api";
import MovieItemContent from "../components/MovieItemContent";
import MovieHero from "../components/MovieHero";
import { AiOutlineLoading } from 'react-icons/ai';
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";

const HomePage = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const theme = useSelector((state) => state.theme);
    const favorite = useSelector((state) => state.favorite);
    const [searchParams, setSearchParams] = useSearchParams();
    const [keyword, setKeyword] = useState(() => {
        return searchParams.get('keyword') || ''
    });

    console.log(favorite);

    let slide_index = 1;
    let next = 2;

    const onKeywordChange = (keyword) => {
        setKeyword(keyword);
        setSearchParams({ keyword });
    }

    useEffect(() => {
        const fetchData = async () => {
            await api.getNowPlayingMovies("now_playing")
                .then(response => {
                    setMovies(response.data.results);
                })
                .catch(error => {
                    alert(error);
                })
            setLoading(false);
        }
        fetchData();
    }, []);

    const filteredMovies = movies.filter((movie) => {
        return movie.title.toLowerCase().includes(
            keyword.toLowerCase()
        );
    });


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
                    <div className={`carousel w-full ${theme === `dark` ? `bg-gray-700` : `bg-slate-200`}`}>
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
                    <div className="p-10 mt-5">
                        <div className="my-10">
                            <div className={`flex pb-4 mb-5 border-b-2 ${theme === `dark` ? `border-slate-700` : `border-gray-200`}`}>
                                <h2 className={`text-2xl mb-5 font-bold flex-1 ${theme === `dark` ? `text-gray-200` : `text-gray-800`}`}>Now Playing</h2>
                                <div className="flex-1 form-control items-end">
                                    <input type="text" placeholder="Search by title" className="input w-4/5 input-bordered shadow-xl" value={keyword} onChange={(e) => onKeywordChange(e.target.value)} />
                                </div>
                            </div>
                            <div className="relative w-auto">
                                {filteredMovies.length !== 0 ?
                                    <div className="grid grid-cols-7 gap-6">
                                        {
                                            filteredMovies.map(movie => (
                                                <div className="w-auto relative" key={movie.id}>
                                                    <MovieItemContent
                                                        favorited={false}
                                                        {...movie}
                                                        movie={movie}
                                                    />
                                                </div>
                                            ))
                                        }
                                    </div>
                                    :
                                    <div className="text-center text-white flex">
                                        <h1 className="text-3xl flex-1">Movies Not Found</h1>
                                    </div>
                                }
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