import "./BookPrice.scss";
import Cart from "../../../../utils/icons/Cart";

const BookPrice = ({ book }) => {
  let price;
  if(book.price == null) {
    price = 'غير متوفر';
  } else {
    price = book.price - (book.price * book.discount) / 100 + ' ج.م.';
  }
  return (
    <div className="book-price">
      { !book.audio && <span className="book-price__discount">{ book.discount} %</span> }
      { !book.audio && <span className="book-price__actual">{ price }</span> }
      { !book.audio && <span className="book-price__cart"><Cart /></span> }
    </div>
  );
};

export default BookPrice;
