import { Link } from "react-router-dom";
import "./BookDetails.scss";

const BookDetails = ({ book }) => {
  return (
    <div className="book-details">
      <Link to={`/books/${book.title}`} className="book-details__title">
        {book.title}
      </Link>
      <div className="book-details__container">
        {book.department.map((department) => {
          return (
            <Link
              to={`/categories/${department}`}
              className="book-details__category"
            >
              {department}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default BookDetails;
