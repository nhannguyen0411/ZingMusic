import { UserOutlined } from "@ant-design/icons";
import InputField from "custom-fields/InputField";
import { FastField, Form, Formik } from "formik";
import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { fetchAPI } from "utils/request";
import * as Yup from "yup";
import "./style.scss";

const RegisterForm = () => {
  const [err, setErr] = useState("");
  const history = useHistory();
  const initialValues = {
    username: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string().required("This field is required."),
    password: Yup.string()
      .required("This field is required.")
      .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/, {
        message:
          "Password required 6-20 characters include of special character",
        excludeEmptyString: true,
      }),
  });

  const handleOnRegister = (values) => {
    fetchAPI("register", "POST", values)
      .then((res) => res.json())
      .then((json) => {
        if (json.success) {
          console.log("json", json.message);
          history.push("/login");
        } else {
          setErr(json.err);
        }
      });
  };

  return (
    <div className="register-form-wrapper">
      <Formik
        validationSchema={validationSchema}
        initialValues={initialValues}
        //onSubmit={(values) => handleOnRegister(values)}
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
                Have you already account? <Link to="/login">Login</Link>
              </p>
              {err && <p>{err}</p>}
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default RegisterForm;
