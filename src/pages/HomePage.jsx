import React from "react";
import {getMoviesData} from '../utils/index';
import MovieCarouselList from "../components/MovieCarouselList";
import MoviesListPlaying from "../components/MovieListPlaying";
import MovieNavbar from "../components/MovieNavbar";
import MoviesList from "../components/MoviesList";

class HomePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            movies: getMoviesData(),
        }
    }

    render() {

        return (
            <>
                <MovieNavbar />
                <div className="px-20">
                    <MovieCarouselList movies={this.state.movies} />
                </div>
                <div className="p-10 mt-10">
                    <div className="my-10">
                        <h2 className="text-2xl mb-5 font-bold">Popular Movies</h2>
                        <div className="relative overflow-auto w-auto">
                            <MoviesList movies={this.state.movies} />
                        </div>
                    </div>

                    <div className="my-10">
                        <h2 className="text-2xl mb-5 font-bold">Favorite Movies</h2>
                        <div className="relative overflow-auto w-auto">
                            <MoviesList movies={this.state.movies} />
                        </div>
                    </div>

                    <div className="my-10">
                        <h2 className="text-2xl mb-5 font-bold">Now Playing</h2>
                        <div className="relative overflow-auto w-auto">
                            <MoviesListPlaying movies={this.state.movies} />
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default HomePage;