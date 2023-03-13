import "./BooksGrid.scss";
import BookImage from "./book/bookimage/BookImage";
import BookDetails from "./book/bookdetails/BookDetails";
import BookPrice from "./book/bookprice/BookPrice";

const BooksGrid = ({ books }) => {
  return (
    <div className="books-grid">
      {books.map((book) => {
        return (
          <div className="books-grid__book" key={book.id}>
            <BookImage book={book} />
            <BookDetails book={book} />
            <BookPrice book={book} />
          </div>
        );
      })}
    </div>
  );
};

export default BooksGrid;
