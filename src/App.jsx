import React from "react";
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import HomeLayout from "./Layout/HomeLayout";
import Home from "./pages/Home";
import Profile from "./pages/Dashboard/Profile";
import Campaigns from "./pages/Campaigns";
import { configWeb3Modal } from "./connection";
import Dashboard from "./pages/Dashboard/Dashboard";
import DashboardLayout from "./Layout/DashboardLayout";

configWeb3Modal();

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<HomeLayout />}>
        <Route index element={<Home />} />
        <Route path="/campaigns" element={<Campaigns />} />
      </Route>
      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route index element={<Dashboard />} />
      </Route>
      <Route path="/profile" element={<Profile />} />
    </Route>
  )
);

const App = () => {
  return (
    <div className="w-full min-h-[100vh]">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
