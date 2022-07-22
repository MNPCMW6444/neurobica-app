import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import App from "./dapp/Dapp";
import PPT from "./ptt/PTT";

export default function BasicExample() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/ppt" element={<PPT />} />
      </Routes>
    </Router>
  );
}
