import { useState } from "react";
import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import SingleProduct from "./pages/SingleProduct";

export default function App() {

    return (
        <>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact-us" element={<Contact />} />
                    <Route path="/single-product/:id" element={<SingleProduct />} />

                </Routes>
            </BrowserRouter>
        </>
    )
}