import { FC } from "react";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import MasterLayout from "../layout/MasterLayout";
import Home from "../pages/Home";
import Universities from "../pages/Universities";
import University from "../pages/University";

const AppRoutes: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route element={<MasterLayout />}>
          <Route path="/universities">
            <Route index element={<Universities />} />
            <Route path=":id" element={<University />} />
          </Route>
        </Route>

        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};

export { AppRoutes };
