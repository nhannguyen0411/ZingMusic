import React from "react";
import LoginForm from "pages/Home/organisms/LoginForm";

import "./style.scss";

const Login = () => {
  return (
    <div className="login-wrapper">
      <p className="header">Đăng nhập</p>
      <LoginForm />
    </div>
  );
};

export default Login;
