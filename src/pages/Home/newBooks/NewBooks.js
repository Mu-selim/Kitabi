import BooksGrid from '../../../components/booksGrid/BooksGrid';
import './NewBooks.scss';
import db from '../../../assets/data/db.json';

const NewBooks = () => {
  let books = [...db.books] ;
  books.sort((a, b) => {
    return b.year - a.year;
  });
  books = books.slice(0, Math.min(books.length, 8));

  return (
    <div className="new-books-container">
      <h1 className="new-books__header">احدث الكتب</h1>
      <BooksGrid books={books}/> 
    </div>
  );
};

export default NewBooks;
