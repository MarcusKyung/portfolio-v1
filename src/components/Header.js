import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import ButtonLink from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Header() {
  return (
    <React.Fragment>
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home" style={{ fontSize: "30px"}}>&lt; marcuskyung &gt;</Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link href="#projects">&lt; Projects &gt;</Nav.Link>
            <Nav.Link href="#experience">&lt; Experience &gt;</Nav.Link>
            <Nav.Link href="#contact">&lt; Contact &gt;</Nav.Link>
            <ButtonLink href="https://www.linkedin.com/in/marcuskyung/"><FontAwesomeIcon icon={faLinkedin} /> Connect On LinkedIn</ButtonLink>
          </Nav>
        </Container>
      </Navbar>
      </React.Fragment>
  );
}

export default Header;