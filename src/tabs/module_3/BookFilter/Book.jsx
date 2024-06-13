const Book = ({ book, deleteBook }) => {
  return (
    <div className="book">
      <p>{book.text}</p>{" "}
      <button onClick={() => deleteBook(book.id)}>Delete</button>{" "}
    </div>
  );
};

export default Book;
