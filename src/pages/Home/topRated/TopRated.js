import BooksGrid from "../../../components/booksGrid/BooksGrid";
import "./TopRated.scss";
import data from '../../../assets/data/db.json';

const TopRated = () => {
  return (
    <div className="top-rated-container">
      <h1 className="top-rated__header">الأعلي تقييم</h1>
      <BooksGrid books={data.books} />
    </div>
  );
};

export default TopRated;
