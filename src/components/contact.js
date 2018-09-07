import React, { Component } from 'react';
import IconInstagram from 'react-feather/dist/icons/instagram';
import IconEmail from 'react-feather/dist/icons/mail';
import IconPhone from 'react-feather/dist/icons/phone';

class Contact extends Component {
  render() {
    return (
      <div className="contact-icon-wrapper" >
        <a 
          href="mailto:camen.hodges@gmail.com"
          className="contact-icon">
          <IconEmail />
        </a>
        <a 
          href="https://www.instagram.com/camenhodges"
          className="contact-icon">
          <IconInstagram />
        </a>
        <a 
          href="tel:530-559-8270"
          className="contact-icon">
          <IconPhone />
        </a>
      </div>
    )
  }
}

export default Contact;
