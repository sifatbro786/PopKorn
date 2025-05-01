import { Link } from "react-router-dom";

export default function Header({ data }) {
    return (
        <div
            style={{
                background: `linear-gradient(rgba(0,0,0,.2), rgba(0,0,0,.5), rgba(0,0,0,.7)), url(https://image.tmdb.org/t/p/original/${
                    data?.backdrop_path || data?.poster_path
                })`,
            }}
            className="w-full h-[50vh] bg-no-repeat bg-center bg-cover flex flex-col justify-end items-start p-[5%] font-inter"
        >
            <h1 className="w-[70%] text-5xl font-black  font-raleway">
                {data?.name || data?.title || data?.original_name || data?.original_title}
            </h1>
            <p className="w-[60%]  my-3">
                {data?.overview.slice(0, 200)} ...
                <Link
                    to={`/${data?.media_type}/details/${data?.id}`}
                    className="text-blue-400 font-bold"
                >
                    {" "}
                    more
                </Link>
            </p>
            <p>
                <i className="text-yellow-500 ri-megaphone-fill" />{" "}
                {data?.release_date || "No Information"}
                <i className="text-yellow-500 ri-album-fill ml-3" /> {data?.media_type}
            </p>
            <Link className="bg-secondary mt-5 p-4 rounded-sm">Watch Trailer</Link>
        </div>
    );
}
