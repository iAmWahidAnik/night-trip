import './Home.css'
import AboutUs from "./AboutUs/AboutUs";
import Footer from "./Footer/Footer";
import MainBanner from "./MainBanner/MainBanner";
import PeoplesThoughts from "./PeoplesThoughts/PeoplesThoughts";
import PickYourTrip from "./PickYourTrip/PickYourTrip";

const Home = () => {
    return (
        <div className='overflow-hidden'>
            <MainBanner></MainBanner>
            <div className='myBg text-white'>
                <div className='gradientBg'>
                    <div className='gradientBgTwo'>
                        <PickYourTrip></PickYourTrip>
                        <AboutUs></AboutUs>
                        <PeoplesThoughts></PeoplesThoughts>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;