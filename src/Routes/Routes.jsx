import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import AddQueries from "../Pages/AddQueries";
import ErrorPage from "../Pages/Error/ErrorPage";
import MyQueries from "../Pages/MyQueries";
import Login from "../Pages/Authentication/Login";
import Register from "../Pages/Authentication/Register";
import Queries from "../Pages/Queries";
import UpdateQueries from "../Pages/UpdateQueries";
import QueryDetails from "../Pages/QueryDetails";
import MyRecomandation from "../Pages/MyRecomandation";
import RecomdationForME from "../Pages/RecomdationForME";

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
        },
        {
          path: "/queries",
          element: <Queries></Queries>
        },
        {
          path: "/update/:id",
          element: <UpdateQueries></UpdateQueries>
        },
        {
          path: "query-details/:id",
          element: <QueryDetails></QueryDetails>
        },
        {
          path: "/my-recomandation",
          element: <MyRecomandation></MyRecomandation>
        },
        {
          path: "/recommendationsfor-me",
          element: <RecomdationForME></RecomdationForME>
        }
      ]
    },

  ]);