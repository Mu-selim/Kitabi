import Footer from "../../components/footer/Footer";
import AudioBooks from "../Home/audioBooks/AudioBooks";
import NewBooks from "../Home/newBooks/NewBooks";
import TopRated from "../Home/topRated/TopRated";
import './BooksPage.scss';

const BooksPage = () => {
  return (
    <div>
      <div className="books-page__container">
        <TopRated />
        <NewBooks />
        <AudioBooks />
      </div>
      <Footer />
    </div>
  );
};

export default BooksPage;
