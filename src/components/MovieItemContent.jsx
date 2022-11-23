import React from "react";

class MovieItemContent extends React.Component {

    render() {
        const {poster_path, title, overview, popularity} = this.props;
        return (
            <>
                <img className="rounded-box img-card" src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title} />
                <a href="" className="flex flex-warp property bg-transparent hover:bg-[#000000a2] rounded-box absolute text-transparent hover:text-white top-0 p-4">
                    <div className="self-end text-xs">
                        <h4 className="w-full font-bold">{title}</h4>
                        <p>{popularity}</p>
                        <p>{overview.substring(0, 50)}</p>
                        <button className="w-full mt-3 hover:bg-red-700 border-none p-0.5 rounded">+ Add to Favorite</button>
                    </div>
                </a>
            </>
        )
    }
}

export default MovieItemContent;