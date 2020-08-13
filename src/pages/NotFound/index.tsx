import React from "react";
import { useRouter } from "Hooks/useRouter";

const NotFound = () => {
  const router = useRouter();
  return <div>404 Not Found route {router.location.pathname}</div>;
};

export default NotFound;
