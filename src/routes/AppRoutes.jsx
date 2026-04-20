// src/routes/AppRoutes.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import NewsDetails from "../pages/NewsDetails";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news/:id" element={<NewsDetails />} />
      </Routes>
    </BrowserRouter>
  );
}
