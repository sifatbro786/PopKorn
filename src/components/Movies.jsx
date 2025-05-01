import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../utils/axios";
import TopNavbar from "./templates/TopNavbar";
import Dropdown from "./templates/Dropdown";
import InfiniteScroll from "react-infinite-scroll-component";
import Cards from "./templates/Cards";
import Loader from "./Loader";

export default function Movies() {
    const navigate = useNavigate();
    const [category, setCategory] = useState("now_playing");
    const [movie, setMovie] = useState([]);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);

    const getMovie = async () => {
        try {
            const { data } = await api(`/movie/${category}?page=${page}`);

            if (data.results.length > 0) {
                setMovie((prevState) => [...prevState, ...data.results]);
                setPage((prev) => prev + 1);
            } else setHasMore(false);
        } catch (err) {
            console.log(err.message);
        }
    };

    useEffect(() => {
        const refreshHandler = () => {
            if (movie.length === 0) {
                getMovie();
            } else {
                setPage(1);
                setMovie([]);
                getMovie();
            }
        };

        refreshHandler();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [category]);

    return movie.length > 0 ? (
        <>
            <title>PopKorn | Movies</title>
            <div className="w-full h-full mt-2 mb-5 font-inter px-[2%]">
                <div className="w-full flex items-center justify-between gap-1">
                    <h1 className="text-2xl font-semibold text-zinc-400">
                        <i
                            onClick={() => navigate(-1)}
                            className="hover:text-secondary ri-arrow-left-line cursor-pointer"
                        />{" "}
                        Movie <small className="ml-2 text-zinc-600 text-sm">{category}</small>
                    </h1>

                    <div className="flex items-center w-[90%]">
                        <TopNavbar />
                        <div className="flex gap-4">
                            <Dropdown
                                title={"Category"}
                                options={["popular", "top_rated", "upcoming", "now_playing"]}
                                handleChange={(e) => setCategory(e.target.value)}
                            />
                        </div>
                    </div>
                </div>

                {/* //! movie card: */}
                <InfiniteScroll
                    dataLength={movie.length}
                    next={getMovie}
                    hasMore={hasMore}
                    loader={<h1 className="text-white">Loading...</h1>}
                >
                    <Cards data={movie} title="movie" />
                </InfiniteScroll>
            </div>
        </>
    ) : (
        <Loader />
    );
}
