import React from 'react'
import '../App.css';
import Carrusel from '../componentes/Carrusel';
import Footer from '../componentes/Footer';
import Example from '../componentes/Carrusel';
import  Formulario from '../componentes/Form';

function Inicio() {
    
  return (
    <div className='inicioPrincipal'>
      <div className='tituloInicio'>
        <div >
        <h1 className="titan-one-regular">
          BIENVENIDOS AL SUPERMERCADO DEL PUEBLO</h1>
          
        </div> 
        <h3>Aqui encontraras los productos que buscas y al mejor precio </h3>
      </div>
      
      <Example/>
      <div className='cajaVacia'>

      </div>
      <Formulario/>
      <Footer/>
    </div>
  )
}

export default Inicio