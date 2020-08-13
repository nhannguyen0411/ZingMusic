import LoginForm from "pages/Home/organisms/LoginForm";
import React from "react";
import "./style.scss";

const Login = () => {
  // if (token) {
  //   return <Redirect to="/" />;
  // }

  return (
    <div className="login-wrapper">
      <LoginForm />
    </div>
  );
};

export default Login;
