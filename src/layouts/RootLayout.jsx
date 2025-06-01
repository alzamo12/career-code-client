import { Outlet } from "react-router";
import Navbar from "../Pages/Shared/Navbar";
import Footer from "../Pages/Shared/Footer";

const RootLayout = () => {
    return (
        <div>
            <div className="lg:mx-20">
                <Navbar />
            </div>
            <Outlet />
            <Footer />
        </div>
    );
};

export default RootLayout;