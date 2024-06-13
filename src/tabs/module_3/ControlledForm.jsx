import { useState } from "react";

const ControlledForm = () => {
  const [values, setValues] = useState({ login: "", password: "" });

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(values);

    setValues({
      login: "",
      password: "",
    });
  };

  return (
    <form className="formContr" autoComplete="off" onSubmit={handleSubmit}>
      <input
        type="text"
        name="login"
        onChange={handleChange}
        value={values.login}
      />
      <input
        type="text"
        name="password"
        onChange={handleChange}
        value={values.password}
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default ControlledForm;
