import Header from "./Header.jsx";
import BookComponent from "./BookComponent.jsx";

import book1 from "./assets/book1.png";
import book2 from "./assets/book2.png";
import book3 from "./assets/book3.png"

function App() {
  return (
    <>
      <div className="big-container">
        <Header />
        <div className="books-container">
          <BookComponent bookImage={book1} bookName="ইসলামি পরিভাষা" />
          <BookComponent bookImage={book2} bookName="ঈমান" />
          <BookComponent bookImage={book3} bookName="সফলতা"></BookComponent>
        </div>
      </div>
    </>
  );
}

export default App;
