import React from 'react';

const About = () => {

  const Container = {
    width: '100%',
    backgroundColor: '#000000',
    margin: '-5em 0 0 0',
    // padding: '4em'
    // zIndex:'-4',
    // transition:' slide-down eas-in-eas-out',

  }
  const titleStyle = {
    padding: '2em 0em 0em 0em'

  }
  const BodyTextStyle = {
    maxWidth: '50em',
    margin: 'auto',
    padding: '2em'
  }
  
  return (
    <div style={Container}>
      <h1 style={titleStyle} >Camen Hodges</h1>
      <div style={BodyTextStyle}>If there is one thing kids love more than eating pizza, it’s being able to make it themselves using all their favorite toppings. Creating a “make it yourself” pizza party is a great way to customize the meal while involving friends and family in a fun activity. Best of all, this crust recipe, which uses a surprise ingredient, is simple enough to make at home without making a mess of the kitchen. The secret to this simple crust is the addition of potatoes. Idahoan brand flavored Mashed Potatoes were recently named the best-tasting instant mashed potato compared to major national competitors by the American Culinary ChefsBest.™ Incorporating these convenient, 100 percent authentic Idaho potatoes in the crust adds moisture and rich flavor to this homemade version of one of America’s favorite foods. The following recipe for Fresh Tomato and Zucchini Pizza uses fresh summer produce; however, when making pizza at home, each person can substitute his or her favorite toppings. With this versatile recipe, you can enjoy a delicious homemade meal that enables everyone to eat the pizza that they love.</div>
    </div>
  )

}

export default About;