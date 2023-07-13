import React from 'react'
import styled from 'styled-components';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

const StyledFooter = styled.div`
  position: relative;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: f8f9fa;
  color: black;
  text-align: center;
  margin-top: 1em;
`;

export default function Footer() {
  return (
    <StyledFooter>
      <Container>
        <Row>
          <Col>
            <h1>Footer</h1>
          </Col>
          <Col>
            <h1>Footer</h1>
          </Col>
          <Col>
            <h1>Footer</h1>
          </Col>
        </Row>
      </Container>
    </StyledFooter>
  )
}
