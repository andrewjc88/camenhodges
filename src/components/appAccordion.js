import React from 'react';
import About from './about';
import ProjectsDetails from './projectDetails';
import Projects from './projectsList';
import DownArrow from '../img/downArrow.png';

import {
  Accordion,
  AccordionItem,
  AccordionItemTitle,
  AccordionItemBody,
} from 'react-accessible-accordion';

import '../styles/accordion.css';

const AppAccordion = () => (
  <Accordion 
    ClassName='accordion'
    onChange={console.log("changed!")}>
    <AccordionItem>
      <AccordionItemTitle>
        <h3>About</h3>
        <img src={DownArrow} alt='Down arrow'/>
      </AccordionItemTitle>
      <AccordionItemBody>
        <About /> 
      </AccordionItemBody>
    </AccordionItem>
    <AccordionItem>
      <AccordionItemTitle>
        <h3>"Project Name"</h3>
      </AccordionItemTitle>
      <AccordionItemBody>
        <ProjectsDetails />
      </AccordionItemBody>
    </AccordionItem>
    <AccordionItem>
      <AccordionItemTitle>
        <h3>"Project Details"</h3>
      </AccordionItemTitle>
      <AccordionItemBody>
        <Projects />
      </AccordionItemBody>
    </AccordionItem>
  </Accordion>
);

export default AppAccordion;