import React, { useCallback, useState } from "react";
import * as Yup from "yup";
import * as formik from "formik";
import { Form, Button, InputGroup } from "react-bootstrap";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";

const LoginForm = () => {
  const { Formik } = formik;
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const schema = Yup.object().shape({
    email: Yup.string().email("Invalid email address").required("Required"),
    password: Yup.string().required("Required"),
  });

  const handleSubmit = useCallback(({ email, password }) => {
    const params = { email, password };
    console.log(params);
    // dispatch(fetchLogin(params));
  }, []);

  return (
      <Formik
        validationSchema={schema}
        onSubmit={handleSubmit}
        initialValues={{ email: "", password: "" }}
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
            <Form.Group controlId="validationFormikEmail" className="mb-2">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                isInvalid={touched.email && !!errors.email}
                onBlur={handleBlur}
              />
              <Form.Control.Feedback type="invalid">
                {errors.email}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="validationFormikPassword" className="mb-2">
              <Form.Label>Password</Form.Label>
              <InputGroup>
                <InputGroup.Text
                  id="basic-addon1"
                  onClick={handleTogglePassword}
                  className="btn border"
                >
                  {showPassword ? (
                    <BsFillEyeFill size={24} />
                  ) : (
                    <BsFillEyeSlashFill size={24} />
                  )}
                </InputGroup.Text>
                <Form.Control
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                  isInvalid={touched.password && !!errors.password}
                  onBlur={handleBlur}
                />
              </InputGroup>
              <Form.Control.Feedback type="invalid">
                {errors.password}
              </Form.Control.Feedback>
            </Form.Group>

            <Button variant="primary" type="submit" className="mt-2">
              Submit
            </Button>
          </Form>
        )}
      </Formik>
  );
};

export default LoginForm;
