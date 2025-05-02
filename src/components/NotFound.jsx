import { Link, useNavigate } from "react-router-dom";

export default function NotFound() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-primary flex flex-col items-center justify-center text-center mx-auto px-6 w-full">
            <h1 className="text-9xl font-bold text-white font-raleway">404</h1>
            <p className="text-2xl mt-4 text-zinc-400 font-inter">
                Looks like you've walked into the wrong scene.
            </p>
            <p className="text-md mt-2 text-zinc-500 font-inter">
                The page you're looking for might have been cut from the final edit.
            </p>

            <div className="flex items-center justify-center gap-3 mt-6">
                <Link
                    to="/"
                    className="bg-[#6556cd] text-white px-5 py-2 rounded-md text-sm font-medium hover:bg-[#4c43a2] transition"
                >
                    Back to Home
                </Link>

                <button
                    onClick={() => navigate(-1)}
                    className="bg-black text-white px-5 py-[9px] rounded-md text-sm font-medium transition cursor-pointer"
                >
                    Go Back
                </button>
            </div>

            <div className="mt-10">
                <img
                    src="https://img.freepik.com/premium-vector/illustrations-frustrated-expression-woman-oops-404-error-design-concept-landing-page_576269-379.jpg?uid=R145339866&ga=GA1.1.118490580.1741276370&semt=ais_hybrid&w=740"
                    alt="404 Illustration"
                    className="max-w-md mx-auto opacity-80"
                />
            </div>
        </div>
    );
}
