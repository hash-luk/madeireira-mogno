import React from 'react';
import './App.css';
import { Header } from './components/Header'
import { Products } from './components/Products'
import { Apresentation } from './components/Apresentation'
import { Clientes } from './components/Clientes'
import { Information } from './components/Information'
import { Footer } from './components/Footer'

function App() {
  return (
    <div id="container">
      <Header/>
      <Apresentation />
      <Products />
      <Clientes />
      <Information />
      <Footer />
    </div>
  );
}

export default App;
