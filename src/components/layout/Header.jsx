import React from 'react'
import { NavLink } from 'react-router-dom';
import { Inicio } from '../pages/Inicio';

export const Header = () => {
  return (
    <header className="header"> 
        <nav className="navegacion">
            <div className="logo">
                <h1>Blo<span>G</span></h1>
                
            </div>
            <ul>
                <li><NavLink to="/inicio"
                    className={({isActive}) => isActive ? "activado" : ""}>Inicio
                    </NavLink>
                </li>
                <li><NavLink to="/articulos"
                    className={({isActive}) => isActive ? "activado" : ""}>Articulos
                    </NavLink>
                </li>
                <li><NavLink to="/crear"
                    className={({isActive}) => isActive ? "activado" : ""}>Crear
                    </NavLink>
                </li>
                <li><NavLink to="/sobre-mi"
                    className={({isActive}) => isActive ? "activado" : ""}>Sobre mi
                    </NavLink>
                </li>
            </ul>
        </nav>
    </header>
  )
}
