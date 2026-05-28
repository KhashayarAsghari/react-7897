import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import About from "./pages/About";
import Home from "./pages/Home";

export default function App() {

    return (
        <>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />

                </Routes>
            </BrowserRouter>
        </>
    )
}