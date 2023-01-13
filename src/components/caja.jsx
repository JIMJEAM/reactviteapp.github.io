import React from 'react'
import './estilos/caja.css';



const Cajas = (props) => {
  return (
    <div className='contenedorTexto'>
        <img src={props.imagen} className='contenedorImagen' />
    <h5 className='contenedorTitulo'>{props.titulo}
    </h5>
    <p className='contenedorParrafo'>{props.texto}
      
    </p>
    
   
    <a class="btn btn-danger m-2 text-warning" href={props.url} role="button" target='_Blank'>viaja Ya!</a>
  
    </div>
  )
}

export default Cajas