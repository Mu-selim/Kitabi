import BooksGrid from '../../../components/booksGrid/BooksGrid';
import './NewBooks.scss';
import data from '../../../assets/data/db.json';

const NewBooks = () => {
  return (
    <div className="new-books-container">
      <h1 className="new-books__header">احدث الكتب</h1>
      <BooksGrid books={data.books}/> 
    </div>
  );
};

export default NewBooks;
