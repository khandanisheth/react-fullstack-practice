import React, { useRef, useState } from 'react';
import { Button } from 'react-bootstrap';

export default function R_25_useRef() {
    const usernameRef = useRef();
    const passwordRef = useRef();
    const [userData, setUserData] = useState({ name: "", pass: "" });

    const handleSubmit = (e) => {
        e.preventDefault(); // Stop page reload
        const name = usernameRef.current.value;
        const pass = passwordRef.current.value;
        setUserData({ name, pass }); // Store values in state
    };

    return (
        <div style={{ marginLeft: "20px" }}>
            <h2>R_25_useRef Example</h2>
            <hr />

            <form onSubmit={handleSubmit} >
                <input type='text' placeholder='Enter username...' ref={usernameRef} />
                <br /> <br />
                <input
                    type='password' placeholder='Enter password...' ref={passwordRef} />
                <br /> <br /> <br />
                <Button type="submit">Submit</Button>
            </form>

            <ul>
                <li><strong>Username:</strong> {userData.name}</li>
                <li><strong>Password:</strong> {userData.pass}</li>
            </ul>
        </div>
    );
}

// 🔚 Final Line for Interview:
// "useState UI-related data ko handle karta hai jisme render chahiye hota hai,
// jabki useRef un values ko handle karta hai jinke update hone par UI re-render nahi karna chahiye —
// jaise DOM references ya timer counters."


// ✅ useRef ka use karo jab:
// Aapko DOM access karna ho
// 👉 e.g. input focus, scroll to div, video play(), etc.

// Aapko koi value store karni ho bina component re-render karwaye
// 👉 e.g. previous value, stopwatch timer ID, click counter (without UI)

// Aap ek uncontrolled component bana rahe ho
// 👉 e.g. file upload field, uncontrolled form

