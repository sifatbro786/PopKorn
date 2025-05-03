import { useNavigate } from "react-router-dom";

export default function Contact() {
    const navigate = useNavigate();

    return (
        <div className="bg-[#1f1e24] w-full min-h-screen px-[4%] py-10 font-['Inter'] text-zinc-400 relative">
            {/* Back Button */}
            <h1 className="text-2xl font-semibold text-zinc-400 mb-20">
                <i
                    onClick={() => navigate(-1)}
                    className="hover:text-secondary ri-arrow-left-line cursor-pointer mr-1"
                />{" "}
                Contact
            </h1>

            <div className="max-w-6xl mx-auto pt-1">
                {/* Content Section */}
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className="flex justify-center">
                        <div className="relative group">
                            <div className="absolute -inset-1 bg-gradient-to-tr from-[#6556cd] to-[#1f1e24] blur opacity-30 group-hover:opacity-70 transition duration-500 rounded-3xl" />
                            <img
                                src="https://img.freepik.com/premium-photo/depiction-mental-health-crisis-hotline-with-counselors-providing-remote-support_1327465-36142.jpg?uid=R145339866&ga=GA1.1.118490580.1741276370&semt=ais_hybrid&w=740"
                                alt="Contact Illustration"
                                className="relative z-10 rounded-3xl shadow-2xl w-full max-w-md"
                            />
                        </div>
                    </div>

                    {/* Right Image or Visual */}
                    <div className="space-y-8">
                        <h1 className="text-white font-raleway text-4xl md:text-5xl font-bold">
                            Get in <span className="text-[#6556cd]">Touch</span>
                        </h1>

                        <div className="border-l-4 border-[#6556cd] pl-5">
                            <h2 className="text-white font-['Raleway'] text-2xl font-semibold mb-2">
                                📧 Email Support
                            </h2>
                            <p>
                                Got a question or suggestion? Reach out to us at{" "}
                                <span className="text-red-400">solaimanislamsifat@gmail.com</span>{" "}
                                and we’ll get back to you soon.
                            </p>
                        </div>

                        <div className="border-l-4 border-[#6556cd] pl-5">
                            <h2 className="text-white font-['Raleway'] text-2xl font-semibold mb-2">
                                🕒 Available Hours
                            </h2>
                            <p>
                                We’re online from{" "}
                                <span className="text-red-400">Saturday to Thursday, 9am–6pm</span>.
                                Our support ninjas are ready to help you!
                            </p>
                        </div>

                        <div className="border-l-4 border-[#6556cd] pl-5">
                            <h2 className="text-white font-['Raleway'] text-2xl font-semibold mb-2">
                                📍 Location
                            </h2>
                            <p>
                                PopKorn HQ is based in{" "}
                                <span className="text-red-400">Uttara, Dhaka, Bangladesh</span> —
                                but we stream love and movies worldwide.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
