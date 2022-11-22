import React from "react";

class MovieCarousel extends React.Component {

    render() {
        const { title, genre, image, desc, href, next, prev } = this.props;
        return (
                <div id={href} className="hero min-h-screen carousel-item relative w-full">
                    <div className="hero-content flex-col lg:flex-row-reverse p-20">
                        <img src={image} className="max-w-sm rounded-lg shadow-2xl" />
                        <div>
                            <h1 className="text-5xl font-bold">{title}</h1>
                            <p className="py-6">{genre}</p>
                            <p className="py-6">{desc}</p>
                            <button className="btn border-gray-800 border-2 bg-transparent text-black hover:bg-gray-800 hover:text-white mr-4">+ Add to Favorite</button>
                            <button className="btn bg-red-600 border-none hover:bg-red-700">Play Film</button>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-1 right-1 top-1/2">
                        <a href={prev} className="btn btn-circle hover:text-red-700 hover:bg-gray-800 bg-gray-800">❮</a>
                        <a href={next} className="btn btn-circle hover:text-red-700 hover:bg-gray-800 bg-gray-800">❯</a>
                    </div>
                </div>

            
        )
    }
}

export default MovieCarousel;