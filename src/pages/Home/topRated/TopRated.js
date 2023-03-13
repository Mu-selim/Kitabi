import BooksGrid from "../../../components/booksGrid/BooksGrid";
import "./TopRated.scss";
import db from '../../../assets/data/db.json';

const TopRated = () => {
  let books = [...db.books] ;
  books = books.slice(0, Math.min(books.length, 8));
  return (
    <div className="top-rated-container">
      <h1 className="top-rated__header">الأعلي تقييم</h1>
      <BooksGrid books={books} />
    </div>
  );
};

export default TopRated;
