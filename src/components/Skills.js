import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';


export default function Skills() {
  return (
<React.Fragment>
        <Container>
          <Row>
            <h1 style={{ color: '#0D6EFD', textAlign: 'center', marginTop: '30px', marginBottom: '30px', textDecoration: 'underline' }}>&lt; Skills &gt;</h1>
          </Row>
          <Row>
          <Col xs={6} style={{ backgroundColor: '#0D6EFD', textAlign: "center"}} >
              <p>HTML</p>
              <p>HTML</p>
              <p>HTML</p>
              <p>HTML</p>
              <p>HTML</p>
            </Col>
            <Col xs={6} style={{ backgroundColor: '#0D6EFD', textAlign: "center"}} >
              <p>HTML</p>
              <p>HTML</p>
              <p>HTML</p>
              <p>HTML</p>
              <p>HTML</p>
            </Col>
          </Row>
        </Container>
    </React.Fragment>
  )
}
