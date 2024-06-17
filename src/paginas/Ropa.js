import React from 'react'

import CardGroups from '../componentes/CardGroups'
import SuperposicionImagen from '../componentes/SuperposicionImagen'
import Footer from '../componentes/Footer'
import Formulario from '../componentes/Form'
function Ropa() {
  return (
    <div className='ropa'>
      <div>
        <SuperposicionImagen imagen="imagenes/ropa/fondo.jpg" titulo="ROPA" texto="Bienvenido a la seccion de Ropa"/>
      </div>
      <br></br>
      <CardGroups img1="imagenes/ropa/bufanda.jpg" titulo1="Bufanda" precio1="30" img2="imagenes/ropa/camisa.jpg" titulo2="Camisa" precio2="70" img3="imagenes/ropa/carteras.jpg" titulo3="Cartera" precio3="149" img4="imagenes/ropa/chamarras.jpg" titulo4="Chamarra" precio4="310"  />
      <CardGroups img1="imagenes/ropa/chaqueta.jpg" titulo1="Chaqueta" precio1="180" img2="imagenes/ropa/gorro.jpg" titulo2="Gorro" precio2="40" img3="imagenes/ropa/guantes.jpg" titulo3="Guantes" precio3="20" img4="imagenes/ropa/pillama.jpg" titulo4="Pillama" precio4="110"  />
      <CardGroups img1="imagenes/ropa/pantalones.jpg" titulo1="Pantalones" precio1="90" img2="imagenes/ropa/polera.jpg" titulo2="Polera" precio2="45" img3="imagenes/ropa/saco.jpg" titulo3="Saco" precio3="159" img4="imagenes/ropa/vestido.jpg" titulo4="Vestido" precio4="100"  />
      <div className='cajaVacia'>
      </div>
      <Formulario/>
      <Footer/>
    </div>
  )
}

export default Ropa