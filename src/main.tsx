import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home.tsx";
import Drag from "./pages/Drag.tsx";
import Gesture from "./pages/Gesture.tsx";
import Keyframes from "./pages/Keyframes.tsx";
import Layout from "./pages/Layout.tsx";

import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/drag" element={<Drag />} />
        <Route path="/gesture" element={<Gesture />} />
        <Route path="/keyframes" element={<Keyframes />} />
        <Route path="/layout" element={<Layout />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);

