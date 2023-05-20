import React from "react";
import { Route, Routes } from "react-router-dom";
import MasterLayout from "../components/layouts/MasterLayout";
import Index from "../pages/Index";
const MainRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<MasterLayout />}>
        <Route index element={<Index />} />
      </Route>
    </Routes>
  );
};

export default MainRoute;
