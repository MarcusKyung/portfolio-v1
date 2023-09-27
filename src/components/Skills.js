import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';

const StyledSkills = styled.h3`
  outline: 2px solid #0D6EFD;
  border-radius: 5px;

  &:hover {
    background-color: #fcfcfc;
    transform: scale(1.02);
  }
`;

export default function Skills() {
  return (
<React.Fragment>
        <Container>
          <Row>
            <h1 style={{ color: '#0D6EFD', textAlign: 'center', marginTop: '30px', marginBottom: '30px', textDecoration: 'underline' }}>&lt; Skills &gt;</h1>
          </Row>
          <Row>
          <Col xs={6} style={{ textAlign: "center"}} >
              <StyledSkills>HTML</StyledSkills>
              <StyledSkills>CSS</StyledSkills>
              <StyledSkills>Javascript</StyledSkills>
              <StyledSkills>Bootstrap</StyledSkills>
            </Col>
            <Col xs={6} style={{ textAlign: "center"}} >
              <StyledSkills>C#/.NET</StyledSkills>
              <StyledSkills>MySQL</StyledSkills>
              <StyledSkills>React.js</StyledSkills>
              <StyledSkills>Git/GitHub</StyledSkills>
            </Col>
          </Row>
        </Container>
    </React.Fragment>
  )
}
