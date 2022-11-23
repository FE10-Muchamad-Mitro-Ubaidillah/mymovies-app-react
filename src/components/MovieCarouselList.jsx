import React from "react";
import MovieCarousel from "./MovieCarousel";

class MovieCarouselList extends React.Component {
    render() {
        let index_slide =  1;
        let next = 2;
        let prev =  index_slide;
        return(
            <div className="carousel w-full">
                {
                    this.props.movies.map((movie) => (
                        <MovieCarousel
                            index={++index_slide}
                            prev={index_slide-1}
                            next={++next}
                            {...movie}
                        />
                    ))

                }    
            </div>
        )
    }
}

export default MovieCarouselList;