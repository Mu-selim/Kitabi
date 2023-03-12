import "./BooksGrid.scss";
import books from "../../assets/data/db.json";
import BookImage from "./book/bookimage/BookImage";
import BookDetails from "./book/bookdetails/BookDetails";
import BookPrice from "./book/bookprice/BookPrice";

const BooksGrid = () => {
  const booksList = books.books;
  return (
    <div className="books-grid">
      {booksList.map((book) => {
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
