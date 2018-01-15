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

const AppAccordion = () => {

  const tabs = {
    color: 'white',
  }
  const line = {
    borderStyle: 'dotted',
    borderImageSlice: '3% 3%',
    borderImageRepeat: 'round',
  }
  const ContainerStyle = {
    width: 'auto',
    animation: 'fadein .5s ease-in',
  }
  const accordionBody = {
    // width: '100vw',
    // animation: 'fadein .5s ease-in',
  }

  return (
    <div style={ContainerStyle}> 
      <Accordion 
        accordion={false}
        style={accordionBody}>
        <AccordionItem>
          <AccordionItemTitle>
            <hr style={tabs}/>
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
            <hr style={line}/>

            MORE
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