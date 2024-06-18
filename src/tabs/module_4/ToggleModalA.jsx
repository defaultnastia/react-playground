import { useToggle } from "../../hooks/useToggle.js";

const Modal = ({ isOpen, close }) => {
  return (
    <div className="modal" display={isOpen}>
      <div className="modal-content">
        <button onClick={close}></button>
        <p>Some text in the Modal..</p>
      </div>
    </div>
  );
};

const ToggleModalA = () => {
  const { isOpen, open, close } = useToggle();

  return (
    <>
      <button onClick={open}></button>
      <Modal isOpen={isOpen} close={close} />
    </>
  );
};

export default ToggleModalA;
