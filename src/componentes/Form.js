import React from 'react'
import {
    Form, FormGroup, Label, Input, Button
} from 'reactstrap';
function Formulario() {
  return (
    <div className='formulario'>
        <>
        <p>
           ENVIANOS TU OPINION
        </p>
        <Form children>
            <FormGroup floating>
            <Input
                id="exampleEmail"
                name="email"
                placeholder="Email"
                type="email"
            />
            <Label for="exampleEmail">
                Email
            </Label>
            </FormGroup>
            {' '}
            <FormGroup floating row>
            <Input
                id="examplePassword"
                name="password"
                placeholder="Password"
                type="textArea"
            />
            <Label for="examplePassword" md>
                Escribe aqui tu opinion
            </Label>
            </FormGroup>
            {' '}
            <Button>
                Enviar
            </Button>
        </Form>
        </>
    </div>
  )
}

export default Formulario