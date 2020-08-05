import { UserOutlined } from "@ant-design/icons";
import InputField from "custom-fields/InputField";
import { FastField, Form, Formik } from "formik";
import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { fetchAPI } from "utils/request";
import * as Yup from "yup";
import "./style.scss";

const LoginForm = () => {
  const [err, setErr] = useState("");
  const history = useHistory();
  const initialValues = {
    username: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string().required("This field is required."),
    password: Yup.string().required("This field is required."),
  });

  const handleOnLogin = (values) => {
    fetchAPI("login", "POST", values)
      .then((res) => res.json())
      .then((json) => {
        if (json.success) {
          console.log("json", json.message);
          localStorage.setItem("token", json.token);
          history.push("/");
        } else {
          setErr(json.err);
        }
      });
  };

  return (
    <div className="login-form-wrapper">
      <Formik
        validationSchema={validationSchema}
        initialValues={initialValues}
        onSubmit={(values) => handleOnLogin(values)}
      >
        {(formikProps) => {
          const { values, errors, touched } = formikProps;
          console.log({ values, errors, touched });
          return (
            <Form>
              <FastField
                name="username"
                label="Username"
                component={InputField}
                placeholder="Eg: admin..."
                icon={<UserOutlined className="site-form-item-icon" />}
              />
              <FastField
                name="password"
                label="Password"
                type="password"
                component={InputField}
                placeholder="Eg: 123456..."
              />
              <button type="submit">Submit</button>
              <p>
                New to ZingMusic? <Link to="/register">Register</Link>
              </p>
              {err && <p>{err}</p>}
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default LoginForm;
