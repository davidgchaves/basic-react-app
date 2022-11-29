import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { LoginPage } from "./scenes/login";
// import { ListPage } from "./scenes/list";
// import { DetailPage } from "./scenes/detail";
// import { LoginPage } from "@/scenes/login";
// import { ListPage } from "@/scenes/list";
// import { DetailPage } from "@/scenes/detail";
import { DetailPage, LoginPage, ListPage } from "@/scenes";

export const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/list" element={<ListPage />} />
          <Route path="/detail/:id" element={<DetailPage />} />
        </Routes>
      </Router>
    </>
  );
};
