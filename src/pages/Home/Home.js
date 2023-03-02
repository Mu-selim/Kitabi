import HomeHeader from "./homeHeader/HomeHeader";

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
    },
    title: {
        fontSize: '4rem',
        fontWeight: 'bold',
    },
    subtitle: {
        fontSize: '2rem',
        fontWeight: 'bold',
    },  
};

const Home = () => {
    return (
        <div style={styles.container}>
            <HomeHeader />
        </div>
    );
}
 
export default Home;