import React from 'react';
import About from './about';
import ProjectsDetails from './projectDetails';
import VideoPlayer from './videoPlayer';
import './accordion.css'

import '../../node_modules/react-accessible-accordion/dist/react-accessible-accordion.css';

import {
  Accordion,
  AccordionItem,
  AccordionItemTitle,
  AccordionItemBody,
} from 'react-accessible-accordion';

// <div className='tabStyle'/>
// <div className='tabStyle'/>

const AppAccordion = () => {

  return (
    <div>
      <Accordion
        accordion={false}>
        <AccordionItem>
          <AccordionItemTitle>
            <h3 className='titleStyle'>About</h3>
            <div className="accordion__arrow"
              role="presentation" />
          </AccordionItemTitle>
          <AccordionItemBody>
            <About />
          </AccordionItemBody>
        </AccordionItem>
        <AccordionItem>
          <VideoPlayer />
          <AccordionItemTitle>
            <h3 className='titleStyle'>Details</h3>
            <div className="accordion__arrow" role="presentation" />
          </AccordionItemTitle>
          <AccordionItemBody>
            <ProjectsDetails />
          </AccordionItemBody>
        </AccordionItem>
      </Accordion>
    </div>
  )
};

export default AppAccordion;
