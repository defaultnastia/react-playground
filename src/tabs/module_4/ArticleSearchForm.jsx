import { Form, Formik, Field } from "formik";

const initialValues = { topic: "" };

const ArticleSearchForm = ({ handleSearch }) => {
  const handleSubmit = (values, actions) => {
    if (!values.topic) {
      alert("please enter topic");
      return;
    }
    handleSearch(values.topic);
    console.log(values);
    actions.resetForm();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form>
        <Field name="topic" placeholder="Search articles..."></Field>
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default ArticleSearchForm;
