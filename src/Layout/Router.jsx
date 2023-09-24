import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Home/Home";
import { MainLayout } from "./MainLayout";
import Donation from "../Components/Donation/Donation";
import Statistics from "../Components/Statistics/Statistics";
import DonationDetails from "../Components/Donation/DonationDetails";
import DonatedCards from "../Components/Donation/Donated/DonatedCards";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/donation",
        loader: () => fetch("/public/data/data.json"),
        element: <DonatedCards></DonatedCards>,
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "/home/:id",
        loader: () => fetch("/public/data/data.json"),
        element: <DonationDetails></DonationDetails>,
      },
    ],
  },
]);

export { router };
