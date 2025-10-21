import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './Layout/Layout';
import Dashboard from './Pages/Dashboard';
import FoodOrder from './Pages/FoodOrder';
import ManageMenu from './Pages/ManageMenu';
import CustomerReview from './Pages/CustomerReview';
import Setting from './Pages/Setting';
import Payment from './Pages/Payment';
import Accounts from './Pages/Accounts';
import Help from './Pages/Help';
import CheckOut from './components/CheckOut';
import FoodDetails from './components/FoodDeteils';
import OrderPage from './components/OrderPage';
import TeamCondition from "./components/TeamCondition";
import PrivacyPolicy from "./components/PrivacyPolicy"
import RevenueReport from './components/ReportPage/RevenueReport';
import OrderTimeReport from './components/ReportPage/OrderTimeReport';
import MostOrderReport from './components/ReportPage/MostOrderReport';
import OurRating from './components/ReportPage/OurRating';
import UserProfile from './components/UserProfile';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Dashboard></Dashboard>,
      },
      {
        path: "/foodOrder",
        element: <FoodOrder></FoodOrder>,
      },
      {
        path: "/food/:id",
        element: <FoodDetails></FoodDetails>,
      },
      {
        path: "/manageMenu",
        element: <ManageMenu></ManageMenu>,
      },
      {
        path: "/customerReview",
        element: <CustomerReview></CustomerReview>,
      },
       {
        path: "/settings",
        element: <Setting></Setting>,
      },
      {
        path: "/payment",
        element: <Payment></Payment>,
      },
      {
        path: "/accounts",
        element: <Accounts></Accounts>,
      },
      {
        path: "/Help",
        element: <Help></Help>,
      },
      {
        path: "/checkout",
        element: <CheckOut></CheckOut>,
      },
      {
        path: "/orderpage",
        element: <OrderPage></OrderPage>,
      },
       {
        path: "/termcondition",
        element: <TeamCondition></TeamCondition>,
      },
       {
        path: "/privacypolicy",
        element: <PrivacyPolicy></PrivacyPolicy>,
      },
      {
        path: "/revenuereport",
        element: <RevenueReport></RevenueReport>,
      },
      {
        path: "/ordertimereport",
        element: <OrderTimeReport></OrderTimeReport>,
      },
      {
        path: "/mostorderreport",
        element: <MostOrderReport></MostOrderReport>,
      },
      {
        path: "/ourrating",
        element: <OurRating></OurRating>,
      },
      {
        path: "/userprofile",
        element: <UserProfile></UserProfile>,
      },
      


    ]
},
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
