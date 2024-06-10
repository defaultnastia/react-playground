import { useState, useEffect } from "react";

const Clicker = () => {
  const [clicks, setClicks] = useState(() => {
    const savedClicks = Number(window.localStorage.getItem("saved-clicks"));
    if (savedClicks !== null) {
      return savedClicks;
    }
    return 0;
    // return savedClicks !== null ? savedClicks : 0;
  });

  useEffect(() => {
    console.log("Clicks updated: ", clicks);
    window.localStorage.setItem("saved-clicks", clicks);
  }, [clicks]);

  return (
    <div>
      <button onClick={() => setClicks(clicks + 1)}>
        You clicked {clicks} times
      </button>
      <button onClick={() => setClicks(0)}>Reset</button>
    </div>
  );
};

// const Clicker = () => {
//   const [first, setFirst] = useState(0);
//   const [second, setSecond] = useState(0);

//   useEffect(() => {
//     console.log("First updated: ", first);
//   }, [first]);

//   useEffect(() => {
//     console.log("Second updated: ", second);
//   }, [second]);

//   useEffect(() => {
//     console.log("First or second updated: ", first + second);
//   }, [first, second]);

//   return (
//     <>
//       <button onClick={() => setFirst(first + 1)}>First: {first}</button>
//       <button onClick={() => setSecond(second + 1)}>Second: {second}</button>
//     </>
//   );
// };

export default Clicker;
