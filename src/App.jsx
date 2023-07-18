import { useState } from 'react'
import { Inicio } from './components/pages/Inicio';
import { Articulos } from './components/pages/Articulos';
import { Crear } from './components/pages/Crear';
import { BlogRutas } from './routing/BlogRutas';

function App() {

  return (
    <div>
      <BlogRutas />
    </div>
  )
}

export default App
