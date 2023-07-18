import React from "react";
import { Global } from "../../helpers/Global";
import { Peticion } from "../../helpers/Peticion";
import { Link } from "react-router-dom";

export const Listado = ({ articulos, setArticulos }) => {

  const eliminar = async(id) => {
    let {datos} = await Peticion(Global.url+"articulo/"+id, "DELETE");
    if(datos.status === "success"){
      let articulosActualizados = articulos.filter(articulo => articulo._id != id);
      setArticulos(articulosActualizados);
    }
  }

  return articulos.map((articulo) => {
    return (
      <article key={articulo._id} className="articulo contenedor">
        <h3 className="title"><Link to={"/articulo/"+articulo._id}>{articulo.titulo}</Link></h3>
        <div className="mascara">
          {articulo.imagen != "default.png" && <img width="608" height="334" src={Global.url+"imagen/"+articulo.imagen}/>}
          {articulo.imagen === "default.png" && <img src="https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg"/>}
        </div>
        <div className="datos">
          <p className="description">{articulo.contenido}</p>
          <Link to={"/editar/"+articulo._id} className="boton-articulo-editar">Editar</Link>
          <button className="boton-articulo-borrar" onClick={() => {
            eliminar(articulo._id);
          }}>Borrar</button>
        </div>
      </article>
    );
  });
};
