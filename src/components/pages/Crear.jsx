import React from 'react'
import { useState } from 'react'
import {useForm} from '../../helpers/useForm'
import {Peticion} from '../../helpers/Peticion'
import {Global} from '../../helpers/Global'

export const Crear = () => {

  const {formulario, enviado, cambiado} = useForm({});
  const [resultado, setResultado] = useState("");

  const guardarArticulo = async(e) => {
    e.preventDefault();

    // Recoger datos formulario
    let nuevoArticulo = formulario;
    // Guardar articulo en el backend
    const {datos, cargando} = await Peticion(Global.url+"crear", "POST", nuevoArticulo);

    if(datos.status === "success"){
      setResultado("guardado");
      console.log(datos)

      // Subir la imagen
      let fileInput = document.querySelector('#file');
      if(fileInput.value){
        const formData = new FormData();
        formData.append('file0', fileInput.files[0]);
  
        const imagenSubida = await Peticion(Global.url+"subir-imagen/"+datos.articulo._id, "POST", formData, true);
  
        console.log(imagenSubida.datos);
      }
      

    }else{
      setResultado("error")
    }

  }



  return (
    <div className='jumbo contenedor'>
      <h1>Crear articulo</h1>
      <p>Formulario para crear un articulo</p>
      <strong>{resultado === "guardado" ? "El articulo se guardo correctamente!" : ""}</strong>
      <strong>{resultado === "error" ? "Los datos proporcionados son incorrectos" : ""}</strong>
      {/* Mostrar formulario */}

      <form className='formulario' onSubmit={guardarArticulo}>
        <div className='form-group'>
          <label htmlFor="titulo">Titulo</label>
          <input type="text" name='titulo' onChange={cambiado}/>
        </div>
        <div className='form-group'>
          <label htmlFor="contenido">Contenido</label>
          <textarea type="text" name='contenido' onChange={cambiado}/>
        </div>
        <div className='form-group'>
          <label htmlFor="file0">Imagen</label>
          <input type="file" name='file0' id='file' />
        </div>

        <input type="submit" name="Guardar"/>
      </form>

    </div>
  )
}
