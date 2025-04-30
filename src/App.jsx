import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Trending from "./components/Trending";
import Popular from "./components/Popular";
import Movies from "./components/Movies";
import TvShows from "./components/TvShows";
import People from "./components/People";
import About from "./components/About";
import Contact from "./components/Contact";

export default function App() {
    return (
        <div className="bg-primary w-full h-full flex">
            <Routes>
                <Route path="/" element={<Home />} exact />
                <Route path="/trending" element={<Trending />} />
                <Route path="/popular" element={<Popular />} />
                <Route path="/movies" element={<Movies />} />
                <Route path="/tvShows" element={<TvShows />} />
                <Route path="/people" element={<People />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </div>
    );
}
