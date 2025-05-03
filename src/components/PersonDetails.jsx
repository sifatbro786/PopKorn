import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { asyncLoadPerson, removePerson } from "../store/actions/personAction";
import Loader from "./Loader";
import noImage from "../assets/noImage.jpg";
import HorizontalCards from "./templates/HorizontalCards";
import Dropdown from "./templates/Dropdown";

export default function PersonDetails() {
    const navigate = useNavigate();
    const { id } = useParams();

    const dispatch = useDispatch();
    const { info } = useSelector((state) => state.person);
    const [category, setCategory] = useState("movie");

    useEffect(() => {
        dispatch(asyncLoadPerson(id));

        return () => {
            dispatch(removePerson());
        };
    }, [dispatch, id]);

    return info ? (
        <>
            <title>{`PopKorn | ${info?.detail?.name}`}</title>

            <div className="pt-1 w-screen h-full">
                {/* //? navigation */}
                <nav className="px-[4%] w-full h-[10vh] text-zinc-300 flex items-center gap-10 text-[22px]">
                    <Link>
                        <i
                            onClick={() => navigate(-1)}
                            className="hover:text-secondary ri-arrow-left-line cursor-pointer text-2xl"
                        />
                    </Link>
                </nav>

                <div className="px-[10%] w-full flex gap-14">
                    {/* //? left poster and details */}
                    <div className="w-[20%]">
                        <img
                            className="h-[40vh] w-full object-cover hover:shadow-lg hover:shadow-secondary duration-300 shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] rounded-sm"
                            src={
                                info?.detail?.profile_path
                                    ? `https://image.tmdb.org/t/p/original/${info?.detail?.profile_path}`
                                    : noImage
                            }
                            alt="profile_pic"
                        />
                        <hr className="mb-5 mt-10 w-full border-none h-[2px] bg-zinc-400" />

                        {/* //* social media */}
                        <div className="w-full flex items-center justify-center gap-x-5 text-2xl">
                            {info?.externalId?.wikidata_id && (
                                <Link
                                    target="_blank"
                                    to={`https://www.wikidata.org/wiki/${info?.externalId?.wikidata_id}`}
                                >
                                    <i className="ri-earth-fill" />
                                </Link>
                            )}
                            {info?.externalId?.facebook_id && (
                                <Link
                                    target="_blank"
                                    to={`https://www.facebook.com/${info?.externalId?.facebook_id}`}
                                >
                                    <i className="ri-facebook-circle-fill" />
                                </Link>
                            )}
                            {info?.externalId?.instagram_id && (
                                <Link
                                    target="_blank"
                                    to={`https://www.instagram.com/${info?.externalId?.instagram_id}`}
                                >
                                    <i className="ri-instagram-fill" />
                                </Link>
                            )}
                            {info?.externalId?.twitter_id && (
                                <Link
                                    target="_blank"
                                    to={`https://www.x.com/${info?.externalId?.twitter_id}`}
                                >
                                    <i className="ri-twitter-x-fill" />
                                </Link>
                            )}
                            {info?.externalId?.tiktok_id && (
                                <Link
                                    target="_blank"
                                    to={`https://www.tiktok.com/${info?.externalId?.tiktok_id}`}
                                >
                                    <i className="ri-tiktok-fill" />
                                </Link>
                            )}
                            {info?.externalId?.youtube_id && (
                                <Link
                                    target="_blank"
                                    to={`https://www.youtube.com/${info?.externalId?.youtube_id}`}
                                >
                                    <i className="ri-youtube-fill" />
                                </Link>
                            )}
                        </div>

                        {/* //* personal info */}
                        <h1 className="text-2xl text-red-400 font-semibold mt-10 mb-5">
                            Person Info
                        </h1>
                        <h1 className="text-lg text-zinc-300 font-semibold">Known For</h1>
                        <h1 className="text-zinc-400">{info?.detail?.known_for_department}</h1>

                        <h1 className="text-lg text-zinc-300 font-semibold mt-3">Gender</h1>
                        <h1 className="text-zinc-400">
                            {info?.detail?.gender === 2 ? "Male" : "Female"}
                        </h1>

                        <h1 className="text-lg text-zinc-300 font-semibold mt-3">Birthday</h1>
                        <h1 className="text-zinc-400">{info?.detail?.birthday}</h1>

                        {info?.detail?.deathday && (
                            <>
                                <h1 className="text-lg text-zinc-300 font-semibold mt-3">
                                    Deathday
                                </h1>
                                <h1 className="text-zinc-400">{info?.detail?.deathday}</h1>
                            </>
                        )}

                        <h1 className="text-lg text-zinc-300 font-semibold mt-3">Place of Birth</h1>
                        <h1 className="text-zinc-400">{info?.detail?.place_of_birth}</h1>

                        {info?.detail?.also_known_as.length > 0 && (
                            <>
                                <h1 className="text-lg text-zinc-300 font-semibold mt-3">
                                    Also Known As
                                </h1>
                                <h1 className="text-zinc-400">
                                    {info?.detail?.also_known_as.join(", ")}
                                </h1>
                            </>
                        )}
                    </div>

                    {/* //? right details and information */}
                    <div className="w-[80%] flex flex-col">
                        <h1 className="text-6xl text-zinc-100 font-black">{info?.detail?.name}</h1>

                        <h1 className="text-xl text-zinc-200 font-semibold mt-5 mb-2">Biography</h1>
                        <p className="text-sm text-zinc-400">{info?.detail?.biography}</p>

                        <div className="mt-6">
                            <h1 className="text-xl text-zinc-200 font-semibold mb-3">Known As</h1>
                            <HorizontalCards data={info?.combinedCredits.cast} />
                        </div>

                        <div className="w-full flex justify-between items-center mt-10">
                            <h1 className="text-xl text-zinc-200 font-semibold">Acting</h1>
                            <Dropdown
                                title="Category"
                                options={["tv", "movie"]}
                                handleChange={(e) => setCategory(e.target.value)}
                            />
                        </div>

                        <div className="w-full h-[50vh] mt-5 overflow-x-hidden overflow-y-auto shadow-xl shadow-[rgba(255,255,255.3)] border-2 border-zinc-700 p-5">
                            {info[category + "Credits"].cast.map((item) => (
                                <li
                                    key={item?.id}
                                    className="hover:text-white hover:bg-[#19191D] p-5 rounded duration-300 cursor-pointer"
                                >
                                    <Link to={`/${category}/details/${item?.id}`}>
                                        <span>
                                            {item?.name ||
                                                item?.title ||
                                                item?.original_name ||
                                                item?.original_title}
                                        </span>
                                        <span className="block ml-5">
                                            {item?.character &&
                                                `Character Name: ${item?.character}`}
                                        </span>
                                    </Link>
                                </li>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    ) : (
        <Loader />
    );
}
