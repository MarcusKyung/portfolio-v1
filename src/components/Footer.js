import React from 'react';
import styled from 'styled-components';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const StyledFooter = styled.div`
  position: relative;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: white;
  color: black;
  text-align: center;
  margin-top: 2em;
`;

const ButtonLink = styled.a`
  display: inline-block;
  padding: 0.5em 1em;
  margin: 0.5em;
  background-color: #007bff;
  color: #fff;
  text-decoration: none;
  border-radius: 5px;
`;

export default function Footer() {
  return (
    <StyledFooter id="footer">
      <Container>
        <Row>
          <Col>
            <ButtonLink href="/">Resume</ButtonLink>
          </Col>
          <Col>
            <ButtonLink href="https://www.linkedin.com/">
              <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
            </ButtonLink>
          </Col>
          <Col>
            <ButtonLink href="https://github.com/">
              <FontAwesomeIcon icon={faGithub} /> GitHub
            </ButtonLink>
          </Col>
        </Row>
      </Container>
    </StyledFooter>
  );
}
