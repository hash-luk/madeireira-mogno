import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Home from "./routes/home";
import Products from "./routes/products";
import Contact from "./routes/contact";
import About from "./routes/about";

ReactDOM.render(
  <>
    <div className="App">
      <App />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/produtos" element={<Products />} />
          <Route path="/contato" element={<Contact />} />
          <Route path="/sobre" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  </>,
  document.getElementById("root")
);
