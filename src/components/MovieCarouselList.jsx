import React from "react";
import MovieCarousel from "./MovieCarousel";

class MovieCarouselList extends React.Component {
    render() {
        return(
            <div className="carousel w-full">
                {
                    this.props.movies.map((movie) => (
                        <MovieCarousel
                            {...movie}
                        />
                    ))

                }    
            </div>
        )
    }
}

export default MovieCarouselList;