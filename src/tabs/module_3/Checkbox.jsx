import { useState } from "react";

const Checkbox = () => {
  const [terms, setTerms] = useState(false);

  const checkboxName = "terms";

  const handleChange = (event) => {
    setTerms(event.target.checked);
  };

  return (
    <div className="checkbox">
      <label>
        <input
          type="checkbox"
          name={checkboxName}
          checked={terms}
          onChange={handleChange}
        />
        I accept terms and conditions
      </label>
      <button type="button" disabled={!terms}>
        Proceed
      </button>
    </div>
  );
};

export default Checkbox;
