import React from 'react';
import styled from 'styled-components';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const HeroContainer = styled.div`
  position: relative;
  background-color: #f8f9fa;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-family: 'Open Sans';

  h1 {
    text-decoration: underline;
    font-size: 3em;
    margin-bottom: 20px;
  }

  h2 {
    margin-bottom: 40px;
  }

  .logos-container {
    position: absolute;
    bottom: 10rem;
    left: 0;
    right: 0;
    text-align: center;
  }
`;

export default function Hero() {
  return (
    <React.Fragment>
      <HeroContainer id="home">
        <div>
          <h1 className="typing-animation">Marcus Kyung: Front End Developer</h1>
          <h2>Seasoned project manager turned front end developer</h2>
        </div>
        <div className="logos-container">
          <Row>
            <Col>
              <p>Logo 1</p>
            </Col>
            <Col>
              <p>Logo 2</p>
            </Col>
            <Col>
              <p>Logo 3</p>
            </Col>
          </Row>
        </div>
      </HeroContainer>
    </React.Fragment>
  );
}
