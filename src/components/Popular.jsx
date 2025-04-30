import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../utils/axios";
import Loader from "./Loader";
import InfiniteScroll from "react-infinite-scroll-component";
import TopNavbar from "./templates/TopNavbar";
import Dropdown from "./templates/Dropdown";
import Cards from "./templates/Cards";

export default function Popular() {
    const navigate = useNavigate();
    const [category, setCategory] = useState("movie");
    const [popular, setPopular] = useState([]);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);

    const getPopular = async () => {
        try {
            const { data } = await api(`/${category}/popular?page=${page}`);

            if (data.results.length > 0) {
                setPopular((prevState) => [...prevState, ...data.results]);
                setPage((prev) => prev + 1);
            } else setHasMore(false);
        } catch (err) {
            console.log(err.message);
        }
    };

    useEffect(() => {
        const refreshHandler = () => {
            if (popular.length === 0) {
                getPopular();
            } else {
                setPage(1);
                setPopular([]);
                getPopular();
            }
        };

        refreshHandler();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [category]);

    return popular.length > 0 ? (
        <>
            <title>PopKorn | Popular</title>
            <div className="w-full h-full mt-2 mb-5 font-inter px-[2%]">
                <div className="w-full flex items-center justify-between gap-1">
                    <h1 className="text-2xl font-semibold text-zinc-400">
                        <i
                            onClick={() => navigate(-1)}
                            className="hover:text-secondary ri-arrow-left-line cursor-pointer"
                        />{" "}
                        Popular
                    </h1>

                    <div className="flex items-center w-[90%]">
                        <TopNavbar />
                        <div className="flex gap-4">
                            <Dropdown
                                title={"Category"}
                                options={["movie", "tv"]}
                                handleChange={(e) => setCategory(e.target.value)}
                            />
                        </div>
                    </div>
                </div>

                {/* //! movie card: */}
                <InfiniteScroll
                    dataLength={popular.length}
                    next={getPopular}
                    hasMore={hasMore}
                    loader={<h1 className="text-white">Loading...</h1>}
                >
                    <Cards data={popular} title={category} />
                </InfiniteScroll>
            </div>
        </>
    ) : (
        <Loader />
    );
}
