import BooksGrid from '../../../components/booksGrid/BooksGrid';
import './NewBooks.scss';

const NewBooks = () => {
  return (
    <div className="new-books-container">
      <h1 className="new-books__header">احدث الكتب</h1>
      <BooksGrid /> 
    </div>
  );
};

export default NewBooks;
