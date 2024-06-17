import React from 'react'
import SuperposicionImagen from '../componentes/SuperposicionImagen'
import Tarjeta from '../componentes/Tarjeta'
import Footer from '../componentes/Footer'
import '../App.css'
import Formulario from '../componentes/Form'
function Promociones() {
  return (
    <div className='promociones'>
      <SuperposicionImagen imagen="imagenes/ropa/fondo.jpg" titulo="PROMOCIONES" texto="Aprovecha las promociones "/>
      <Tarjeta img1="imagenes/otros/saltena.jpg" titulo1="PROMOCION POR DIA DEL PADRE"  titulo2="POR EL DIA DE LA MADRE" img2="imagenes/otros/rosas.jpg" />
      <Tarjeta img1="imagenes/otros/juguetes.jpg" titulo1="PARA LOS NIÑOS DEL HOGAR"  titulo2="LLEGA EL ESPIRITU NAVIDEÑOS" img2="imagenes/otros/navidad.jpg" />
      <Tarjeta img1="imagenes/otros/copa.jpg" titulo1="NO TE PIERDAS NI UN SOLO PARTIDO"  titulo2="POR EL DIA DE LA MADRE" img2="imagenes/otros/rosas.jpg" />
      <div className='cajaVacia'>
      </div>
      <Formulario/>
      <Footer/>
    </div>
  )
}

export default Promociones