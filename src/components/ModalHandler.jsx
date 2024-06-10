import { useEffect, useState } from "react";
import Modal from "./Modal.jsx";

const ModalHandler = () => {
  //   const [clicks, setClicks] = useState(0);

  //   useEffect(() => {
  //     document.title = `You clicked ${clicks} times`;
  //     console.log("Mounting Phase");
  //   });

  //   useEffect(() => {
  //     console.log("Mounting Phase");
  //   }, []);

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    console.log("Effect");

    return () => {
      console.log("Clean up");
    };
  }, []);

  return (
    <div>
      <button onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "Close" : "Open"}
      </button>
      {isOpen && <Modal />}
    </div>
  );
};

export default ModalHandler;
