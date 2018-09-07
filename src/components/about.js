import React from 'react';

const About = () => {

  const Container = {
    width: '80%',
    maxWidth: '40em',
    backgroundColor: '#000000',
    // marginTop: '-4.2em',
    textAlign: 'center',
    margin: ' auto',
    marginTop: '1em',
    padding: '2em',
    // padding: '4em'
    // zIndex:'-4',
    // transition:' slide-down eas-in-eas-out',

  }
  const titleStyle = {

    // padding: '0em 0em 0em 0em',
    // marginLeft: '1em',

  }
  const BodyTextStyle = {
    // maxWidth: '50em',
    // margin: 'auto',
    // padding: '2em'
  }

  return (
    <div style={Container}>
      <h1 style={titleStyle}>Camen Hodges</h1>
      <div style={BodyTextStyle}>
       Freelance Director, Producer and Cinematographer. From directing 
award winning theater to convincing the Reno Bomb Squad to blow up a car for him, Camen is always 100% committed to getting the very best work done. And he's just a phone call away
      </div>

    </div>
  )

}

export default About;
