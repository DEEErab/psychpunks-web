import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages";
import TraitsPage from "./pages/traits";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/traits" element={<TraitsPage />} exact />
      </Routes>
    </Router>
  );
}

export default App;
