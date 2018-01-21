import React from 'react';

const About = () => {

  const Container = {
    width: '80%',
    maxWidth: '40em',
    backgroundColor: '#000000',
    // marginTop: '-4.2em',
    textAlign: 'left',
    margin: ' auto',
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
        If there is one thing kids love more than eating pizza, it’s being able to make it themselves using all their favorite toppings. Creating a “make it yourself” pizza party is a great way to customize the meal while involving friends and family in a fun activity. Best of all, this crust recipe, which uses a surprise ingredient, is simple enough to make at home without making a mess of the kitchen. The secret to this simple crust is the addition of potatoes.
      </div>

    </div>
  )

}

export default About;
