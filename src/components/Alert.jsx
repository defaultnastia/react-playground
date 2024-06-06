import "./Alert.css"
import clsx from "clsx";

// const Alert = ({ variant, outlined, elevated, children }) => {
//   const classNames = clsx(
//     "alert",
//     variant,
//     outlined && "is-outlined",
//     elevated && "is-elevated"
//   )

const Alert = ({ variant, outlined, elevated, children }) => {
  const classNames = clsx(
    "alert",
    variant,
    {
      "is-outlined": outlined,
      "is-elevated": elevated}
  )


  return <p className={classNames}>{children}</p>;
};


export default Alert;