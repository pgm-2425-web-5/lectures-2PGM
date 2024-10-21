import { login } from "@core/modules/user/api";
import Button from "@design/Button/Button";
import Container from "@design/Container/Container";
import ErrorMessage from "@design/Error/ErrorMessage";
import Input from "@design/Form/Input/Input";
import { useMutation } from "@tanstack/react-query";
import { Field, Formik } from "formik";
import { useState } from "react";
import * as yup from "yup";

const Schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

const Login = () => {
  const { mutate, isPending } = useMutation({
    mutationFn: login,
  });

  const [error, setError] = useState("");

  const handleLogin = (values) => {
    mutate(values, {
      onSuccess: (data) => {
        console.log(data);
      },
      onError: (error) => {
        setError(error.message);
      },
    });
  };

  return (
    <Container>
      <Formik initialValues={{ email: "", password: "" }} validationSchema={Schema} onSubmit={handleLogin}>
        {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
          <form onSubmit={handleSubmit} autoComplete="off">
            {error && <ErrorMessage message={error} />}
            <Field
              as={Input}
              name="email"
              label="Email"
              type="email"
              disabled={isPending}
              error={touched.email && errors.email}
            />
            <Input
              value={values.password}
              label="Password"
              type="password"
              name="password"
              error={touched.password && errors.password}
              onChange={handleChange}
              onBlur={handleBlur}
              disabled={isPending}
            />
            <Button type="submit" disabled={isPending}>
              Login
            </Button>
          </form>
        )}
      </Formik>
    </Container>
  );
};

export default Login;
