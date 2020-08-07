import React, { useEffect } from "react";
import LoginForm from "pages/Home/organisms/LoginForm";

import "./style.scss";
import { useSelector } from "react-redux";
import { AppState } from "reducers";
import { useRouter } from "Hooks/useRouter";

const Login = () => {
  const { token } = useSelector((state: AppState) => state.userBehavior);
  const router = useRouter();

  useEffect(() => {
    token && router.push("/");
  }, [token, router]);

  return (
    <div className="login-wrapper">
      <LoginForm />
    </div>
  );
};

export default Login;
