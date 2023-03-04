import HomeHeader from "./homeHeader/HomeHeader";
import NewBooks from "./newBooks/NewBooks";
import TopRated from "./topRated/TopRated";

const Home = () => {
    return (
        <div>
            <HomeHeader />
            <TopRated />
            <NewBooks />
        </div>
    );
}
 
export default Home;