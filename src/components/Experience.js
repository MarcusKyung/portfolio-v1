import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styled from 'styled-components';

const ExperienceContainer = styled.div`
  background-color: #f8f9fa;
`;

export default function Experience() {
  return (
    <React.Fragment>
      <ExperienceContainer id="experience">
        <Container>
          <Row>
            <h1 style={{ color: '#0D6EFD', textAlign: 'center', marginTop: '30px', marginBottom: '30px', textDecoration: 'underline' }}>&lt; Work Experience &gt;</h1>
          </Row>
          <Row>
            <Col />
            <Col xs={9}>
              <h3>Red Door Interactive, San Diego CA - <em>Project Manager</em></h3>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </Col>
            <Col />
          </Row>
          <Row>
          <Col />
            <Col xs={9}>
              <h3>MCRD Museum Foundation - <em>Director of Marketing</em></h3>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </Col>
            <Col />
          </Row>
          <Row>
          <Col />
            <Col xs={9}>
              <h3>Radd Interactive, Rancho Bernardo CA - <em>SEO Analyst</em></h3>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </Col>
            <Col />
          </Row>
          <Row>
            <h1 style={{ color: '#0D6EFD', textAlign: 'center', marginTop: '10px', marginBottom: '30px', textDecoration: 'underline' }}>&lt; Education &gt;</h1>
          </Row>
          <Row>
          <Col />
            <Col xs={9}>
              <h3>Epicodus - <em>C#/React Track</em></h3>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </Col>
            <Col />
          </Row>
          <Row style={{ marginBottom: '30px'}}>
          <Col />
            <Col xs={9}>
              <h3>University of San Diego - <em>BA Marketing, BA Real Estate</em></h3>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </Col>
            <Col />
          </Row>
        </Container>
      </ExperienceContainer>
    </React.Fragment>
  )
}
