import { Link } from "react-router-dom";
import noImage from "../../assets/noImage.jpg";

export default function Cards({ data, title }) {
    return (
        <div className="flex flex-row flex-wrap w-full gap-x-8 gap-y-16 px-[2.5%] mt-2">
            {data?.map((item, index) => (
                <Link
                    to={`/${item?.media_type || title}/details/${item?.id}`}
                    className="relative w-[22vh]"
                    key={index}
                >
                    <img
                        className="h-[40vh] w-full object-cover shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] rounded-sm"
                        src={
                            item?.poster_path || item?.backdrop_path || item?.profile_path
                                ? `https://image.tmdb.org/t/p/original/${
                                      item?.poster_path || item?.backdrop_path || item?.profile_path
                                  } `
                                : noImage
                        }
                        alt="movie_pic"
                    />
                    <h1 className="text-xl text-zinc-400 mt-3 font-semibold">
                        {item?.name || item?.title || item?.original_name || item?.original_title}
                    </h1>

                    {(item?.vote_average || item?.vote_average === 0) && (
                        <div className="absolute right-[-10%] bottom-[25%] rounded-full text-xl font-semibold bg-yellow-600 text-white w-[5vh] h-[5vh] flex justify-center items-center text-center">
                            {item.vote_average.toFixed()} <sup>%</sup>
                        </div>
                    )}
                </Link>
            ))}
        </div>
    );
}
