import Book from "./Book";

const BookList = ({ books, deleteBook }) => {
  return (
    <ul className="bookList">
      {books.map((book) => (
        <li key={book.id}>
          <Book book={book} deleteBook={deleteBook} />
        </li>
      ))}
    </ul>
  );
};

export default BookList;
