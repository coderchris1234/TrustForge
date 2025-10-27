import { Navigate, Outlet } from "react-router-dom";

const Private = () => {
  const usertoken = "null";

  return <div>{usertoken ? <Outlet /> : <Navigate to="/" />}</div>;
};

export default Private;
