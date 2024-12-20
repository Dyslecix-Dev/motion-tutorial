import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home.tsx";
import Drag from "./pages/Drag.tsx";
import Gesture from "./pages/Gesture.tsx";
import Keyframes from "./pages/Keyframes.tsx";
import Layout from "./pages/Layout.tsx";
import Rotate from "./pages/Rotate.tsx";
import ScrollLinkedAnimation from "./pages/ScrollLinkedAnimation.tsx";

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
        <Route path="/rotate" element={<Rotate />} />
        <Route path="/scroll-linked-animation" element={<ScrollLinkedAnimation />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);

