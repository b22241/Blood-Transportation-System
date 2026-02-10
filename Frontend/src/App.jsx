import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import React from "react";


import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Research from "./pages/Research";
import Contact from "./pages/Contact";
import TabularResult from "./pages/TabularResult";


function App() {
  return (
    <BrowserRouter>
      <div style={{ marginLeft: "240px" ,display: "flex" }}>
        <Sidebar />

        <div style={{ flex: 1, background: "#f4f6f8", minHeight: "100vh" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/research" element={<Research />} />
            <Route path="/tabular-result" element={<TabularResult />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
