const BoorkForm = ({ addBook }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    addBook({
      text: event.target.elements.text.value,
      id: Date.now(),
    });
    event.target.reset();
  };

  return (
    <form className="bookForm" onSubmit={handleSubmit}>
      <input type="text" name="text" />
      <button type="submit">Add Book</button>
    </form>
  );
};

export default BoorkForm;
