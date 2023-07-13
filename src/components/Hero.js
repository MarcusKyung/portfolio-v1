import React from 'react';
import styled from 'styled-components';

const HeroContainer = styled.div`
  background-color: #f8f9fa;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-family:'Open Sans';
`;

const EnlargeOnHover = styled.h2`
  font-size: 2em;
  transition: transform 0.3s;
  

  &:hover {
    transform: scale(1.2);
    color: #0D6EFD; 
  }
`;

export default function Hero() {
  return (
    <React.Fragment>
      <HeroContainer id="home">
        <span>
          <h1 className="typing-animation"style={{ textDecoration: "underline", fontSize: "3em" }}>&lt; marcuskyung &gt;</h1>
          <EnlargeOnHover>Front End Developer.</EnlargeOnHover>
          <EnlargeOnHover>Project Manager.</EnlargeOnHover>
          <EnlargeOnHover>Creative.</EnlargeOnHover>
        </span>
      </HeroContainer>
    </React.Fragment>
  );
}
