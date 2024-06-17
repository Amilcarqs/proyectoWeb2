import React from 'react'
import CardGroups from '../componentes/CardGroups'
import SuperposicionImagen from '../componentes/SuperposicionImagen'
import Footer from '../componentes/Footer'
import Formulario from '../componentes/Form'
function Electrodomesticos() {
  return (
    
    <div className='electro'>
      <div>
        <SuperposicionImagen imagen="imagenes/electrodomesticos/fondo.jpg" titulo="ELECTRODOMESTICOS" texto="Bienvenido a la seccion de Electrodomesticos"/>
      </div>
      <br></br>
      <CardGroups img1="imagenes/electrodomesticos/cocina.jpg" titulo1="Cocina" precio1="650" img2="imagenes/electrodomesticos/cucharas.jpg" titulo2="Juego de Cucharas" precio2="70" img3="imagenes/electrodomesticos/lavadoras.jpg" titulo3="Lavadora" precio3="1479" img4="imagenes/electrodomesticos/licuadoras.jpg" titulo4="Licuadoras" precio4="310"  />
      <CardGroups img1="imagenes/electrodomesticos/olla.jpg" titulo1="Ollas" precio1="80" img2="imagenes/electrodomesticos/plancha.jpg" titulo2="Plancha" precio2="170" img3="imagenes/electrodomesticos/refri.jpg" titulo3="Refrigerador" precio3="1479" img4="imagenes/electrodomesticos/sanduchra.jpg" titulo4="Sanduchera" precio4="110"  />
      <CardGroups img1="imagenes/electrodomesticos/secadora.jpg" titulo1="Secadora" precio1="90" img2="imagenes/electrodomesticos/televisor.jpg" titulo2="Televisor" precio2="790" img3="imagenes/electrodomesticos/tostadora.jpg" titulo3="Tostadora" precio3="159" img4="imagenes/electrodomesticos/vasos.jpg" titulo4="Juego de vasos" precio4="100"  />
      <div className='cajaVacia'>
      </div>
      <Formulario/>
      <Footer/>
    </div>
  )
}

export default Electrodomesticos