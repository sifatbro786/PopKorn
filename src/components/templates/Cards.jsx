import { Link } from "react-router-dom";
import noImage from "../../assets/noImage.jpg";

export default function Cards({ data }) {
    return (
        <div className="flex flex-row flex-wrap w-full gap-x-8 gap-y-16 px-[2.5%] mt-2">
            {data?.map((item, index) => (
                <Link className="w-[22vh]" key={index}>
                    <img
                        className="h-[40vh] w-full object-cover shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] rounded-sm"
                        src={
                            item?.profile_path || item?.backdrop_path
                                ? `https://image.tmdb.org/t/p/original/${
                                      item?.profile_path || item?.backdrop_path
                                  } `
                                : noImage
                        }
                        alt="movie_pic"
                    />
                    <h1 className="text-xl text-zinc-400 mt-3 font-semibold">
                        {item?.name || item?.title || item?.original_name || item?.original_title}
                    </h1>
                </Link>
            ))}
        </div>
    );
}
