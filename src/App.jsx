import React from "react";
import { Route, Routes } from "react-router-dom";
import DetailPage from "./pages/DetailPage";
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";

import "./assets/custom.css";

const App = () => {
    return (
        <div className="bg-slate-100">
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/detail/:id" element={<DetailPage />} />
                <Route path="/register" element={<RegisterPage />} />
            </Routes>
        </div>
    )
}

export default App;