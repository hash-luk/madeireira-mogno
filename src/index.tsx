import React from "react";
import ReactDOM from "react-dom";
import Particles from "react-tsparticles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Home from "./routes/home";
import Products from "./routes/products";
import Contact from "./routes/contact";
import About from "./routes/about";

const particlesOptions = {
  fpsLimit: 60,
  particles: {
    links: {
      enable: true,
      distance: 50,
    },
    move: {
      enable: true,
      speed: 2,
      outMode: {
        default: "boucne",
      },
    },
    size: {
      value: 1,
    },
  },
};

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
      <Particles
        id="ts-particles"
        options={{
          fpsLimit: 60,
          particles: {
            links: {
              enable: true,
              distance: 50,
            },
            move: {
              enable: true,
              speed: 2,
              outMode: "bounce"
            },
            size: {
              value: 1,
            },
          },
        }}
      />
    </div>
  </>,
  document.getElementById("root")
);
