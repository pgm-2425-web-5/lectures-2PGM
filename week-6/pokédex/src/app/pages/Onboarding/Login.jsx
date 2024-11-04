import { login } from "@core/modules/user/api";
import Button from "@design/Button/Button";
import Container from "@design/Container/Container";
import ErrorMessage from "@design/Error/ErrorMessage";
import Input from "@design/Form/Input/Input";
import useAuth from "@functional/Auth/useAuth";
import { useMutation } from "@tanstack/react-query";
import { Field, Formik } from "formik";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";

const Schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

const Login = () => {
  const navigate = useNavigate();
  const { setUser } = useAuth();
  const { mutate, isPending } = useMutation({
    mutationFn: login,
  });

  const [error, setError] = useState("");

  const handleLogin = (values) => {
    mutate(values, {
      onSuccess: (data) => {
        setUser(data);
        navigate("/pokemon", { replace: true });
      },
      onError: (error) => {
        setError(error.message);
      },
    });
  };

  return (
    <Container>
      <Formik initialValues={{ email: "", password: "" }} validationSchema={Schema} onSubmit={handleLogin}>
        {({ errors, touched, handleSubmit }) => (
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
            <Field
              as={Input}
              label="Password"
              type="password"
              name="password"
              disabled={isPending}
              error={touched.password && errors.password}
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
