import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter,Routes,Route } from "react-router-dom"
import App from './Home';
import Products from './routes/products'
import Contact from './routes/contact'
import About from './routes/about'


ReactDOM.render(
  <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}/>
      <Route path="/produtos" element={<Products />}/>
      <Route path="/contato" element={<Contact />} />
      <Route path="/sobre" element={<About />} />
    </Routes>
    </BrowserRouter>
  </>,
  document.getElementById('root')
);

