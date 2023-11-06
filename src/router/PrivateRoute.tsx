import { PropsWithChildren, FC } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivateRoute: FC<PropsWithChildren> = ({ children }) => {
  const user = useSelector((state: any) => state.user);
  return <>{user ? <>{children}</> : <Navigate to={`/user/sign-in`} />}</>;
};

export default PrivateRoute;
