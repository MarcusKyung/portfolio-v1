import React from 'react';
import styled from 'styled-components';

const HeroContainer = styled.div`
  background-color: #f8f9fa;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const EnlargeOnHover = styled.h2`
  font-size: 2em;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.2);
  }
`;

export default function Hero() {
  return (
    <React.Fragment>
      <HeroContainer id="home">
        <span>
          <h1 style={{ fontSize: "2em", textDecoration: "underline" }}>Marcus Kyung</h1>
          <EnlargeOnHover>Front End Developer.</EnlargeOnHover>
          <EnlargeOnHover>Project Manager.</EnlargeOnHover>
          <EnlargeOnHover>Developer.</EnlargeOnHover>
        </span>
      </HeroContainer>
    </React.Fragment>
  );
}
