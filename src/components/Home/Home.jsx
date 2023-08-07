import About from "./About";
import Banner from "./Banner";
import Contact from "./Contact";
import ExtraSection from "./ExtraSection";
import InstructorSection from "./InstructorSection";
import Newsletter from "./Newsletter";
import TopClasses from "./TopClassess/TopClasses";


const Home = () => {
    return (
        <div>
            <Banner></Banner>

            <TopClasses></TopClasses>
            <InstructorSection></InstructorSection>
            <ExtraSection></ExtraSection>
            <Contact></Contact>
            <Newsletter></Newsletter>
            <About></About>
        </div>
    );
};

export default Home;