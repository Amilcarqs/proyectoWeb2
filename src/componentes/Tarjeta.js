import React from 'react'
import {
    Card,
    CardImg,
    CardGroup,
    CardTitle,
    CardText,
    CardSubtitle,
    Button,CardBody
  } from 'reactstrap';
  import '../App.css';
function Tarjeta(props) {
  return (
    <>
  <Card className="my-2">
    <CardImg className='img-tarjetas'
      alt="Card image cap"
      src={props.img1}
      style={{
        height: 180
      }}
      top
      width="100%"
      
    />
    <CardBody>
      <CardTitle tag="h5">
        {props.titulo1}
      </CardTitle>
      <CardText>
        <p>
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        </p>
      </CardText>
      <CardText>
      <Button>COMPRAR</Button>
      </CardText>
    </CardBody>
  </Card>
  <Card className="my-2">
    <CardBody>
      <CardTitle tag="h5">
        {props.titulo2}
      </CardTitle>
      <CardText>
      <p>
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        </p>
      </CardText>
      <CardText>
        <Button>COMPRAR</Button>
      </CardText>
    </CardBody>
    <CardImg className='img-tarjetas'
      alt="Card image cap"
      bottom
      src={props.img2}
      style={{
        height: 180
      }}
      width="100%"
    />
  </Card>
</>
  )
}

export default Tarjeta