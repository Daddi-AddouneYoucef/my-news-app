import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import ArticleDetail from "../pages/ArticleDetail";
import ThemeToggle from "./components/ThemeToggle";

import "./App.css";
import "./components/ThemeToggle.css";

function App() {
  return (
    <Router>
      <main className="App">
        <ThemeToggle />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/article/:id" element={<ArticleDetail />} />
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </main>
    </Router>
  );
}

export default App;
