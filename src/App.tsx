import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { Detail } from "./pages/Detail";

export const App = () => {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </React.Fragment>
  );
};
