import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../utils/axios";
import TopNavbar from "./templates/TopNavbar";
import Dropdown from "./templates/Dropdown";
import InfiniteScroll from "react-infinite-scroll-component";
import Cards from "./templates/Cards";
import Loader from "./Loader";

export default function TvShows() {
    const navigate = useNavigate();
    const [category, setCategory] = useState("airing_today");
    const [tv, setTv] = useState([]);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);

    const getTv = async () => {
        try {
            const { data } = await api(`/tv/${category}?page=${page}`);

            if (data.results.length > 0) {
                setTv((prevState) => [...prevState, ...data.results]);
                setPage((prev) => prev + 1);
            } else setHasMore(false);
        } catch (err) {
            console.log(err.message);
        }
    };

    useEffect(() => {
        const refreshHandler = () => {
            if (tv.length === 0) {
                getTv();
            } else {
                setPage(1);
                setTv([]);
                getTv();
            }
        };

        refreshHandler();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [category]);

    return tv.length > 0 ? (
        <>
            <title>PopKorn | Tv Shows</title>
            <div className="w-full h-full mt-2 mb-5 font-inter px-[2%]">
                <div className="w-full flex items-center justify-between gap-1">
                    <h1 className="text-2xl font-semibold text-zinc-400">
                        <i
                            onClick={() => navigate(-1)}
                            className="hover:text-secondary ri-arrow-left-line cursor-pointer"
                        />{" "}
                        Tv Shows <small className="ml-2 text-zinc-600 text-sm">{category}</small>
                    </h1>

                    <div className="flex items-center w-[90%]">
                        <TopNavbar />
                        <div className="flex gap-4">
                            <Dropdown
                                title={"Category"}
                                options={["on_the_air", "popular", "top_rated", "airing_today"]}
                                handleChange={(e) => setCategory(e.target.value)}
                            />
                        </div>
                    </div>
                </div>

                {/* //! movie card: */}
                <InfiniteScroll
                    dataLength={tv.length}
                    next={getTv}
                    hasMore={hasMore}
                    loader={<h1 className="text-white">Loading...</h1>}
                >
                    <Cards data={tv} title="tv" />
                </InfiniteScroll>
            </div>
        </>
    ) : (
        <Loader />
    );
}
