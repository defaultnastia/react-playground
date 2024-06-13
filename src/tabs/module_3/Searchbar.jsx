import { useState } from "react";

const SearchBar = () => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="searchBar">
      <input type="text" onChange={handleChange} value={inputValue} />
      <p>{inputValue}</p>
    </div>
  );
};

export default SearchBar;
