import { Link } from "react-router-dom";

export default function SideNavbar() {
    return (
        <>
            <h1 className="  font-bold flex items-center gap-2">
                <i className="text-4xl ri-movie-2-ai-line text-secondary"></i>
                <Link to={"/"} className="font-raleway text-3xl font-extrabold text-white">
                    PopKorn
                </Link>
            </h1>

            <nav className="flex flex-col text-zinc-400 text-xl gap-2">
                <h1 className=" font-semibold text-xl mt-12 text-white">News Feeds</h1>
                <Link
                    to="/trending"
                    className="hover:bg-secondary hover: duration-300 rounded-lg p-5"
                >
                    <i className="ri-fire-fill"></i> Trending
                </Link>
                <Link
                    to="/popular"
                    className="hover:bg-secondary hover: duration-300 rounded-lg p-5"
                >
                    <i className="ri-bard-fill"></i> Popular
                </Link>
                <Link
                    to="/movie"
                    className="hover:bg-secondary hover: duration-300 rounded-lg p-5"
                >
                    <i className="ri-movie-fill"></i> Movies
                </Link>
                <Link
                    to="/tv"
                    className="hover:bg-secondary hover: duration-300 rounded-lg p-5"
                >
                    <i className="ri-tv-fill"></i> Tv Shows
                </Link>
                <Link to="/person" className="hover:bg-secondary hover: duration-300 rounded-lg p-5">
                    <i className="ri-team-fill"></i> People
                </Link>
            </nav>

            <hr className="border-none h-[1px] bg-zinc-400 mt-4" />

            <nav className="flex flex-col text-zinc-400 text-xl gap-2">
                <h1 className=" font-semibold text-xl mt-10 text-white">Website Info</h1>
                <Link to="/about" className="hover:bg-secondary hover: duration-300 rounded-lg p-5">
                    <i className="ri-information-fill"></i> About
                </Link>
                <Link
                    to="/contact"
                    className="hover:bg-secondary hover: duration-300 rounded-lg p-5"
                >
                    <i className="ri-phone-fill"></i> Contact
                </Link>
            </nav>
        </>
    );
}
