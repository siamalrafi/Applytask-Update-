import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import DashBoardLayout from '../Layout/DashBoardLayout';
import Dashboard from '../Pages/Dashboard/Dashboard';
import PrivateRoute from './PrivateRoute/PrivateRoute';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/dashboard",
        element: <PrivateRoute>
          <DashBoardLayout></DashBoardLayout>
        </PrivateRoute>,
        children: [
          {
            path: '/dashboard/home',
            element: <Dashboard></Dashboard>
          }
        ]
      },

    ]
  },
]);



export default router;