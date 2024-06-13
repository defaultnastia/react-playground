import { useId } from "react";

const LangSwitcher = ({ value, onSelect }) => {
  const selectId = useId();

  const handleChange = (event) => {
    const selectedLang = event.target.value;
    onSelect(selectedLang);
  };

  return (
    <div className="langSwitcher">
      <label htmlFor={selectId}>Choose Language</label>
      <select id={selectId} name="select" value={value} onChange={handleChange}>
        <option value="ua">Ukrainian</option>
        <option value="en">English</option>
        <option value="es">Spanish</option>
      </select>
      {/* <p>{console.log(document.querySelector("select"))}</p> */}
    </div>
  );
};

export default LangSwitcher;
