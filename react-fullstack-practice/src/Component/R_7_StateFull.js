import React, { useState } from 'react';

function R_7_Stfull() {
    // Initial users array with 10 users
    const [users, setUsers] = useState([
        { id: 1, name: "User 1", email: "user1@example.com" },
        { id: 2, name: "User 2", email: "user2@example.com" },
        { id: 3, name: "User 3", email: "user3@example.com" },
        { id: 4, name: "User 4", email: "user4@example.com" },
        { id: 5, name: "User 5", email: "user5@example.com" },

    ]);

    const [message, setMessage] = useState("Current Message");

    const [count, setCount] = useState(1);

    const changeMessage = () => setMessage("State Full Message");

    const changeMessageUser = () => {
        setUsers([
            ...users,// Spread operator se purane users ko naya array mein copy karo
            { id: 11, name: "New User", email: "newuser@example.com" }
            , { id: 6, name: "User 6", email: "user6@example.com" },
            { id: 7, name: "User 7", email: "user7@example.com" },
            { id: 8, name: "User 8", email: "user8@example.com" },
            { id: 9, name: "User 9", email: "user9@example.com" },
            { id: 10, name: "User 10", email: "user10@example.com" },
        ]);
    };

    const addValue = () => setCount(count + 1);

    return (
        <div>
            <h1>User List</h1>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        {user.name} - {user.email}
                    </li>
                ))}
            </ul>
            <button onClick={changeMessageUser}>
                Add New User
            </button>

            <div>
                <p>{message}</p>
                <button onClick={changeMessage}>
                    Change Message
                </button>
            </div>

            <div>
                <p>Current count: {count}</p>
                <button onClick={addValue}>
                    Increment Count
                </button>
            </div>
        </div>
    );
}

export default R_7_Stfull;
