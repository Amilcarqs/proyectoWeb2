import React from 'react'
import {
    Card,
    CardImg,
    CardImgOverlay,
    CardTitle,
    CardText
  } from 'reactstrap';
  import '../App.css';

function SuperposicionImagen(props) {
  return (
    <div>
        <Card inverse>
            <CardImg className="titan-one-regular"
            alt= {props.tituloImagen}
            src= {props.imagen}
            
            style={{
                height: 270
            }}
            width="100%"
            />
            <CardImgOverlay className='textoSuper'>
            <CardTitle className='cardTitle' tag="h5" >
                <div className="titan-one-regular">
                    
                {props.titulo}
                </div>
                
            </CardTitle>
            <CardText className='cardSub'>
                {props.texto}
            </CardText>
            <CardText>
                <small className="text-muted">
                    {props.pequeñoTexto}
                </small>
            </CardText>
            </CardImgOverlay>
        </Card>
    </div>
  )
}

export default SuperposicionImagen