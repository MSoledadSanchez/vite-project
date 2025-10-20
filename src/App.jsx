// import { useState } from 'react'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Inicio from './Pages/Inicio.jsx';
import Nosotros from './Pages/Nosotros.jsx';
import Productos from './Pages/Productos.jsx';
import Contacto from './Pages/Contacto.jsx';
import ProductoDetalle from './Pages/ProductoDetalle.jsx';

import './App.css';
import Footer from './components/Footer/Footer.jsx';

import Header from './components/Header/Header.jsx';
import NavBar from './components/NavBar/NavBar.jsx';
// import ListaProductos from  './components/ListaProductos/ListaProductos.jsx';

function App() {

    return (
      <>
      <Header />

        <NavBar />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/productos/:id" element={<ProductoDetalle />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>

      {/* <ListaProductos /> */}

      <Footer />
      </>
    )
}

export default App


