import { useNavigate } from "react-router-dom";

export default function About() {
    const navigate = useNavigate();

    return (
        <div className="bg-[#1f1e24] w-full min-h-screen px-[4%] py-10 font-['Inter'] text-zinc-400 relative">
            {/* Back Button */}
            <h1 className="text-2xl font-semibold text-zinc-400 mb-20">
                <i
                    onClick={() => navigate(-1)}
                    className="hover:text-secondary ri-arrow-left-line cursor-pointer mr-1"
                />{" "}
                About
            </h1>

            <div className="max-w-6xl mx-auto pt-5">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className="space-y-8">
                        <h1 className="text-white font-raleway text-4xl md:text-5xl font-bold">
                            About <span className="text-[#6556cd]">PopKorn</span>
                        </h1>

                        <div className="border-l-4 border-[#6556cd] pl-5">
                            <h2 className="text-white font-['Raleway'] text-2xl font-semibold mb-2">
                                🎬 Unlimited Exploration
                            </h2>
                            <p>
                                From indie gems to blockbuster hits — explore a handpicked
                                collection of films and series. Dive into categories like action,
                                drama, romance, and more.
                            </p>
                        </div>

                        <div className="border-l-4 border-[#6556cd] pl-5">
                            <h2 className="text-white font-['Raleway'] text-2xl font-semibold mb-2">
                                🔍 Smart Recommendations
                            </h2>
                            <p>
                                Our advanced filtering and recommendation system brings you
                                personalized movie lists based on your preferences.
                            </p>
                        </div>

                        <div className="border-l-4 border-[#6556cd] pl-5">
                            <h2 className="text-white font-['Raleway'] text-2xl font-semibold mb-2">
                                🌐 Always Up-to-date
                            </h2>
                            <p>
                                Get real-time updates about what's trending, upcoming releases, and
                                what's hot in the world of cinema — all in one place.
                            </p>
                        </div>
                    </div>

                    {/* Right Image*/}
                    <div className="flex justify-center">
                        <div className="relative group">
                            <div className="absolute -inset-1 bg-gradient-to-tr from-[#6556cd] to-[#1f1e24] blur opacity-30 group-hover:opacity-70 transition duration-500 rounded-3xl" />
                            <img
                                src={
                                    "https://plus.unsplash.com/premium_photo-1710961232986-36cead00da3c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bW92aWUlMjBpbGx1c3RyYXRpb258ZW58MHx8MHx8fDE%3D"
                                }
                                alt="Cinema Illustration"
                                className="relative z-10 rounded-3xl shadow-2xl w-full max-w-md"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
