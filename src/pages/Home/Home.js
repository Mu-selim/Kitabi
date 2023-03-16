import Footer from "../../components/footer/Footer";
import AudioBooks from "./audioBooks/AudioBooks";
import HomeHeader from "./homeHeader/HomeHeader";
import NewBooks from "./newBooks/NewBooks";
import TopRated from "./topRated/TopRated";

const Home = () => {
    return (
        <div>
            <HomeHeader />
            <TopRated />
            <NewBooks />
            <AudioBooks />
            <Footer />
        </div>
    );
}
 
export default Home;