// libs
import { UserOutlined, KeyOutlined } from "@ant-design/icons";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import { Spin } from "antd";
import { AppState } from "reducers";
import { FastField, Form, Formik } from "formik";
// components
import InputField from "custom-fields/InputField";
// hooks
import { useRouter } from "Hooks/useRouter";
// actions
import { fetchLoginRequest } from "actions/userBehavior";
// others
import { IsRequired } from "constant";
import "./style.scss";

const LoginForm = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { err, isLoading } = useSelector(
    (state: AppState) => state.userBehavior
  );
  const initialValues = {
    username: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string().required(IsRequired),
    password: Yup.string().required(IsRequired),
  });

  const handleOnLoginSuccess = () => {
    router.push("/");
  };

  const handleOnLogin = (values: { username: string; password: string }) => {
    dispatch(fetchLoginRequest(values, handleOnLoginSuccess));
  };

  return (
    <div className="login-form-wrapper">
      <p className="header">Đăng nhập</p>
      <Formik
        validationSchema={validationSchema}
        initialValues={initialValues}
        onSubmit={(values) => handleOnLogin(values)}
      >
        {(formikProps) => {
          const { submitCount } = formikProps;
          return (
            <Form>
              <FastField
                name="username"
                label="Username"
                component={InputField}
                placeholder="Eg: admin..."
                icon={<UserOutlined className="site-form-item-icon" />}
                submitCount={submitCount}
                hasFeedBack
              />
              <FastField
                name="password"
                label="Password"
                type="password"
                component={InputField}
                placeholder="Eg: 123456..."
                icon={<KeyOutlined className="site-form-item-icon" />}
                submitCount={submitCount}
                hasFeedBack
              />

              <Spin spinning={isLoading}>
                <button
                  className="btn-submit ant-btn ant-btn-primary"
                  type="submit"
                >
                  Đăng nhập
                </button>
              </Spin>
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
