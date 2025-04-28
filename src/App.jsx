import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";

export default function App() {
    return (
        <div className="bg-primary w-screen h-screen flex">
            <Routes>
                <Route path="/" element={<Home />} exact /> 
            </Routes>
        </div>
    );
}
