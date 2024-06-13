import { useState } from "react";

const Radio = () => {
  const [size, setSize] = useState("m");

  const radioName = "coffeeSize";

  const handleRadioSelect = (event) => {
    setSize(event.target.value);
  };

  return (
    <div className="radioBox">
      <h3>Choose coffee size</h3>

      <div className="radio">
        <label>
          <input
            type="radio"
            name={radioName}
            value="s"
            checked={size === "s"}
            onChange={handleRadioSelect}
          />
          Small
        </label>
        <label>
          <input
            type="radio"
            name={radioName}
            value="m"
            checked={size === "m"}
            onChange={handleRadioSelect}
          />
          Medium
        </label>
        <label>
          <input
            type="radio"
            name={radioName}
            value="l"
            checked={size === "l"}
            onChange={handleRadioSelect}
          />
          Large
        </label>
      </div>
    </div>
  );
};

export default Radio;
