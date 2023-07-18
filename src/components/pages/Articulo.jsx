import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Global } from "../../helpers/Global";
import { Peticion } from "../../helpers/Peticion";
import { Listado } from "./Listado";

export const Articulo = () => {
  const [articulo, setArticulo] = useState({});
  const [cargando, setCargando] = useState(true);
  const params = useParams();

  useEffect(() => {
    conseguirArticulo();
  }, []);

  const conseguirArticulo = async () => {
    let { datos, cargando } = await Peticion(
      Global.url + "articulo/" + params.id,
      "GET"
    );

    // let peticion = await fetch(url, {
    //   method: "GET"
    // });
    // let datos = await peticion.json();

    if (datos.status === "success") {
      setArticulo(datos.articulo);
    }

    setCargando(false);
  };

  const fechaNormal = (fecha) => {
    let fechaNueva = fecha.split("T");

    return fechaNueva[0];
  }

  return (
    <>
      {cargando ? (
        "Cargando ..."
      ) : (
        <div className="jumbo contenedor articulo-solo">
          <h1 className="titulo-articulo">{articulo.titulo}</h1>
          <div className="mascara">
            {articulo.imagen != "default.png" && (
              <img
                width="608"
                height="334"
                src={Global.url + "imagen/" + articulo.imagen}
              />
            )}
            {articulo.imagen === "default.png" && (
              <img src="https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg" />
            )}
          </div>
          <p>{articulo.contenido}</p>
          <span>Fecha de publicacion: {fechaNormal(articulo.fecha)}</span>
        </div>
      )}
    </>
  );
};
