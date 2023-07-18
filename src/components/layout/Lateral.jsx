import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export const Lateral = () => {

  const [buscar, setBuscar] = useState("");
  const navegar = useNavigate();

  const hacerBusqueda = (e) => {
    e.preventDefault();
    let miBusqueda = e.target.buscador.value;

    navegar("/buscar/"+miBusqueda, {replace: true});

  }

  return (
    <aside className="lateral">
            <div className="search  contenedor">
                <h3 className="title">Buscador</h3>
                <form onSubmit={hacerBusqueda}>
                    <input type="text" placeholder="Buscar" name='buscador'/>
                    <input type='submit' value="Buscar" />
                </form>
            </div>
        </aside>
  )
}
