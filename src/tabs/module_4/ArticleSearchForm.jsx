import { Form, Formik, Field } from "formik";

const initialValues = { articleSearch: "" };

const ArticleSearchForm = ({ onSearch }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    console.log(event);
    form.reset();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form>
        <Field name="articleSearch" placeholder="Search articles..."></Field>
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default ArticleSearchForm;
