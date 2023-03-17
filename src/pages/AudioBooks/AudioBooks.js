import Footer from "../../components/footer/Footer";
import BooksGrid from "../../components/booksGrid/BooksGrid";
import db from "../../assets/data/db.json";
import "./AudioBooks.scss";

const AudioBooks = () => {
  let books = [...db.books];
  books = books.filter((book) => book.audio);

  return (
    <div className="audio-page">
      <div className="audio-gird__container">
      <BooksGrid books={books} />
      </div>
      <Footer />
    </div>
  );
};

export default AudioBooks;
