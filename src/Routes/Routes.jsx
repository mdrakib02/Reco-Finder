import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import AddQueries from "../Pages/AddQueries";
import ErrorPage from "../Pages/Error/ErrorPage";
import MyQueries from "../Pages/MyQueries";
import Login from "../Pages/Authentication/Login";
import Register from "../Pages/Authentication/Register";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement: <ErrorPage></ErrorPage>,
      children:[
        {
          path: "/",
          element: <Home></Home>
        },
        {
          path:"/add-queries",
          element: <AddQueries></AddQueries>
        },
        {
          path: "/my-queries",
          element:<MyQueries></MyQueries>
        },
        {
          path: "/login",
          element: <Login></Login>
        },
        {
          path: "/register",
          element: <Register></Register>
        }
      ]
    },

  ]);