import InputField from "custom-fields/InputField";
import { FastField, Form, Formik } from "formik";
import React from "react";
import { UserOutlined } from "@ant-design/icons";
import * as Yup from "yup";
import "./style.scss";

const LoginForm = () => {
  const initialValues = {
    title: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    title: Yup.string().required("This field is required."),
    password: Yup.string().required("This field is required."),
  });

  return (
    <div className="login-form-wrapper">
      <Formik
        validationSchema={validationSchema}
        initialValues={initialValues}
        onSubmit={(values) => console.log("submit: ", values)}
      >
        {(formikProps) => {
          const { values, errors, touched } = formikProps;
          console.log({ values, errors, touched });
          return (
            <Form>
              <FastField
                name="title"
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
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default LoginForm;
