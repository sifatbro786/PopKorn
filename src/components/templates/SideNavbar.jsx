import { Link } from "react-router-dom";

export default function SideNavbar() {
    return (
        <div className="w-[20%] h-full border-r-1 border-zinc-400 p-9 font-inter">
            <h1 className="  font-bold flex items-center gap-2">
                <i className="text-4xl ri-movie-2-ai-line text-secondary"></i>
                <span className="font-raleway text-3xl font-extrabold">PopKorn</span>
            </h1>

            <nav className="flex flex-col text-zinc-400 text-xl gap-2">
                <h1 className=" font-semibold text-xl mt-12">News Feeds</h1>
                <Link className="hover:bg-secondary hover: duration-300 rounded-lg p-5">
                    <i className="ri-fire-fill"></i> Trending
                </Link>
                <Link className="hover:bg-secondary hover: duration-300 rounded-lg p-5">
                    <i className="ri-bard-fill"></i> Popular
                </Link>
                <Link className="hover:bg-secondary hover: duration-300 rounded-lg p-5">
                    <i className="ri-movie-fill"></i> Movies
                </Link>
                <Link className="hover:bg-secondary hover: duration-300 rounded-lg p-5">
                    <i className="ri-tv-fill"></i> Tv Shows
                </Link>
                <Link className="hover:bg-secondary hover: duration-300 rounded-lg p-5">
                    <i className="ri-team-fill"></i> People
                </Link>
            </nav>

            <hr className="border-none h-[1px] bg-zinc-400 mt-4" />

            <nav className="flex flex-col text-zinc-400 text-xl gap-2">
                <h1 className=" font-semibold text-xl mt-10">Website Info</h1>
                <Link className="hover:bg-secondary hover: duration-300 rounded-lg p-5">
                    <i className="ri-information-fill"></i> About PopKorn
                </Link>
                <Link className="hover:bg-secondary hover: duration-300 rounded-lg p-5">
                    <i className="ri-phone-fill"></i> Contact Us
                </Link>
            </nav>
        </div>
    );
}
