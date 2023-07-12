import React from 'react'
import Card from 'react-bootstrap/Card'
import discordbot from '../img/discordbot.png'
import F1API from '../img/F1API.png'
import TravelPlanner from '../img/TravelPlanner.png'
import twitterbot from '../img/twitterbot.png'


export default function Projects() {
  return (
    <React.Fragment>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={twitterbot}  />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={F1API} />
    <Card.Body>
      <Card.Title>Card Title</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
      </Card.Text>
    </Card.Body>
  </Card>
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={twitterbot} />
    <Card.Body>
      <Card.Title>Card Title</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
      </Card.Text>
    </Card.Body>
  </Card>
  <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={discordbot} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={TravelPlanner} />
    <Card.Body>
      <Card.Title>Card Title</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
      </Card.Text>
    </Card.Body>
  </Card>
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={TravelPlanner} />
    <Card.Body>
      <Card.Title>Card Title</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
      </Card.Text>
    </Card.Body>
  </Card>
  </React.Fragment>
  );
}
