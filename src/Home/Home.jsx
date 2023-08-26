import AboutUs from "./AboutUs/AboutUs";
import Footer from "./Footer/Footer";
import MainBanner from "./MainBanner/MainBanner";
import PeoplesThoughts from "./PeoplesThoughts/PeoplesThoughts";
import PickYourTrip from "./PickYourTrip/PickYourTrip";

const Home = () => {
    return (
        <div>
            <MainBanner></MainBanner>
            <PickYourTrip></PickYourTrip>
            <AboutUs></AboutUs>
            <PeoplesThoughts></PeoplesThoughts>
            <Footer></Footer>
        </div>
    );
};

export default Home;