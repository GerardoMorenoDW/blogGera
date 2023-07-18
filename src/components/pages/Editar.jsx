import React from 'react'
import { useState, useEffect } from 'react'
import {useForm} from '../../helpers/useForm'
import {Peticion} from '../../helpers/Peticion'
import {Global} from '../../helpers/Global'
import { useParams } from 'react-router-dom'

export const Editar = () => {

  const {formulario, enviado, cambiado} = useForm({});
  const [resultado, setResultado] = useState("");
  const [articulo, setArticulo] = useState({});
  const params = useParams();

  useEffect(() => {
    conseguirArticulo();
  }, []);

  const editarArticulo = async(e) => {
    e.preventDefault();

    // Recoger datos formulario
    let nuevoArticulo = formulario;
    // Guardar articulo en el backend
    const {datos} = await Peticion(Global.url+"articulo/"+params.id, "PUT", nuevoArticulo);

    if(datos.status === "success"){
      setResultado("guardado");

      // Subir la imagen
      let fileInput = document.querySelector('#file');
      if(fileInput.value){
        const formData = new FormData();
        formData.append('file0', fileInput.files[0]);
  
        const imagenSubida = await Peticion(Global.url+"subir-imagen/"+datos.actualizado._id, "POST", formData, true);
  
        console.log(imagenSubida.datos);
      }
      

    }else{
      setResultado("error")
    }

  }

  const conseguirArticulo = async () => {
    let { datos } = await Peticion(
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
  };



  return (
    <div className='jumbo contenedor'>
      <h1>Editar Articulo</h1>
      <p>Formulario para editar: {articulo.titulo}</p>
      <strong>{resultado === "guardado" ? "El articulo se guardo correctamente!" : ""}</strong>
      <strong>{resultado === "error" ? "Los datos proporcionados son incorrectos" : ""}</strong>
      {/* Mostrar formulario */}

      <form className='formulario' onSubmit={editarArticulo}>
        <div className='form-group'>
          <label htmlFor="titulo">Titulo</label>
          <input type="text" name='titulo' onChange={cambiado} defaultValue={articulo.titulo}/>
        </div>
        <div className='form-group'>
          <label htmlFor="contenido">Contenido</label>
          <textarea type="text" name='contenido' onChange={cambiado} defaultValue={articulo.contenido}/>
        </div>
        <div className='form-group'>
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
          <label htmlFor="file0">Imagen</label>
          <input type="file" name='file0' id='file' />
        </div>

        <input type="submit" name="Guardar"/>
      </form>

    </div>
  )
}
