import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../layout/index";
import Home from "../components/page/home/Home";
import Search from "../components/page/search/Search";
import Show from "../components/page/show/Show";


const AppRouter = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Search" element={<Search />} />
          <Route path="/Show" element={<Show />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default AppRouter;
