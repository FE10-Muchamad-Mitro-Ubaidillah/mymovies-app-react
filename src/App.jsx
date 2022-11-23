import React from "react";
import HomePage from "./pages/HomePage";
import "./assets/custom.css";

class App extends React.Component {
   
    render() {
        return (
            <div className="movie-app bg-slate-100 relative">
                <HomePage />
            </div>
        )
    }
}

export default App;