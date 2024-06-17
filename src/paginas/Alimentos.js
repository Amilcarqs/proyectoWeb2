import React from 'react'
import CardGroups from '../componentes/CardGroups'
import SuperposicionImagen from '../componentes/SuperposicionImagen'
import Footer from '../componentes/Footer'
import Formulario from '../componentes/Form'
function Alimentos() {
  return (
    <div className='alimentos'>
      <div>
        <SuperposicionImagen imagen="imagenes/alimentos/fondo.jpg" titulo="ALIMENTOS" texto="Bienvenido a la seccion de Alimentos"/>
      </div>
      <br></br>
      <CardGroups img1="imagenes/alimentos/cebolla.jpg" titulo1="Cebolla" precio1="2" img2="imagenes/alimentos/durazno.jpg" titulo2="Durazno" precio2="2" img3="imagenes/alimentos/frutilla.jpg" titulo3="Frutilla" precio3="5" img4="imagenes/alimentos/galletas.webp" titulo4="Galletas" precio4="10"  />
      <CardGroups img1="imagenes/alimentos/huevos.jpg" titulo1="Huevos" precio1="1" img2="imagenes/alimentos/lenteja.jpg" titulo2="Lenteja" precio2="7" img3="imagenes/alimentos/maiz.jpg" titulo3="Maiz" precio3="10" img4="imagenes/alimentos/mandarina.jpg" titulo4="Mandarina" precio4="10"  />
      <CardGroups img1="imagenes/alimentos/manzana.jpg" titulo1="Manzana" precio1="8" img2="imagenes/alimentos/nabos.jpg" titulo2="Nabo" precio2="5" img3="imagenes/alimentos/naranja.jpg" titulo3="Naranaja" precio3="15" img4="imagenes/alimentos/pan.jpg" titulo4="Pan" precio4="0,5"  />
      <CardGroups img1="imagenes/alimentos/cebolla.jpg" titulo1="Cebolla" precio1="2" img2="imagenes/alimentos/papa.jpg" titulo2="Papa" precio2="20" img3="imagenes/alimentos/pera.jpg" titulo3="Pera" precio3="8" img4="imagenes/alimentos/platano.jpg" titulo4="Platano" precio4="8"  />
      <CardGroups img1="imagenes/alimentos/sandia.jpg" titulo1="Sandia" precio1="5" img2="imagenes/alimentos/tomate.jpg" titulo2="Tomate" precio2="8" img3="imagenes/alimentos/tunta.jpg" titulo3="Tunta" precio3="10" img4="imagenes/alimentos/uva.jpg" titulo4="Uva" precio4="6"  />
      <div className='cajaVacia'>
      </div>
      <Formulario/>
      <Footer/>
    </div>
    
  )
}

export default Alimentos