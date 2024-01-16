import React, { useCallback } from "react";
import * as Yup from "yup";
import * as formik from "formik";
import { Form, Button } from "react-bootstrap";

const RegistrationForm = () => {
  const { Formik } = formik;

  const schema = Yup.object().shape({
    email: Yup.string().email("Invalid email address").required("Required"),
    password1: Yup.string()
      .required("Required")
      .matches(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
        "Password must contain at least one digit, one lowercase and one uppercase letter, and be at least 8 characters long"
      ),
    password2: Yup.string()
      .required("Required")
      .oneOf([Yup.ref("password1"), null], "Passwords must match"),
  });

  const handleSubmit = (e) => 
    e.preventDefault();
    useCallback(({ email, password1, password2 }) => {
      const params = { email, password1, password2 };
      console.log(params);
      // dispatch(fetchRegistration(params));
    }, []);

  return (
    <Formik
      validationSchema={schema}
      onSubmit={handleSubmit}
      initialValues={{ email: "", password1: "", password2: "" }}
      validateOnChange={false}
      validateOnBlur={true}
    >
      {({
        handleSubmit,
        handleChange,
        handleBlur,
        values,
        touched,
        errors,
      }) => (
        <Form noValidate onSubmit={handleSubmit}>
          <Form.Group controlId="validationFormikEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              isValid={touched.email && !errors.email}
              isInvalid={touched.email && !!errors.email}
              onBlur={handleBlur}
            />
            {touched.email && !errors.email ? (
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            ) : (
              <Form.Control.Feedback type="invalid">
                {errors.email}
              </Form.Control.Feedback>
            )}
          </Form.Group>

          <Form.Group controlId="validationFormikPassword1">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password1"
              value={values.password1}
              onChange={handleChange}
              isValid={touched.password1 && !errors.password1}
              isInvalid={touched.password1 && !!errors.password1}
              onBlur={handleBlur}
            />
            {touched.password1 && !errors.password1 ? (
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            ) : (
              <Form.Control.Feedback type="invalid">
                {errors.password1}
              </Form.Control.Feedback>
            )}
          </Form.Group>

          <Form.Group controlId="validationFormikPassword2">
            <Form.Label>Password check</Form.Label>
            <Form.Control
              type="password"
              name="password2"
              value={values.password2}
              onChange={handleChange}
              isValid={touched.password2 && !errors.password2}
              isInvalid={touched.password2 && !!errors.password2}
              onBlur={handleBlur}
            />
            {touched.password2 && !errors.password2 ? (
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            ) : (
              <Form.Control.Feedback type="invalid">
                {errors.password2}
              </Form.Control.Feedback>
            )}
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default RegistrationForm;
