import { useEffect, useState } from "react";
import SideNavbar from "./templates/SideNavbar";
import TopNavbar from "./templates/TopNavbar";
import api from "../utils/axios";
import Header from "./templates/Header";

export default function Home() {
    const [wallpaper, setWallpaper] = useState(null);

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
        getSearchResult();
    }, []);

    return wallpaper ? (
        <>
            <title>PopKorn | Home</title>

            <SideNavbar />
            <div className="w-[80%] h-full">
                <TopNavbar />
                <Header data={wallpaper} />
            </div>
        </>
    ) : (
        <h1>Loading...</h1>
    );
}
