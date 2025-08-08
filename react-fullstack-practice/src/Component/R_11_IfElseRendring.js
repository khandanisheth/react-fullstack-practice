import { useState } from "react";
import { Button } from "react-bootstrap";

const R_11_ifElseRendring = () => {
    const [login, loginup] = useState(false);

    // ✅ JSX variable banate waqt direct JSX assign karo
    let check;
    if (login) {
        check = (
            <>
                <i>Log Out</i>
                <Button variant="primary" className="mr-2" onClick={() => loginup(!login)}>
                    Sign Up
                </Button>
            </>
        );
    } else {
        check = (
            <>
                <i>Log In</i>
                <Button variant="primary" onClick={() => loginup(!login)} className="me-2">
                    Log Out
                </Button>
            </>
        );
    }

    return (
        <>
            <h1>Test Component Render</h1>
            {login ? <h1>Logged Out</h1> : <h1>Logged In</h1>}

            {/* Extra button for testing */}
            <Button variant="primary" onClick={() => loginup(!login)} className="me-2">
                Toggle Login
            </Button>

            {/* Conditionally rendered JSX block */}
            {check}
        </>
    );
};

export default R_11_ifElseRendring;
