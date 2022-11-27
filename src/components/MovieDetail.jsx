import React from "react";

const MovieDetail = ({ poster_path, title, overview, genres, vote_average, popularity }) => {
    return (
        <div className="flex flex-row flex-row-reverse items-center justify-evenly text-white md:py-8 bg-gray-700">
            <div className="">
                <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} className="object-bottom shadow-2xl min-h-full lg:max-h-[500px] md:max-h-[350px] min-w-full max-w-auto" />
            </div>
            <div className="w-2/5">
                <h1 className="text-4xl font-bold">{title}</h1>
                <div className="py-6">
                    <div className="py-5">
                        {genres.map(genre => (
                            <span key={genre.id} className="border-solid border-2 border-gray-500 p-1.5 rounded mx-1.5 first:ml-0">{genre.name}</span>
                        ))}
                    </div>

                    <div className="rating">
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                        <span>{vote_average.toFixed(1)} / 10</span>
                    </div>
                    
                    <p className="">{overview}</p>
                </div>
                <button className="btn border-white border-2 bg-transparent text-white hover:bg-white hover:text-black mr-4">+ Add to Favorite</button>
                <button className="btn bg-red-600 border-none hover:bg-red-700">Play Film</button>
            </div>
        </div>
    )
}

export default MovieDetail;