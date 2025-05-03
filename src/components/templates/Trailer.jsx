// import ReactPlayer from "react-player";
// import { useSelector } from "react-redux";
// import { useLocation, useNavigate } from "react-router-dom";
// import NotFound from "../NotFound";

// export default function Trailer() {
//     const { pathname } = useLocation();
//     const navigate = useNavigate();

//     const category = pathname.includes("movie") ? "movie" : "tv";
//     const ytVideo = useSelector((state) => state[category].info.videos);

//     return (
//         <div className="absolute top-0 left-0 w-screen h-screen flex items-center justify-center bg-[rgba(0,0,0,.9)] z-100 overflow-hidden">
//             <button
//                 onClick={() => navigate(-1)}
//                 className="absolute hover:text-secondary text-white right-[5%] top-[0%] cursor-pointer"
//             >
//                 <i className="ri-close-fill text-3xl" />
//             </button>

//             {ytVideo ? (
//                 <ReactPlayer
//                     controls
//                     height={700}
//                     width={1400}
//                     url={`https://www.youtube.com/watch?v=${ytVideo?.key}`}
//                 />
//             ) : (
//                 <h1 className="text-3xl mt-5 text-white font-black text-center">
//                     There is no trailer available at this moment!
//                 </h1>
//             )}
//         </div>
//     );
// }

import { useEffect } from "react";
import ReactPlayer from "react-player";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

export default function Trailer() {
    const { pathname } = useLocation();
    const navigate = useNavigate();

    const category = pathname.includes("movie") ? "movie" : "tv";
    const ytVideo = useSelector((state) => state[category].info.videos);

    // ✅ Prevent background scroll on mount
    useEffect(() => {
        document.body.style.overflow = "hidden";

        return () => {
            // ✅ Restore scroll when modal unmounts
            document.body.style.overflow = "auto";
        };
    }, []);

    return (
        <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-[rgba(0,0,0,.9)] z-100 overflow-hidden">
            <button
                onClick={() => navigate(-1)}
                className="absolute hover:text-secondary text-white right-[10%] top-[3%] cursor-pointer"
            >
                <i className="ri-close-fill text-3xl" />
            </button>

            {ytVideo ? (
                <ReactPlayer
                    controls
                    height={600}
                    width={1100}
                    url={`https://www.youtube.com/watch?v=${ytVideo?.key}`}
                />
            ) : (
                <h1 className="text-3xl mt-5 text-white font-black text-center">
                    There is no trailer available at this moment!
                </h1>
            )}
        </div>
    );
}
