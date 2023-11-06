import { createBrowserRouter } from "react-router-dom";
import LayOut from "../common/LayOut";
import HomePage from "../pages/HomePage";
import RegisterPage from "../pages/RegisterPage";
import SignInPage from "../pages/SignInPage";
import MessagePage from "../pages/MessagePage";
import MessagePageUser from "../statics/MessagePageUser";
import AdminRegPage from "../pages/AdminRegPage";
import AdminSignRegPage from "../pages/AdminSignRegPage";
import AdminHomePage from "../pages/AdminHomePage";
import Panel from "../pages/home/Panel";
import Workers from "../pages/home/Workers";
import Sales from "../pages/home/Sales";
import AdminPrivateRoute from "./AdminPrivateRoute";
import PrivateRoute from "./PrivateRoute";
import OptionsPage from "../pages/OptionsPage";
import AdminPanel from "../pages/home/AdminPanel";

export const MainRouter = createBrowserRouter([
  {
    path: "/user",
    element: <LayOut />,
    children: [
      {
        index: true,
        element: <RegisterPage />,
      },
      {
        index: true,
        element: <SignInPage />,
        path: "/user/sign-in",
      },
      {
        index: true,
        element: <SignInPage />,
        path: "/user/:token/verify",
      },
      {
        index: true,
        element: <MessagePageUser />,
        path: "/user/message",
      },
    ],
  },
  {
    path: "/admin",
    element: <LayOut />,
    children: [
      {
        index: true,
        element: <AdminRegPage />,
      },
      {
        index: true,
        element: <AdminSignRegPage />,
        path: "/admin/sign-in",
      },
      {
        index: true,
        element: <AdminSignRegPage />,
        path: "/admin/:token/verify",
      },
      {
        index: true,
        element: <MessagePage />,
        path: "/admin/message",
      },
    ],
  },
  {
    path: "/",
    element: <OptionsPage />,
  },
  {
    element: (
      <PrivateRoute>
        <HomePage />
      </PrivateRoute>
    ),
    path: "/user-me",
    children: [
      {
        element: <Panel />,
        index: true,
      },
      {
        element: <Sales />,
        index: true,
        path: "/user-me/sales",
      },
    ],
  },
  {
    element: (
      <AdminPrivateRoute>
        <AdminHomePage />
      </AdminPrivateRoute>
    ),
    path: "/admin-dashboard",
    children: [
      {
        element: <AdminPanel />,
        index: true,
      },
      {
        element: <Workers />,
        index: true,
        path: "/admin-dashboard/workers",
      },
    ],
  },
]);
