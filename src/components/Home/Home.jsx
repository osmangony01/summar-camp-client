import Banner from "./Banner";
import ExtraSection from "./ExtraSection";
import InstructorSection from "./InstructorSection";
import TopClasses from "./TopClassess/TopClasses";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <TopClasses></TopClasses>
            <InstructorSection></InstructorSection>
            <ExtraSection></ExtraSection>
        </div>
    );
};

export default Home;