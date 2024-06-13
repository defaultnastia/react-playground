const BookFilter = ({ filter, setFilter }) => {
  return (
    <div className="bookFilter">
      <p>Search by word:</p>
      <input
        type="text"
        value={filter}
        onChange={(event) => setFilter(event.target.value)}
      />
    </div>
  );
};

export default BookFilter;
