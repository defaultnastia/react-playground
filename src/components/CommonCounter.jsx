import { useState } from "react";
import Counter from "./Counter.jsx";

const CommonCounter = () => {
  const [clicks, setClicks] = useState(0);

  const handleClick = () => {
    setClicks(clicks + 1);
  };

  return (
    <>
      <Counter value={clicks} onUpdate={handleClick} />
      <Counter value={clicks} onUpdate={handleClick} />
    </>
  );
};

export default CommonCounter;
