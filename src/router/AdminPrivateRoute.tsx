import { PropsWithChildren, FC } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const AdminPrivateRoute: FC<PropsWithChildren> = ({ children }) => {
  const admin = useSelector((state: any) => state.admin);

  return <>{admin ? <>{children}</> : <Navigate to={`/`} />}</>;
};

export default AdminPrivateRoute;
