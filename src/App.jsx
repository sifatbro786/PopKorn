import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Trending from "./components/Trending";

export default function App() {
    return (
        <div className="bg-primary w-full h-full flex">
            <Routes>
                <Route path="/" element={<Home />} exact />
                <Route path="/trending" element={<Trending />} />
            </Routes>
        </div>
    );
}
