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

const AppAccordion = () => {

  return (
    <div>
      <Accordion 
        accordion={false}>
        <AccordionItem>
          <AccordionItemTitle>
            <h3 className='titleStyle'>
              <hr className='lineStyle'/>
              <div className='tabStyle'/>
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
            <h3 className='titleStyle'> 
              <hr className='lineStyle'/>
              <div className='tabStyle'/>
              MORE
              <div className="accordion__arrow" role="presentation" />
            </h3>
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