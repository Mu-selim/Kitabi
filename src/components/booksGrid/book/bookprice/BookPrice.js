import "./BookPrice.scss";
import Cart from "../../../../utils/icons/cart/Cart";

const BookPrice = ({ book }) => {
  const price = book.discount
    ? book.price - (book.price * book.discount) / 100
    : book.price;
  return (
    <div className="book-price">
      <span className="book-price__discount">{book.discount} %</span>
      <span className="book-price__actual">{price} ج.م.</span>
      <span className="book-price__cart">
        <Cart />
      </span>
    </div>
  );
};

export default BookPrice;
