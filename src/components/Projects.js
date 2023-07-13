import React from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import discordbot from '../img/discordbot.png';
import F1API from '../img/F1API.png';
import TravelPlanner from '../img/TravelPlanner.png';
import twitterbot from '../img/twitterbot.png';
import recipe from '../img/recipe.png';
import styled from 'styled-components';


const BaloonOnHover = styled(Card)`
  &:hover {
    transform: scale(1.02);
  }
`;




export default function Projects() {
  return (
    <Container id="projects">
      <Row>
        <h1 style={{ textAlign: 'center', marginTop: '15px', marginBottom: '15px', textDecoration: 'underline' }}>
          Projects:
        </h1>
      </Row>
      <Row className="justify-content-center">
        <BaloonOnHover style={{ width: '25rem', marginRight: '5px', marginLeft: '5px' }}>
          <Card.Img variant="top" src={twitterbot} style={{ marginTop: "10px" }}/>
          <Card.Body>
            <Card.Title>LOTR Twitterbot Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </Card.Text>
            <div className="d-grid gap-2">
              <Button>View Project</Button>
              <Button>View Source Code</Button>
            </div>
          </Card.Body>
        </BaloonOnHover>
        <BaloonOnHover style={{ width: '25rem', marginRight: "5px", marginLeft: "5px" }}>
          <Card.Img variant="top" src={F1API} style={{ marginTop: "10px" }}/>
          <Card.Body>
            <Card.Title>Formula 1 API Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </Card.Text>
            <div className="d-grid gap-2">
              <Button>View Project</Button>
              <Button>View Source Code</Button>
            </div>
          </Card.Body>
        </BaloonOnHover>
        <BaloonOnHover style={{ width: '25rem', marginRight: "5px", marginLeft: "5px" }}>
          <Card.Img variant="top" src={recipe} style={{ marginTop: "10px" }}/>
          <Card.Body>
            <Card.Title>| RecipeBox |</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </Card.Text>
            <div className="d-grid gap-2">
              <Button>View Project</Button>
              <Button>View Source Code</Button>
            </div>
          </Card.Body>
        </BaloonOnHover>
      </Row>
      <br />
      <Row className="justify-content-center">
        <BaloonOnHover style={{ width: '25rem', marginRight: "5px", marginLeft: "5px" }}>
          <Card.Img variant="top" src={discordbot} style={{ marginTop: "10px" }}/>
          <Card.Body>
            <Card.Title>DiscordBot</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </Card.Text>
            <div className="d-grid gap-2">
              <Button>View Project</Button>
              <Button>View Source Code</Button>
            </div>
          </Card.Body>
        </BaloonOnHover>
        <BaloonOnHover style={{ width: '25rem', marginRight: "5px", marginLeft: "5px" }}>
          <Card.Img variant="top" src={TravelPlanner} style={{ marginTop: "10px" }}/>
          <Card.Body>
            <Card.Title>Travel Planner</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </Card.Text>
            <div className="d-grid gap-2">
              <Button>View Project</Button>
              <Button>View Source Code</Button>
            </div>
          </Card.Body>
        </BaloonOnHover>
        <BaloonOnHover style={{ width: '25rem', marginRight: "5px", marginLeft: "5px" }}>
          <Card.Img variant="top" src={TravelPlanner} style={{ marginTop: "10px" }}/>
          <Card.Body>
            <Card.Title>Travel Planner</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </Card.Text>
            <div className="d-grid gap-2">
              <Button>View Project</Button>
              <Button>View Source Code</Button>
            </div>
          </Card.Body>
        </BaloonOnHover>
      </Row>
    </Container>
  );
}
