import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";


const MainLayout = () => {
    return (
        <div className="relative">
            <div className="sticky top-0 left-0 right-0 z-10">
                <Navbar></Navbar>
            </div>
            <div>
                <Outlet></Outlet>
                <Footer></Footer>
            </div>


        </div>
    );
};

export default MainLayout;