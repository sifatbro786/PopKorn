import SideNavbar from "./templates/SideNavbar";
import TopNavbar from "./templates/TopNavbar";

export default function Home() {
    return (
        <>
            <title>PopKorn | Home</title>

            <SideNavbar />
            <div className="w-[80%] h-full">
                <TopNavbar />
            </div>
        </>
    );
}
