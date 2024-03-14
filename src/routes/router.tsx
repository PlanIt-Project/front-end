import { createBrowserRouter } from "react-router-dom";
import Landing from "../pages/Landing";
import About from "../pages/About";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import MyPage from "../pages/MyPage";
import Main from "../pages/Main";
import UserTicket from "../pages/user/Ticket";
import UserSchedule from "../pages/user/Schedule";
import UserReservation from "../pages/user/Reservation";
import TrainerReservation from "../pages/trainer/Reservation";
import TrainerSchedule from "../pages/trainer/Schedule";
import Account from "../pages/admin/Account";
import Trainer from "../pages/admin/Trainer";
import Banner from "../pages/admin/Banner";
import LoginRoute from "./LoginRoute";
import UserRoute from "./UserRoute";
import TrainerRoute from "./TrainerRoute";
import AdminRoute from "./AdminRoute";
import Layout from "../components/Layout";
import Product from "../pages/admin/Product";
import Program from "../pages/admin/Program";
import AdmitRequest from "../pages/admin/AdmitRequest";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Landing /> },
      { path: "/about", element: <About /> },
      { path: "/login", element: <Login /> },
      { path: "/signUp", element: <SignUp /> },
      {
        element: <LoginRoute />,
        children: [
          { path: "/myPage", element: <MyPage /> },
          { path: "/main", element: <Main /> },
          {
            path: "/user",
            element: <UserRoute />,
            children: [
              { path: "/user/ticket", element: <UserTicket /> },
              { path: "/user/schedule", element: <UserSchedule /> },
              { path: "/user/reservation", element: <UserReservation /> },
              {
                path: "/user/reservation/:reservationId",
                element: <UserReservation />,
              },
            ],
          },
          {
            path: "/trainer",
            element: <TrainerRoute />,
            children: [
              { path: "/trainer/reservation", element: <TrainerReservation /> },
              { path: "/trainer/schedule", element: <TrainerSchedule /> },
            ],
          },
          {
            path: "/admin",
            element: <AdminRoute />,
            children: [
              { path: "/admin/account", element: <Account /> },
              { path: "/admin/trainer", element: <Trainer /> },
              { path: "/admin/banner", element: <Banner /> },
              { path: "/admin/product", element: <Product /> },
              { path: "/admin/program", element: <Program /> },
              { path: "/admin/admit-request", element: <AdmitRequest /> },
            ],
          },
        ],
      },
    ],
  },
]);
