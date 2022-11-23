import React from "react";
import MovieItemContent from "./MovieItemContent";

class MoviesList extends React.Component {
    render(){
        return (
            <div className="flex overflow-x-auto">
                {
                    this.props.movies.map((movie) => (
                        <div className="flex-none relative first:mr-3 last:ml-3 mx-3 mb-2">
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

export default MoviesList;