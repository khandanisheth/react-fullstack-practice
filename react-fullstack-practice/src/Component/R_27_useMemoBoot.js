import React, { useState, useMemo } from "react";
import { Container, Row, Col, Card, Form, InputGroup } from "react-bootstrap";

function SlowComponent({ number }) {
    const slowSquare = useMemo(() => {
        console.log("Calculating square...");
        let i = 0;
        while (i < 1000000000) i++; // Simulate heavy loop
        return number * number;
    }, [number]);

    return <p>📐 Square of {number} is <strong>{slowSquare}</strong></p>;
}

export default function R_27_useMemoBoot() {
    const [num, setNum] = useState(1);
    const [text, setText] = useState("");

    return (
        <Container className="mt-5">
            <Row className="justify-content-center">
                <Col md={8}>
                    <Card className="shadow-sm p-4">
                        <Card.Title>
                            <h3 className="text-center">🔁 useMemo Performance Demo</h3>
                        </Card.Title>
                        <Card.Body>
                            <SlowComponent number={num} />
                            <Form.Group className="mb-3">
                                <Form.Label>Enter Number</Form.Label>
                                <Form.Control
                                    type="number"
                                    value={num}
                                    onChange={(e) => setNum(Number(e.target.value))}
                                />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Type Something (Text Input)</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={text}
                                    placeholder="This won't trigger square calculation"
                                    onChange={(e) => setText(e.target.value)}
                                />
                            </Form.Group>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}
