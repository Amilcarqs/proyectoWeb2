import React from 'react'
import SuperposicionImagen from '../componentes/SuperposicionImagen'
import Acordion from '../componentes/Acordeon'
import Footer from '../componentes/Footer'
import '../App.css';
import Formulario from '../componentes/Form';
function Sucursales() {
  return (
    <div className='sucursales'>
      <SuperposicionImagen imagen="imagenes/bebidas/fondo.jpg" titulo="SUCURSALES" texto="Encuentranos en nuestras distintas Sucursales del Pais"/>
      <Acordion lugar1="LA PAZ" titulo1="LA PAZ" texto1="Dirección: Calle Comercio Esq. Ayacucho N° 1200. Teléfono: 2 204127 - 2 204340. insert google map html. Gobierno Autónomo Departamental de La Paz" img1="imagenes/sucursales/la paz.jpg" 
      lugar2="SANTA CRUZ" titulo2="SANTA CRUZ" texto2="Dirección: Gobierno Autónomo Municipal de Santa Cruz de la Sierra Plaza 24 de Septiembre (acera Norte), calle 24 de Septiembre, esquina calle Bolívar #101. Horario de atención al público: De Lunes a Viernes de 8:00 a 16:00" img2="imagenes/sucursales/santa.jpg"  />
      <Acordion lugar1="ORURO" titulo1="ORURO" texto1="Dirección: Calle Comercio Esq. Ayacucho N° 1200. Teléfono: 2 204127 - 2 204340. insert google map html. Gobierno Autónomo Departamental de La Paz" img1="imagenes/sucursales/la paz.jpg" 
      lugar2="COCHABAMBA" titulo2="COCHABAMBA" texto2="Dirección: Gobierno Autónomo Municipal de Santa Cruz de la Sierra Plaza 24 de Septiembre (acera Norte), calle 24 de Septiembre, esquina calle Bolívar #101. Horario de atención al público: De Lunes a Viernes de 8:00 a 16:00" img2="imagenes/sucursales/oruro.jpg"  />
      <Acordion lugar1="CHUQUISACA" titulo1="CHUQUISACA" texto1="Dirección: Calle Comercio Esq. Ayacucho N° 1200. Teléfono: 2 204127 - 2 204340. insert google map html. Gobierno Autónomo Departamental de La Paz" img1="imagenes/sucursales/cocha.jpg" 
      lugar2="TARIJA" titulo2="TARIJA" texto2="Dirección: Gobierno Autónomo Municipal de Santa Cruz de la Sierra Plaza 24 de Septiembre (acera Norte), calle 24 de Septiembre, esquina calle Bolívar #101. Horario de atención al público: De Lunes a Viernes de 8:00 a 16:00" img2="imagenes/sucursales/tarija.jpg"  />
      <div className='cajaVacia'>
      </div>
      <Formulario/>
      <Footer/>
    </div>
  )
}

export default Sucursales