
function BookComponent(props) {
  return (
    <>
      <div className="book-div">
        <img className="book-img" src={props.bookImage} alt="" />
        <p className="book-title">{props.bookName}</p>
      </div>
    </>
  );
}

export default BookComponent;
