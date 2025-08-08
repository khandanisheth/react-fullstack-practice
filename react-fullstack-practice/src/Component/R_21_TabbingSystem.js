
// src/Component/TabsComponent.jsx
import React, { useState } from "react";
import { Container, ButtonGroup, Button, Card } from "react-bootstrap";
import { tabs } from "../data/tab.js";
export default function R_21_TabbingSystem() {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <Container className="mt-5">
            <h2 className="mb-4 text-center">📚 About Law Prep Tutorial</h2>

            <ButtonGroup className="mb-3 d-flex justify-content-center">
                {tabs.map((tab, index) => (
                    <Button
                        key={index}
                        variant={activeIndex === index ? "primary" : "outline-primary"}
                        onClick={() => setActiveIndex(index)}
                        className="mx-2"
                    >
                        {tab.title}
                    </Button>
                ))}
            </ButtonGroup>

            <Card className="shadow p-4 bg-light">
                <h4 className="mb-3 text-primary">{tabs[activeIndex].title}</h4>
                <p className="text-muted">{tabs[activeIndex].description}</p>
            </Card>
        </Container>
    );
}
