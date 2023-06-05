import React, { FC, ReactElement } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import FashionNews from "./pages/FashionNews";
import FashionTips from "./pages/FashionTips";
import NotFoundPage from "./pages/NotFoundPage";

const App: FC = (): ReactElement => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/news" element={<FashionNews />} />
      <Route path="/tips" element={<FashionTips />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default App;
