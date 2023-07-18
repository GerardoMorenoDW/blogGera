import React from 'react'

export const SobreMi = () => {
  return (
    <div className='jumbo contenedor sobre-mi'>
      <h1>Gerardo Moreno</h1>
      <div className='contenedor_imagen'>
        <img src="/public/fotocarnet.jpg" alt="gerardo moreno foto" />
      </div>
      <p className='descripcion'>
        Mi objetivo profesional es adquirir las habilidades técnicas necesarias para diseñar,
        desarrollar y mantener aplicaciones web completas y de alta calidad, desde el frontend hasta el back-end. Para lograrlo, me comprometo a aprender y dominar las
        tecnologías y herramientas fundamentales en ambos lados.
      </p>
      <a href="https://portafolio-r-gm.netlify.app" target='_blank'>Portafolio</a>
    </div>
  )
}
