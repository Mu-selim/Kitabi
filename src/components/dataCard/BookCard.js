import "./BookCard.scss";

const BookCard = ({ book }) => {
  const isAudio = book.audio;
  console.log(isAudio);

  return (
    <>
      {!isAudio && (
        <div className="data-card__notaudio">
          <div className="card-side__one">
            <img src={book.cover} alt={book.title}></img>
          </div>
          <div className="card-side__two">
            <h2 className="book-title">{book.title}</h2>
            <p className="about-book">عن الكتاب</p>
            <p className="book-description">{book.description}</p>
          </div>
          <div className="card-side__three">
            <div className="row">
              <p className="row-title">المؤلفين</p>
              <p className="row-data">{book.authors.join(", ")}</p>
            </div>
            {book.translator && (
              <div className="row">
                <p className="row-title">المترجمين</p>
                <p className="row-data">{book.translator.join(", ")}</p>
              </div>
            )}
            {book.year && (
              <div className="row">
                <p className="row-title">سنة النشر</p>
                <p className="row-data">{book.year}</p>
              </div>
            )}
            {book.publisher && (
              <div className="row">
                <p className="row-title">دار النشر</p>
                <p className="row-data">{book.publisher}</p>
              </div>
            )}
            {book.department && (
              <div className="row">
                <p className="row-title">الأقسام</p>
                <p className="row-data">{book.department.join(", ")}</p>
              </div>
            )}
            {book.pages && (
              <div className="row">
                <p className="row-title">عدد الصفحات</p>
                <p className="row-data">{book.pages}</p>
              </div>
            )}
            {book.ISBN && (
              <div className="row">
                <p className="row-title">ISBN</p>
                <p className="row-data">{book.ISBN}</p>
              </div>
            )}
            {book.price && (
              <div className="row">
                <p className="row-title">السعر</p>
                <p className="row-data">{book.price} ج.م.</p>
              </div>
            )}
          </div>
        </div>
      )}
      {isAudio && <div className="data-card__audio"></div>}
    </>
  );
};

export default BookCard;
