import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';

const wait = time => new Promise(resolve => setTimeout(resolve, time));

const validationSchema = yup.object().shape({
  name: yup.string().required(),
  email: yup
    .string()
    .email()
    .required(),
  dob: yup.number().required(),
});

const Input = props => {
  const { field } = props;
  return (
    <div>
      {field.name}
      <input {...field} />
      <ErrorMessage name={field.name} />
    </div>
  );
};

const MyForm = ({ onSubmit }) => {
  const handleSubmit = async (values, actions) => {
    await wait(1000);
    actions.setSubmitting(false);
    actions.setStatus(new Date().toISOString());
    onSubmit(values);
  };

  return (
    <Formik
      initialValues={{ name: '', email: '', dob: '' }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
      onReset={() => onSubmit(null)}
      render={({ status, isSubmitting }) => {
        return (
          <Form>
            <Field name="name" component={Input} />
            <Field type="email" name="email" component={Input} />
            <Field name="dob" component={Input} />
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
            <button type="reset">Reset</button>
            <div>Submit time: {status || 'never'}</div>
            {isSubmitting && <div>Submitting...</div>}
          </Form>
        );
      }}
    />
  );
};

export default MyForm;
