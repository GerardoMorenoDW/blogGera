import React from 'react';
import {Routes, Route, BrowserRouter, Navigate} from "react-router-dom";
import { Inicio } from '../components/pages/Inicio';
import { Articulos } from '../components/pages/Articulos';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { Lateral } from '../components/layout/Lateral';
import { Crear } from '../components/pages/Crear';
import { SobreMi } from '../components/pages/SobreMi';
import { Busqueda } from '../components/pages/Busqueda';
import { Articulo } from '../components/pages/Articulo';
import { Editar } from '../components/pages/Editar';

export const BlogRutas = () => {
  return (
    <BrowserRouter>
        {/* LAYOUT */}
        <Header />

        <main className='contenido-principal'>
          {/* CONTENIDO CENTRAL Y RUTAS */}

          <section id='content' className='content'>

              <Routes>
                  <Route path='/' element={<Inicio />} />
                  <Route path='/inicio' element={<Inicio />} />
                  <Route path='/articulos' element={<Articulos />} />
                  <Route path='/crear' element={<Crear />} />
                  <Route path='/sobre-mi' element={<SobreMi />} />
                  <Route path='/buscar/:busqueda' element={<Busqueda />} />
                  <Route path='/articulo/:id' element={<Articulo />} />
                  <Route path='/editar/:id' element={<Editar />} />

                  <Route path='*' element={
                    <div className='jumbo contenedor'>
                      <h2>Error 404</h2>
                    </div>
                  } />

              </Routes>

          </section>

          <Lateral />
        </main>
        <Footer />
    
    </BrowserRouter>
  )
}
