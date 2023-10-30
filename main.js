import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'
import Header from './src/shared/header/header.css'

document.querySelector('#app').innerHTML = ` 

  <button><a href="./src/clientes/clientes.html">Clientes</a></button>
  <button><a href="./src/">Mascotas</a></button>
  <button>Reservar Cita</button>


`

setupCounter(document.querySelector('#counter'))
