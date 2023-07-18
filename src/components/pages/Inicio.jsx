import React from 'react'
import {Link} from 'react-router-dom';

export const Inicio = () => {
  return (
    <div className='jumbo contenedor'>
      <h1>Bienvenido al Blog Gera</h1>      
      <p>Blog desarrollado con el MERN Stack (Mongo, Express, React y NodeJS)</p>
      <Link to="/articulos" className='button'>Ver articulos</Link>
    </div>
  )
}
