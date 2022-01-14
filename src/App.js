import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import AppWrapper from "./App.style";

const AppRoute = () => {
  return (
    <BrowserRouter>
      <AppWrapper>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </AppWrapper>
    </BrowserRouter>
  );
};

export default AppRoute;
