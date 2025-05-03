import { useNavigate } from "react-router-dom";
import TopNavbar from "./templates/TopNavbar";
import Dropdown from "./templates/Dropdown";
import { useEffect, useState } from "react";
import api from "../utils/axios";
import Cards from "./templates/Cards";
import Loader from "./Loader";
import InfiniteScroll from "react-infinite-scroll-component";

export default function Trending() {
    const navigate = useNavigate();
    const [category, setCategory] = useState("all");
    const [duration, setDuration] = useState("day");
    const [trending, setTrending] = useState([]);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);

    //* getTrendingMovies:
    const getTrending = async () => {
        try {
            const { data } = await api(`/trending/${category}/${duration}?page=${page}`);

            if (data.results.length > 0) {
                setTrending((prevState) => [...prevState, ...data.results]);
                setPage((prev) => prev + 1);
            } else setHasMore(false);
        } catch (err) {
            console.log(err.message);
        }
    };

    useEffect(() => {
        const refreshHandler = () => {
            if (trending.length === 0) {
                getTrending();
            } else {
                setPage(1);
                setTrending([]);
                getTrending();
            }
        };

        refreshHandler();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [category, duration]);

    return trending.length > 0 ? (
        <>
            <title>PopKorn | Trending</title>

            <div className="w-full h-full mt-2 mb-5 font-inter px-[2%]">
                <div className="w-full flex items-center justify-between gap-1">
                    <h1 className="text-2xl font-semibold text-zinc-400">
                        <i
                            onClick={() => navigate(-1)}
                            className="hover:text-secondary ri-arrow-left-line cursor-pointer"
                        />{" "}
                        Trending
                    </h1>

                    <div className="flex items-center w-[90%]">
                        <TopNavbar left={"trending"} />
                        <div className="flex gap-4">
                            <Dropdown
                                title={"Category"}
                                options={["movie", "tv", "all"]}
                                handleChange={(e) => setCategory(e.target.value)}
                            />
                            <Dropdown
                                title={"Duration"}
                                options={["week", "day"]}
                                handleChange={(e) => setDuration(e.target.value)}
                            />
                        </div>
                    </div>
                </div>

                {/* //! movie card: */}
                <InfiniteScroll
                    dataLength={trending.length}
                    next={getTrending}
                    hasMore={hasMore}
                    loader={<h1 className="text-white">Loading...</h1>}
                >
                    <Cards data={trending} title={category} />
                </InfiniteScroll>
            </div>
        </>
    ) : (
        <Loader />
    );
}
