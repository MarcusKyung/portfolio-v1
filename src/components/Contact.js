import React from 'react';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Contact() {
  return (
    <Container style={{ marginTop: "30px"}} id="contact">
      <Row>
      <Col />
      <Col xs={12}>
        <div className="container" style={{ borderRadius: "5px", backgroundColor: "#f8f9fa", padding: "20px" }}>
          <form action="action_page.php">

            <label htmlFor="fname">First Name</label>
            <input type="text" id="fname" name="firstname" placeholder="Your name.." style={{ width: "100%", padding: "12px", border: "1px solid #ccc", borderRadius: "4px", boxSizing: "border-box", marginTop: "6px", marginBottom: "16px" }} />

            <label htmlFor="lname">Last Name</label>
            <input type="text" id="lname" name="lastname" placeholder="Your last name.." style={{ width: "100%", padding: "12px", border: "1px solid #ccc", borderRadius: "4px", boxSizing: "border-box", marginTop: "6px", marginBottom: "16px" }} />

            <label htmlFor="subject">Subject</label>
            <textarea id="subject" name="subject" placeholder="Write something.." style={{ width: "100%", padding: "12px", border: "1px solid #ccc", borderRadius: "4px", boxSizing: "border-box", marginTop: "6px", marginBottom: "16px", resize: "vertical" }}></textarea>

            <input type="submit" value="Submit" style={{ backgroundColor: "#2d6efd", color: "white", padding: "12px 20px", border: "none", borderRadius: "4px", cursor: "pointer" }} />

          </form>
        </div>
      </Col>
      <Col />
      </Row>
    </Container>
  );
}
