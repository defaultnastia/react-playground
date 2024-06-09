const Button = ({ message }) => {
  const handleClick = (event) => {
    console.log({ event });
    console.log({ message });
    alert("I'm a button!");
  };

  return (
    <>
      <button onClick={handleClick}>CLICK</button>
      <button onClick={(event) => console.log(message, event)}>CLICK 2</button>
    </>
  );
};

// const Button = () => {
//   return <button onClick={() => alert("HA!")}>CLICK</button>;
// };

export default Button;
