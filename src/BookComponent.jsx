import book1 from "./assets/book1.png"

function BookComponent() {

    return (<>
    <img className="book-img" src={book1} alt="" />
    <p className="book-title">Hello</p>
    </>)
}

export default BookComponent