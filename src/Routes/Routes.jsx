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
import PrivateRoutes from "./PrivateRoutes";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/add-queries",
        element: <PrivateRoutes><AddQueries></AddQueries></PrivateRoutes>
      },
      {
        path: "/my-queries",
        element:<PrivateRoutes> <MyQueries></MyQueries></PrivateRoutes>
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/queries",
        element: <Queries></Queries>,
      },
      {
        path: "/update/:id",
        element: <PrivateRoutes><UpdateQueries></UpdateQueries></PrivateRoutes>
      },
      {
        path: "query-details/:id",
        element: <PrivateRoutes><QueryDetails></QueryDetails></PrivateRoutes>
      },
      {
        path: "/my-recomandation",
        element: <PrivateRoutes><MyRecomandation></MyRecomandation></PrivateRoutes>
      },
      {
        path: "/recommendationsfor-me",
        element: (
          <PrivateRoutes>
            <RecomdationForME></RecomdationForME>
          </PrivateRoutes>
        ),
      },
    ],
  },
]);
