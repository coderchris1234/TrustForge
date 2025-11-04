import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const Private = () => {
  const user = useSelector((state) => state.TrustForge.user);
  const usertoken = user?.token;

  return <div>{usertoken ? <Outlet /> : <Navigate to="/" />}</div>;
};

export default Private;
