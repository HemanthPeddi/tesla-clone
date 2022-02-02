import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import Section from './Section';

const Container = styled.div`
height: 100vh;
`
function Home() {
  return( 
      <Container>
      
        <Section
         title="Model S" 
         description="Order online for Touchless Delivery."
         backgroundImg="model-s.jpg"
         leftBtnText="Custom Order"
         rightBtnText="Existing Inventory"
         ></Section>
        <Section
         title="Model Y" 
         description="Order online for Touchless Delivery."
         backgroundImg="model-y.jpg"
         leftBtnText="Custom Order"
         rightBtnText="Existing Inventory"
         />
         <Section
         title="Model 3" 
         description="Order online for Touchless Delivery."
         backgroundImg="model-3.jpg"
         leftBtnText="Custom Order"
         rightBtnText="Existing Inventory"
         />
         <Section
         title="Model X" 
         description="Order online for Touchless Delivery."
         backgroundImg="model-x.jpg"
         leftBtnText="Custom Order"
         rightBtnText="Existing Inventory"
         />
          <Section
         title="Lowest Cost Solar Panels in  America" 
         description="Money-back guarantee"
         backgroundImg="solar-panel.jpg"
         leftBtnText="Order now"
         rightBtnText="Learn more"
         />
          <Section
         title="Solar for New Roofs" 
         description="Solar Roof Costs Less Than a New Roof Plus Solar Panels"
         backgroundImg="solar-roof.jpg"
         leftBtnText="Order now"
         rightBtnText="Learn more"
         />
         <Section
         title="Accessories" 
         description=""
         backgroundImg="accessories.jpg"
         leftBtnText="Shop now"
         rightBtnText=""
         />
         
         
        
        
      </Container>
  );
}

export default Home;

