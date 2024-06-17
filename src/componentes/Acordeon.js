import React, { useState } from 'react';
import '../App.css'
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
  UncontrolledAccordion,

} from 'reactstrap';

function Acordeon(props) {
  return (
    <div className='acordeon'>
        <UncontrolledAccordion
        defaultOpen={[
            '1',
            '2'
        ]}
        stayOpen
        >
        <AccordionItem className='acordeon'>
            <AccordionHeader targetId="1">
            {props.lugar1}
            </AccordionHeader>
            <AccordionBody accordionId="1">
            <strong>
                {props.titulo1}
            </strong>
                <div>
                    {props.texto1}
                </div>
                <div>
                <img src={props.img1}></img>
                </div>

            </AccordionBody>
        </AccordionItem>
        <AccordionItem className='acordeon'>
            <AccordionHeader targetId="2">
            {props.lugar2}
            </AccordionHeader>
            <AccordionBody accordionId="2">
            <strong>
                {props.titulo2}
            </strong>
                <div>
                    {props.texto2}
                </div>
                <div>
                    <img src={props.img2}></img>
                    
                </div>

            </AccordionBody>
        </AccordionItem>
        
        </UncontrolledAccordion>
    </div>
  )
}

export default Acordeon