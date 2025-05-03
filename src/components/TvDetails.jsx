import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
import Loader from "./Loader";
import noImage from "../assets/noImage.jpg";
import HorizontalCards from "./templates/HorizontalCards";
import { asyncLoadTv, removeTv } from "../store/actions/tvAction";

export default function TvDetails() {
    const navigate = useNavigate();
    const { id } = useParams();
    const { pathname } = useLocation();

    const dispatch = useDispatch();
    const { info } = useSelector((state) => state.tv);

    const specificPath = pathname.includes("movie") ? "movie" : "tv";

    useEffect(() => {
        dispatch(asyncLoadTv(id));

        return () => {
            dispatch(removeTv());
        };
    }, [dispatch, id]);

    return info ? (
        <div
            style={{
                background: `linear-gradient(rgba(0,0,0,.3), rgba(0,0,0,.5), rgba(0,0,0,.7)), url(https://image.tmdb.org/t/p/original/${info?.detail?.backdrop_path})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
            className="relative w-screen h-full px-[10%] pt-1 pb-20"
        >
            <nav className="w-full h-[10vh] text-zinc-300 flex items-center gap-10 text-[22px]">
                <Link>
                    <i
                        onClick={() => navigate(-1)}
                        className="hover:text-secondary ri-arrow-left-line cursor-pointer text-2xl"
                    />
                </Link>

                <Link target="_blank" to={info?.detail?.homepage}>
                    <i className="ri-external-link-fill" />
                </Link>
                <Link
                    target="_blank"
                    to={`https://www.wikidata.org/wiki/${info?.externalId?.wikidata_id}`}
                >
                    <i className="ri-earth-fill"></i>
                </Link>
                <Link
                    target="_blank"
                    to={`https://www.imdb.com/title/${info?.externalId?.imdb_id}`}
                >
                    imdb
                </Link>
            </nav>

            {/* //? Modal */}
            <Outlet />

            {/* //? poster */}
            <div className="w-full pl-1 mt-2 flex items-center">
                <img
                    className="h-[55vh] w-fit object-cover hover:shadow-lg hover:shadow-secondary duration-300 shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] rounded-sm"
                    src={
                        info?.detail?.poster_path || info?.detail?.backdrop_path
                            ? `https://image.tmdb.org/t/p/original/${
                                  info?.detail?.poster_path || info?.detail?.backdrop_path
                              } `
                            : noImage
                    }
                    alt="tv_pic"
                />

                <div className="content ml-[5%]">
                    <h1 className="text-5xl font-black text-white font-raleway">
                        {info?.detail?.name ||
                            info?.detail?.title ||
                            info?.detail?.original_name ||
                            info?.detail?.original_title}

                        <span className="text-2xl font-bold text-zinc-200">
                            ({info?.detail?.first_air_date.split("-")[0]})
                        </span>
                    </h1>

                    <div className="mt-4 mb-8 flex items-center gap-x-5 text-white">
                        <span className="rounded-full text-xl font-semibold bg-yellow-600 text-white w-[5vh] h-[5vh] flex justify-center items-center text-center">
                            {info?.detail?.vote_average.toFixed()} <sup>%</sup>
                        </span>
                        <h1 className="w-[60px] font-bold text-md leading-6 text-red-400">
                            User Score
                        </h1>
                        <h1>{info?.detail?.release_date}</h1>
                        <h1>{info?.detail?.genres.map((g) => g?.name).join(", ")}</h1>
                        <h1>{info?.detail?.runtime} min</h1>
                    </div>

                    <h1 className="text-xl font-semibold italic text-yellow-500 uppercase">
                        {info?.detail?.tagline}
                    </h1>

                    <h1 className="text-xl mb-1 mt-5 font-bold">Overview</h1>
                    <p className="text-sm">{info?.detail?.overview}</p>

                    <h1 className="text-xl mb-1 mt-5 font-bold">Movie Translated</h1>
                    <p className="text-sm mb-10">{info?.translations.join(", ")}</p>

                    <Link
                        to={`${pathname}/trailer`}
                        className="py-3 px-5 bg-secondary hover:bg-secondary/80 duration-300 rounded-lg "
                    >
                        <i className="ri-play-fill text-xl" /> Play Trailer
                    </Link>
                </div>
            </div>

            {/* //? available on platform */}
            <div className="w-[80%] flex flex-col gap-y-5 mt-10">
                {info?.watchProviders && info?.watchProviders?.flatrate && (
                    <div className="flex gap-x-5 items-center text-white">
                        <h1>Available on Platforms</h1>
                        {info?.watchProviders?.flatrate.map((item, idx) => (
                            <img
                                title={item?.provider_name}
                                key={idx}
                                src={`https://image.tmdb.org/t/p/original/${item?.logo_path}`}
                                alt={item}
                                className="w-[5vh] h-[5vh] object-cover rounded-md"
                            />
                        ))}
                    </div>
                )}

                {info?.watchProviders && info?.watchProviders?.rent && (
                    <div className="flex gap-x-5 items-center text-white">
                        <h1>Available on Rent</h1>
                        {info?.watchProviders?.rent.map((item, idx) => (
                            <img
                                title={item?.provider_name}
                                key={idx}
                                src={`https://image.tmdb.org/t/p/original/${item?.logo_path}`}
                                alt={item}
                                className="w-[5vh] h-[5vh] object-cover rounded-md"
                            />
                        ))}
                    </div>
                )}

                {info?.watchProviders && info?.watchProviders?.buy && (
                    <div className="flex gap-x-5 items-center text-white">
                        <h1>Available to Buy</h1>
                        {info?.watchProviders?.buy.map((item, idx) => (
                            <img
                                title={item?.provider_name}
                                key={idx}
                                src={`https://image.tmdb.org/t/p/original/${item?.logo_path}`}
                                alt={item}
                                className="w-[5vh] h-[5vh] object-cover rounded-md"
                            />
                        ))}
                    </div>
                )}
            </div>

            {/* //? seasons */}
            <div className="mt-10">
                <hr className="mb-5 border-none h-[1px] bg-zinc-400" />
                <h1 className="text-2xl mb-3 font-semibold">Seasons</h1>
                <div className="w-full flex gap-5 overflow-y-hidden mb-5 overflow-x-scroll whitespace-nowrap z-20">
                    {info?.detail?.seasons.length > 0 ? (
                        info?.detail?.seasons.map((s) => (
                            <div key={s?.id} className="min-w-[200px]">
                                <img
                                    className="h-[40vh] w-[15vw] object-cover shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] rounded-sm"
                                    src={
                                        s?.poster_path
                                            ? `https://image.tmdb.org/t/p/original/${s?.poster_path}`
                                            : noImage
                                    }
                                    alt="season_pic"
                                />
                                <h1 className="text-xl mt-3 text-zinc-300 font-semibold pb-4">
                                    {s?.name || s?.title || s?.original_name || s?.original_title}
                                </h1>
                            </div>
                        ))
                    ) : (
                        <h1 className="text-3xl mt-5 text-white font-black text-center">
                            No seasons available
                        </h1>
                    )}
                </div>
            </div>

            {/* //? recommendations */}
            <div className="mt-10">
                <hr className="mb-5 border-none h-[1px] bg-zinc-400" />
                <h1 className="text-2xl mb-3 font-semibold">Recommendations & Similar</h1>
                <HorizontalCards
                    pathName={specificPath}
                    data={info?.recommendations.length > 0 ? info?.recommendations : info?.similar}
                />
            </div>
        </div>
    ) : (
        <Loader />
    );
}
