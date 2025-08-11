import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./components/home/home.jsx";
import Login from "./components/login/login.jsx";
import Register from "./components/register/register.jsx";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </BrowserRouter>
    );
}
