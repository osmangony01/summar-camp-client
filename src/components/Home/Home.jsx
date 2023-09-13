import About from "./About";
import ExtraSection from "./ExtraSection";
import InstructorSection from "./InstructorSection";
import Newsletter from "./Newsletter";
import TopClasses from "./TopClasses";
import useTitle from "../../hooks/useTitle";
import BannerHome from "./BannerHome";
//import Result from "./Result";


const Home = () => {
    useTitle('Home');
    return (
        <div >         
            <BannerHome></BannerHome>
            <TopClasses></TopClasses>
            <InstructorSection></InstructorSection>
            <ExtraSection></ExtraSection>
            {/* <Result></Result> */}
            <About></About>
            <Newsletter></Newsletter>
        </div>
    );
};

export default Home;