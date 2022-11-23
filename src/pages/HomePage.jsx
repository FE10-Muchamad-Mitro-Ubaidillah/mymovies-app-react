import React from "react";
import api from "../services/api";
import MovieCarouselList from "../components/MovieCarouselList";
import MoviesList from "../components/MoviesList";
import MovieNavbar from "../components/MovieNavbar";
import MoviesListPlaying from "../components/MovieListPlaying";

class HomePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            movies: [],
        }
    }


    async getNowPlayingMovies() {
        await api.getNowPlayingMovies("now_playing")
            .then(res => {
                this.setState({
                    movies: res.data.results
                })
            })
            .catch(error => {
                alert(error)
            })
    }

    componentDidMount(){
        this.getNowPlayingMovies();
    }

    render() {
        const result = this.state.movies;
        console.log(result)
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