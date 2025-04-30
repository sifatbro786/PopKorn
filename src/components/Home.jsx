import { useEffect, useState } from "react";
import SideNavbar from "./templates/SideNavbar";
import TopNavbar from "./templates/TopNavbar";
import api from "../utils/axios";
import Header from "./templates/Header";
import HorizontalCards from "./templates/HorizontalCards";
import Dropdown from "./templates/Dropdown";
import Loader from "./Loader";

export default function Home() {
    const [wallpaper, setWallpaper] = useState(null);
    const [trending, setTrending] = useState(null);
    const [category, setCategory] = useState("all");

    //* getSearchResult:
    useEffect(() => {
        const getSearchResult = async () => {
            try {
                const { data } = await api(`/trending/all/day`);

                let randomData = data?.results[(Math.random() * data?.results.length).toFixed()];
                setWallpaper(randomData);
            } catch (err) {
                console.log(err.message);
            }
        };
        !wallpaper && getSearchResult();
    }, [wallpaper]);

    //* getTrendingMovies:
    useEffect(() => {
        const getTrending = async () => {
            try {
                const { data } = await api(`/trending/${category}/day`);

                setTrending(data?.results);
            } catch (err) {
                console.log(err.message);
            }
        };
        getTrending();
    }, [category]);

    return wallpaper && trending ? (
        <>
            <title>PopKorn | Home</title>
            <div className="flex w-full">
                <div className="w-[20%] h-full p-9 font-inter">
                    <SideNavbar />
                </div>

                <div className="w-[1px] bg-zinc-400 h-full" />

                <div className="w-[80%] h-full text-white">
                    <TopNavbar left={"home"} />
                    <Header data={wallpaper} />

                    <div className="my-5 px-5 flex justify-between items-center">
                        <h1 className="text-3xl font-semibold text-zinc-400">Trending</h1>

                        <Dropdown
                            title={"Filter"}
                            options={["tv", "movie", "all"]}
                            handleChange={(e) => setCategory(e.target.value)}
                        />
                    </div>

                    <HorizontalCards data={trending} />
                </div>
            </div>
        </>
    ) : (
        <Loader />
    );
}
