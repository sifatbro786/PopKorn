import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../utils/axios";
import TopNavbar from "./templates/TopNavbar";
import InfiniteScroll from "react-infinite-scroll-component";
import Cards from "./templates/Cards";
import Loader from "./Loader";

export default function People() {
    const navigate = useNavigate();
    const [people, setPeople] = useState([]);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);

    const getPeople = async () => {
        try {
            const { data } = await api(`/person/popular?page=${page}`);

            if (data.results.length > 0) {
                setPeople((prevState) => [...prevState, ...data.results]);
                setPage((prev) => prev + 1);
            } else setHasMore(false);
        } catch (err) {
            console.log(err.message);
        }
    };

    useEffect(() => {
        const refreshHandler = () => {
            if (people.length === 0) {
                getPeople();
            } else {
                setPage(1);
                setPeople([]);
                getPeople();
            }
        };

        refreshHandler();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return people.length > 0 ? (
        <>
            <title>PopKorn | People</title>
            <div className="w-full h-full mt-2 mb-5 font-inter px-[2%]">
                <div className="w-full flex items-center justify-between gap-1">
                    <h1 className="text-2xl font-semibold text-zinc-400">
                        <i
                            onClick={() => navigate(-1)}
                            className="hover:text-secondary ri-arrow-left-line cursor-pointer"
                        />{" "}
                        People
                    </h1>

                    <div className="flex items-center w-[90%]">
                        <TopNavbar />
                    </div>
                </div>

                {/* //! movie card: */}
                <InfiniteScroll
                    dataLength={people.length}
                    next={getPeople}
                    hasMore={hasMore}
                    loader={<h1 className="text-white">Loading...</h1>}
                >
                    <Cards data={people} title={"people"} />
                </InfiniteScroll>
            </div>
        </>
    ) : (
        <Loader />
    );
}
