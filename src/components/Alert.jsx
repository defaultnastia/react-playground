import css from "./Alert.module.css"
import clsx from "clsx";

// const Alert = ({ variant, outlined, elevated, children }) => {
//   const classNames = clsx(
//     "alert",
//     variant,
//     outlined && "is-outlined",
//     elevated && "is-elevated"
//   )
// const Alert = ({ variant, outlined, elevated, children }) => {
//   const classNames = clsx(
//     "alert",
//     variant,
//     {
//       "is-outlined": outlined,
//       "is-elevated": elevated}
//   )
// const classNames = clsx(
//     css[variant],
//     outlined && css["is-outlined"],
//     elevated && css["is-elevated"]
//   )
//   return <p className={classNames}>{children}</p>;
// };

console.log(css); // { alert: "Alert_alert_ax7yz" }

const Alert = ({ variant, children,  outlined, elevated }) => {
  const classNames = clsx(
    css[variant],
    {
      [css.isOutlined]: outlined,
      [css.elevated]: elevated}
  )


  return <p className={classNames}>{children}</p>;
};


export default Alert;