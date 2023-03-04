import "./BooksGrid.scss";
import bookImage from "../../assets/bookTemp.png";
import { Link } from "react-router-dom";
import Cart from "../../utils/icons/cart/Cart";

const BooksGrid = () => {
  return (
    <div className="books-grid">
      <div className="books-grid__book">
        <div className="book-img">
          <Link to={`/books`} className="book-img__link">
            <img src={bookImage} alt="Book"></img>
            <div className="book-info">
                <h3 className="book-info__title">جزيرة آزمور</h3>
                <h4 className="book-info__author">عمرو البسيوني</h4>
                <p className="book-info__description">في بلاد ضاعت فيها الحقوقُ وانقلبَت فيها الموازين فملك الخائن واستعبد فيها الوفي وانطفأت شمسُ الحقيقةِ وحلَّ ظلامُ الكذبِ وكَثُرَ فيها الذهبُ الذي غطَّى بريقُه لونَ الدماءِ فظلَّ سؤال يتردد... هل يا ترى جزيرة أزمور سترى يومًا السلام؟!</p>
            </div>
          </Link>
        </div>
        <div className="book-details">
            <Link to={`/books`} className="book-details__title">جزيرة آزمور</Link>
            <Link to={`/categories`} className="book-details__category">روايات</Link>
        </div>
        <div className="book-price">
            <span className="book-price__discount">110.00 ج.م.</span>
            <span className="book-price__actual">77.00 ج.م.</span>
            <span className="book-price__cart">
                <Cart />
            </span>
        </div>
      </div>
    </div>
  );
};

export default BooksGrid;
