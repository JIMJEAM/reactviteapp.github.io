import React from 'react'
import Cajas from './caja'
import 'bootstrap/dist/css/bootstrap.min.css';
import imagenes from '../components/imagenes'

 


function home() {





             
  return (
    <div className="container vh-100 wow swing">
    <div><h1>home
   </h1>
   <div className='contenedorCajas'>

   <Cajas
   imagen={imagenes.img1}
   titulo='Escapate al caribe'
   texto='Escápate a este increíble destino de playa en el Caribe Mexicano'
   url='#'
   
   />
   
  
   <Cajas
   imagen={imagenes.img2}
   titulo='Escapate al caribe'
   texto='Escápate a este increíble destino de playa en el Caribe Mexicano'
   />
   <Cajas
   imagen={imagenes.img3}
   titulo='Escapate al caribe'
   texto='Escápate a este increíble destino de playa en el Caribe Mexicano'
   />

   </div>
    </div>
    </div>
    
  )
}

export default home