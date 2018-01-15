import React from 'react';

const About = () => {

  const Container = {
    width: 'auto',
    backgroundColor: '#000000',
  }
  const BodyTextStyle = {
    maxWidth: '40em',
    margin: '2em',

  }
  
  return (
    <div style={Container}>
      <div className='AboutName'>Camen Hodges</div>
      <div style={BodyTextStyle}>If there is one thing kids love more than eating pizza, it’s being able to make it themselves using all their favorite toppings. Creating a “make it yourself” pizza party is a great way to customize the meal while involving friends and family in a fun activity. Best of all, this crust recipe, which uses a surprise ingredient, is simple enough to make at home without making a mess of the kitchen. The secret to this simple crust is the addition of potatoes. Idahoan brand flavored Mashed Potatoes were recently named the best-tasting instant mashed potato compared to major national competitors by the American Culinary ChefsBest.™ Incorporating these convenient, 100 percent authentic Idaho potatoes in the crust adds moisture and rich flavor to this homemade version of one of America’s favorite foods. The following recipe for Fresh Tomato and Zucchini Pizza uses fresh summer produce; however, when making pizza at home, each person can substitute his or her favorite toppings. With this versatile recipe, you can enjoy a delicious homemade meal that enables everyone to eat the pizza that they love.</div>
    </div>
  )

}

export default About;