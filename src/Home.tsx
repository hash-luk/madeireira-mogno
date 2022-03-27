import React from 'react';
import GlobalStyles from './styles/GlobalStyles';
import { Header } from './components/Header'
import { WhatsAppButton } from './components/WhatsAPP-Float-Button'
import { Products } from './components/Products'
import { Apresentation } from './components/Apresentation'
import { Clientes } from './components/Clientes'
import { Information } from './components/Information'
import { Footer } from './components/Footer'

function Home() {
  return (
    <div id="container">
      <WhatsAppButton />
      <Header/>
      <Apresentation />
      <Products />
      <Clientes />
      <Information />
      <Footer />
      <GlobalStyles />
    </div>
  );
}

export default Home;
