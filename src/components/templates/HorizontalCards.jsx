import { Link } from "react-router-dom";

export default function HorizontalCards({ data }) {
    return (
        <div className="w-full h-[40vh] p-5 mb-5">
            <div className="w-full flex gap-5 overflow-y-hidden overflow-x-auto">
                {data.map((item) => (
                    <Link
                        to={`/${item?.media_type}/details/${item?.id}`}
                        key={item?.id}
                        className="min-w-[15%] h-[290px] bg-zinc-900 mb-5 rounded-b-sm"
                    >
                        <img
                            className="w-full h-[55%] object-cover rounded-t-sm"
                            src={`https://image.tmdb.org/t/p/original/${
                                item?.backdrop_path || item?.poster_path
                            }`}
                            alt={item?.name || item?.title}
                        />
                        <div className="w-full p-3 h-[45%]">
                            <h1 className="text-lg font-semibold">
                                {(
                                    item?.name ||
                                    item?.title ||
                                    item?.original_name ||
                                    item.original_title
                                ).slice(0, 14)}
                            </h1>
                            <p className="text-zinc-400 text-sm mt-[2px]">
                                {item?.overview.slice(0, 45)} ...
                                <span className="text-zinc-200 font-bold"> more</span>
                            </p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
