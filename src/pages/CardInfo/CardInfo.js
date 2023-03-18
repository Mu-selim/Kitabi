import { useParams } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import db from "../../assets/data/db.json";
import "./CardInfo.scss";
import BookCard from "../../components/dataCard/BookCard";

const CardInfo = () => {
  const data = [...db.books];
  const { title } = useParams();

  const book = data.find((book) => book.title === title);
  console.log(book);
  return (
    <div className="card-info">
      <div className="card-info__container">
        <BookCard book={book} />
      </div>
      <Footer />
    </div>
  );
};

export default CardInfo;
