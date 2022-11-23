import React from "react";
import MovieItemContent from "./MovieItemContent";

class MoviesListPlaying extends React.Component {
    render(){
        return(
            <div className="grid grid-cols-7 gap-6">
                {
                    this.props.movies.map((movie) => (
                        <div className="w-auto relative">
                            <MovieItemContent
                                key={movie.id}
                                {...movie}
                            />
                        </div>
                    ))
                }
            </div>
        )
    }
}

export default MoviesListPlaying;