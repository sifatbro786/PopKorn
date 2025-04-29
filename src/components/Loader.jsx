import loader from "../assets/loader2.gif";

export default function Loader() {
    return (
        <div className="w-screen h-screen flex justify-center items-center">
            <img src={loader} alt="loading-icon" className="w-full h-full object-cover object-center" />
        </div>
    );
}
