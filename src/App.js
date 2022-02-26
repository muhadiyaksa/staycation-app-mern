import React from "react";
import "./assets/scss/style.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Example from "./pages/Example";
import DetailsPage from "./pages/DetailsPage";
import Checkout from "./pages/Checkout";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />}></Route>
          <Route path="/example" element={<Example />}></Route>
          <Route path="/properties/:id" element={<DetailsPage />}></Route>
          <Route path="/checkout" element={<Checkout />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
