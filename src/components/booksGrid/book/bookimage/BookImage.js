import { Link } from "react-router-dom";
import "./BookImage.scss";

const BookImage = ({ book }) => {
  return (
    <div className="book-img">
      <Link to={`/books/${book.title}`} className="book-img__link">
        <img src={book.cover} alt={book.title}></img>
        <div className="book-info">
          <h3 className="book-info__title">{book.title}</h3>
          <h4 className="book-info__author">{book.authors.join(", ")}</h4>
          <p className="book-info__description">{book.description}</p>
        </div>
      </Link>
    </div>
  );
};

export default BookImage;
