import React, { useReducer } from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';

// Step 1: Reducer Function
function reducer(state, action) {
    switch (action.type) {
        case "INCREMENT":
            return { count: state.count + 1 };
        case "DECREMENT":
            return { count: state.count - 1 };
        case "RESET":
            return { count: 0 };
        default:
            return state;
    }
}

// Step 2: Component
export default function R_26_useReducer() {
    const initialState = { count: 0 };
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <Container className="mt-5">
            <Row className="justify-content-center">
                <Col md={6}>
                    <Card className="text-center shadow-lg">
                        <Card.Body>
                            <Card.Title>
                                <h2>🧮 Counter using useReducer</h2>
                            </Card.Title>
                            <h3 className="my-3">Count: {state.count}</h3>

                            <div className="d-flex justify-content-center gap-3">
                                <Button variant="success" onClick={() => dispatch({ type: "INCREMENT" })}>+</Button>
                                <Button variant="danger" onClick={() => dispatch({ type: "DECREMENT" })}>-</Button>
                                <Button variant="secondary" onClick={() => dispatch({ type: "RESET" })}>Reset</Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}


// 🎯 Interview Style One-Line Definition:
// "useReducer ek hook hai jo complex state ko handle karne ke liye use hota hai,
//  jisme next state pehle wali state aur action ke base pe decide hoti hai.
//  Ye Redux jaisa flow follow karta hai using dispatch() and reducer().

// Syntax
// const [state, dispatch] = useReducer(reducerFunction, initialState);

// | Part              | Role                                          |
// | ----------------- | --------------------------------------------- |
// | `state`           | current state value                           |
// | `dispatch`        | function to trigger action                    |
// | `reducerFunction` | function that decides how state should change |
// | `initialState`    | default value                                 |

// 🔁 useState vs useReducer

// | Feature         | `useState`      | `useReducer`       |
// | --------------- | --------------- | ------------------ |
// | Simplicity      | ✅ Simple cases  | ❌ Thoda complex    |
// | Complex logic   | ❌ Not ideal     | ✅ Perfect          |
// | Multiple states | ❌ Repeated code | ✅ Central reducer  |
// | Action-based    | ❌ No            | ✅ Yes (`dispatch`) |

// | Situation                                     | Hook           |
// | --------------------------------------------- | -------------- |
// | Simple value change                           | ✅ `useState`   |
// | Complex state (object/array), multiple values | ✅ `useReducer` |
// | State depends on previous state               | ✅ `useReducer` |
// | Redux-style structure chahiye                 | ✅ `useReducer` |

// const[data,dispatch]=useReducer(reducer,initialState);

