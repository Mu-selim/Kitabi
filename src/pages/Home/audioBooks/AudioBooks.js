import BooksGrid from "../../../components/booksGrid/BooksGrid";
import "./AudioBooks.scss";
import db from '../../../assets/data/db.json';

const AudioBooks = () => {
  let books = [...db.books];
  books = books.filter((book) => book.audio);
  books = books.slice(0, Math.min(books.length, 8));

  return (
    <div className="audio-books-container">
      <h1 className="audio-books__header">الكتب الصوتية</h1>
      <BooksGrid books={books} />
    </div>
  );
};

export default AudioBooks;
