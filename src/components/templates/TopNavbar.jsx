import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../utils/axios";
import noImage from "../../assets/noImage.jpg";

export default function TopNavbar({ left }) {
    const [query, setQuery] = useState("");
    const [searches, setSearches] = useState([]);

    useEffect(() => {
        const getSearchResult = async () => {
            try {
                const { data } = await api(`/search/multi?query=${query}`);
                setSearches(data?.results);
            } catch (err) {
                console.log(err.message);
            }
        };
        getSearchResult();
    }, [query]);

    return (
        <div className="relative w-full h-[10vh] flex justify-start pl-[20%] items-center font-inter">
            <i className="text-zinc-400 text-3xl ri-search-line"></i>

            {/* //! search */}
            <input
                onChange={(e) => setQuery(e.target.value)}
                value={query}
                className="w-1/2 text-zinc-200 mx-4 p-5 text-xl outline-none bg-transparent border-none"
                type="text"
                placeholder="search your favorite movie"
            />
            {query.length > 0 && (
                <i
                    onClick={() => setQuery("")}
                    className="text-zinc-400 text-3xl ri-close-fill cursor-pointer"
                ></i>
            )}

            <div
                className={`absolute w-[40%] max-h-[50vh] bg-zinc-200 top-[100%] overflow-auto rounded z-20 ${
                    left === "home"
                        ? "left-[24%]"
                        : left === "trending"
                        ? "left-[31%]"
                        : "left-[26%]"
                }`}
            >
                {searches &&
                    searches.map((item) => (
                        <Link
                            to={`/${item?.media_type}/details/${item?.id}`}
                            key={item.id}
                            className="font-semibold text-zinc-600 p-10 w-full flex justify-start items-center border-b-2 border-zinc-100 hover:text-black hover:bg-zinc-300 duration-300"
                        >
                            <img
                                src={
                                    item?.backdrop_path || item?.profile_path
                                        ? `https://image.tmdb.org/t/p/original/${
                                              item?.backdrop_path || item?.profile_path
                                          } `
                                        : noImage
                                }
                                alt="image-pic"
                                className="w-[10vh] h-[10vh] object-cover rounded mr-5 shadow-lg"
                            />
                            <span>
                                {item.name ||
                                    item.title ||
                                    item.original_name ||
                                    item.original_title}
                            </span>
                        </Link>
                    ))}
            </div>
        </div>
    );
}
