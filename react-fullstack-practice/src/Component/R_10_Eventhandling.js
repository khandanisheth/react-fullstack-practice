import React, { Component } from "react";
import { Button, Container, Row, Col, Form } from "react-bootstrap";

const R_10_Eventhandling = () => {
  const handleEvent = () => {
    alert("Button Events Successfully Triggered");
  };

  const handleClick = () => {
    alert("Button clicked!");
  };

  const handleMouseEnter = () => {
    console.log("Mouse entered!");
  };

  const PeraMeterclick = (a, b) => {
    window.confirm("gjfgj");
    console.log(a + b);
  };

  return (
    <Container className="py-5">
      <h2 className="mb-4">Event Handling in Functional Component</h2>

      <Row className="mb-4">
        <Col>
          <Button variant="primary" onClick={handleEvent} className="me-2">onClick</Button>
          <Button variant="secondary" onDoubleClick={handleEvent} className="me-2">onDoubleClick</Button>
          <Button variant="success" onMouseDown={handleEvent} className="me-2">onMouseDown</Button>
          <Button variant="warning" onMouseEnter={handleEvent} className="me-2">onMouseEnter</Button>
          <Button variant="danger" onMouseOver={handleEvent} className="me-2">onMouseOver</Button>
          <Button variant="info" onMouseMove={handleEvent} className="me-2">onMouseMove</Button>
          <Button variant="dark" onMouseLeave={handleEvent} className="me-2">onMouseLeave</Button>
          <Button variant="light" onWheel={handleEvent} className="me-2">onWheel</Button>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col>
          <Button variant="primary" onClick={handleClick} onMouseEnter={handleMouseEnter}>
            Hover or Click Me
          </Button>
        </Col>
      </Row>

      <h2 className="mb-4">Keyboard Events</h2>
      <Row className="mb-4">
        <Col md={4}>
          <Form.Control type="text" placeholder="onKeyDown" onKeyDown={handleEvent} className="mb-3" />
          <Form.Control type="text" placeholder="onKeyUp" onKeyUp={handleEvent} className="mb-3" />
          <Form.Control type="text" placeholder="onKeyPress" onKeyPress={handleEvent} className="mb-3" />
        </Col>
      </Row>

      <h2 className="mb-4">Click with Parameter</h2>
      <Button variant="outline-primary" onClick={() => PeraMeterclick(10, 20)}>
        Click With Parameter
      </Button>

      <hr className="my-5" />

      <EventExample />
    </Container>
  );
};

class EventExample extends Component {
  handleEvent = () => {
    alert("Class Component: Event Triggered");
  };

  handleClick = () => {
    alert("Class Component: Button clicked!");
  };

  handleMouseEnter = () => {
    console.log("Class Component: Mouse entered!");
  };

  render() {
    return (
      <div>
        <h2 className="mt-5 mb-4">Event Handling in Class Component</h2>

        <Row className="mb-4">
          <Col>
            <Button variant="primary" onClick={this.handleEvent} className="me-2">onClick</Button>
            <Button variant="secondary" onDoubleClick={this.handleEvent} className="me-2">onDoubleClick</Button>
            <Button variant="success" onMouseDown={this.handleEvent} className="me-2">onMouseDown</Button>
            <Button variant="warning" onMouseEnter={this.handleEvent} className="me-2">onMouseEnter</Button>
            <Button variant="danger" onMouseOver={this.handleEvent} className="me-2">onMouseOver</Button>
            <Button variant="info" onMouseMove={this.handleEvent} className="me-2">onMouseMove</Button>
            <Button variant="dark" onMouseLeave={this.handleEvent} className="me-2">onMouseLeave</Button>
            <Button variant="light" onWheel={this.handleEvent} className="me-2">onWheel</Button>
          </Col>
        </Row>

        <Row className="mb-4">
          <Col>
            <Button variant="outline-success" onClick={this.handleClick} onMouseEnter={this.handleMouseEnter}>
              Hover or Click Me
            </Button>
          </Col>
        </Row>

        <h2 className="mb-4">Keyboard Events</h2>
        <Row className="mb-4">
          <Col md={4}>
            <Form.Control type="text" placeholder="onKeyDown" onKeyDown={this.handleEvent} className="mb-3" />
            <Form.Control type="text" placeholder="onKeyUp" onKeyUp={this.handleEvent} className="mb-3" />
            <Form.Control type="text" placeholder="onKeyPress" onKeyPress={this.handleEvent} className="mb-3" />
          </Col>
        </Row>
      </div>
    );
  }
}

export default R_10_Eventhandling;
