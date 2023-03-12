import { Link } from "react-router-dom";
import "./BookDetails.scss";

const BookDetails = ({ book }) => {
  return (
    <div className="book-details">
      <Link to={`/books/${book.title}`} className="book-details__title">
        {book.title}
      </Link>
      <Link
        to={`/categories/${book.department}`}
        className="book-details__category"
      >
        {book.department.join(", ")}
      </Link>
    </div>
  );
};

export default BookDetails;
