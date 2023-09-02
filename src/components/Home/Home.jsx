import About from "./About";
import ExtraSection from "./ExtraSection";
import InstructorSection from "./InstructorSection";
import Newsletter from "./Newsletter";
import TopClasses from "./TopClassess/TopClasses";
import useTitle from "../../hooks/useTitle";
import BannerHome from "./BannerHome";


const Home = () => {
    useTitle('Home');
    return (
        <div >         
            <BannerHome></BannerHome>
            <TopClasses></TopClasses>
            <InstructorSection></InstructorSection>
            <ExtraSection></ExtraSection>
            <Newsletter></Newsletter>
            <About></About>
        </div>
    );
};

export default Home;