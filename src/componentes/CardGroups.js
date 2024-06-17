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
  import '../App.css'

function CardGroups(props) {
  return (
    <CardGroup className='cardGroup'>
        <Card >
            <CardImg className="imagen-card-groups"
            src={props.img1}
            top
            width="100%"
            />
            <CardBody>
            <CardTitle tag="h5">
                {props.titulo1}
            </CardTitle>
            <CardSubtitle
                className="mb-2 text-muted"
                tag="h6"
            >
                $ {props.precio1}
            </CardSubtitle>
            <Button>
                Comprar
            </Button>
            </CardBody>
        </Card>
        <Card>
            <CardImg className="imagen-card-groups"
            src={props.img2}
            top
            width="100%"
            />
            <CardBody>
            <CardTitle tag="h5">
                {props.titulo2}
            </CardTitle>
            <CardSubtitle
                className="mb-2 text-muted"
                tag="h6"
            >
                $ {props.precio2}
            </CardSubtitle>
            <Button>
                Comprar
            </Button>
            </CardBody>
        </Card>
        <Card>
            <CardImg className="imagen-card-groups"
            src={props.img3}
            top
            width="100%"
            />
            <CardBody>
            <CardTitle tag="h5">
            {props.titulo3}
            </CardTitle>
            <CardSubtitle
                className="mb-2 text-muted"
                tag="h6"
            >
                $ {props.precio3}
            </CardSubtitle>
            <Button>
                Comprar
            </Button>
            </CardBody>
        </Card>
        <Card>
            <CardImg className="imagen-card-groups"
            src={props.img4}
            top
            width="100%"
            />
            <CardBody>
            <CardTitle tag="h5">
            {props.titulo4}
            </CardTitle>
            <CardSubtitle
                className="mb-2 text-muted"
                tag="h6"
            >
                $ {props.precio4}
            </CardSubtitle>
            <Button>
                Comprar
            </Button>
            </CardBody>
        </Card>
        </CardGroup>
  )
}

export default CardGroups