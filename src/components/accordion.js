import React from 'react';
import About from './about';
import ProjectsDetails from './projectDetails';
import VideoPlayer from './videoPlayer';
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
    accordion={false}
    className='accordion'>
    <AccordionItem>
      <AccordionItemTitle>
        <hr className='line'/>
        <h3 className="u-position-relative">
          ABOUT
        <div className="accordion__arrow" role="presentation" />
        </h3>
      </AccordionItemTitle>
      <AccordionItemBody>
        <About /> 
      </AccordionItemBody>
    </AccordionItem>
    <AccordionItem>
      <AccordionItemTitle>
        <VideoPlayer />
        <hr className='line'/>

        MORE
      </AccordionItemTitle>
      <AccordionItemBody>
        <ProjectsDetails />
      </AccordionItemBody>
    </AccordionItem>
  </Accordion>
);

export default AppAccordion;