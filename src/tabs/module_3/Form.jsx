import { useId } from "react";

const Form = ({ onLogin }) => {
  const loginId = useId();
  const passwordId = useId();

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const { login, password } = form.elements;

    onLogin(
      `You're logged in as a user "${login.value}" with password "${password.value}"`
    );

    form.reset();
  };

  return (
    <form
      className="loginForm"
      onSubmit={handleSubmit}
      autoComplete="off"
      action=""
    >
      <label htmlFor={loginId}>Login</label>
      <input id={loginId} type="text" name="login" />

      <label htmlFor={passwordId}>Password</label>
      <input id={passwordId} type="text" name="password" />

      <button type="submit">Log In</button>
    </form>
  );
};

export default Form;
