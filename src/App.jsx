import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Trending from "./components/Trending";
import Popular from "./components/Popular";
import Movies from "./components/Movies";
import TvShows from "./components/TvShows";
import People from "./components/People";
import About from "./components/About";
import Contact from "./components/Contact";
import MovieDetails from "./components/MovieDetails";
import TvDetails from "./components/TvDetails";
import PersonDetails from "./components/PersonDetails";
import Trailer from "./components/templates/Trailer";
import NotFound from "./components/NotFound";

export default function App() {
    return (
        <div className="bg-primary w-full h-full flex">
            <Routes>
                <Route path="/" element={<Home />} exact />
                <Route path="/trending" element={<Trending />} />
                <Route path="/popular" element={<Popular />} />
                <Route path="/movie" element={<Movies />} />
                <Route path="/movie/details/:id" element={<MovieDetails />}>
                    <Route path="/movie/details/:id/trailer" element={<Trailer />} />
                </Route>
                <Route path="/tv" element={<TvShows />} />
                <Route path="/tv/details/:id" element={<TvDetails />}>
                    <Route path="/tv/details/:id/trailer" element={<Trailer />} />
                </Route>
                <Route path="/person" element={<People />} />
                <Route path="/person/details/:id" element={<PersonDetails />} />

                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
    );
}
