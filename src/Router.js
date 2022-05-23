import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import View from "./pages/View";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/view" element={<View />} />
      </Routes>
    </BrowserRouter>
  );
}
