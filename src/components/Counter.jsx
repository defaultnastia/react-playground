// import { useState } from "react";

// const Counter = () => {
//   const [clicks, setClicks] = useState(0);
//   const [isOpen, setIsOpen] = useState(false);

//   const handleClicks = () => {
//     setClicks(clicks + 1);
//   };
//   const handleToggle = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <>
//       <button onClick={handleToggle}>{isOpen ? "Hide" : "Show"}</button>
//       <button onClick={handleClicks}>Counter {clicks}</button>{" "}
//     </>
//   );
// };

const Counter = ({ value, onUpdate }) => {
  return <button onClick={onUpdate}>Current: {value}</button>;
};

export default Counter;
