import { ErrorMessage, Field, Form, Formik } from "formik";
import { useId } from "react";
import * as Yup from "yup";

const initialValues = {
  username: "",
  email: "",
  message: "",
  level: "neutral",
};

const FeedbackSchema = Yup.object().shape({
  username: Yup.string()
    .min(2, "Too Short!")
    .max(10, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Must be a valid email!").required("Required"),
  message: Yup.string().min(3, "Too short").max(256, "Too long"),
  level: Yup.string().oneOf(["good", "neutral", "bad"]).required("Required"),
});

const FeedbackForm = () => {
  const nameFieldId = useId();
  const emailFieldId = useId();
  const messageFieldId = useId();
  const levelFieldId = useId();

  const handleSubmit = (values, actions) => {
    console.log(values);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form className="feedbackForm">
        <label htmlFor={nameFieldId}>Username</label>
        <Field type="text" name="username" id={nameFieldId} />
        <ErrorMessage
          className="errorMessage"
          name="username"
          component="span"
        />

        <label htmlFor={emailFieldId}>Email</label>
        <Field type="email" name="email" id={emailFieldId} />
        <ErrorMessage className="errorMessage" name="email" component="span" />

        <label htmlFor={messageFieldId}>Message</label>
        <Field
          as="textarea"
          rows="5"
          name="message"
          id={messageFieldId}
        ></Field>
        <ErrorMessage
          className="errorMessage"
          name="message"
          component="span"
        />

        <label htmlFor={levelFieldId}>Service satisfaction level</label>
        <Field as="select" name="level" id={levelFieldId}>
          <option value="good">Good</option>
          <option value="neutral">Neutral</option>
          <option value="bad">Bad</option>
        </Field>
        <ErrorMessage className="errorMessage" name="level" component="span" />

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default FeedbackForm;
