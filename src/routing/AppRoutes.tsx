import { FC } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import MasterLayout from "../layout/MasterLayout";
import Home from "../pages/Home";
import Universities from "../pages/Universities";
import University from "../pages/University";

const AppRoutes: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MasterLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/universities">
            <Route index element={<Universities />} />
            <Route path=":id" element={<University />} />
          </Route>
          <Route path="*" element={<h1>Not Found</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export { AppRoutes };
