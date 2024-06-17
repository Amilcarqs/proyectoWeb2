import React from 'react'
import Footer from '../componentes/Footer'
import CardGroups from '../componentes/CardGroups'
import SuperposicionImagen from '../componentes/SuperposicionImagen'
import Formulario from '../componentes/Form'
function Bebidas() {
  return (
    <div className='bebidas'>
      <div>
        <SuperposicionImagen imagen="imagenes/bebidas/fondo.jpg" titulo="BEBIDAS" texto="Bienvenido a la seccion de Bebidas"/>
      </div>
      <br></br>
      <CardGroups img1="imagenes/bebidas/cafe.jpg" titulo1="Cafe" precio1="10" img2="imagenes/bebidas/champan.jpg" titulo2="Champan" precio2="25" img3="imagenes/bebidas/corona.jpg" titulo3="Corona" precio3="15" img4="imagenes/bebidas/helado.jpg" titulo4="Helado" precio4="10"  />
      <CardGroups img1="imagenes/bebidas/jugo.jpg" titulo1="Jugo" precio1="10" img2="imagenes/bebidas/lata.jpg" titulo2="Cervez en lata" precio2="10" img3="imagenes/bebidas/remy.jpg" titulo3="Remys" precio3="55" img4="imagenes/bebidas/te.jpg" titulo4="Té" precio4="10"  />
      <CardGroups img1="imagenes/bebidas/tequla.jpg" titulo1="Tequila" precio1="15" img2="imagenes/bebidas/tricolor.jpg" titulo2="Chupitos" precio2="15" img3="imagenes/bebidas/vasoCervez.jpg" titulo3="Cerveza" precio3="12" img4="imagenes/bebidas/vino.jpg" titulo4="Vino" precio4="40"  />
      
      <div className='cajaVacia'>
      </div>
      <Formulario/>
      <Footer/>
    </div>
  )
}

export default Bebidas