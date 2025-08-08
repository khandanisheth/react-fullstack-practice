import React, { Component, useEffect, useState } from "react";
// Class Component
class R_5_StateComDidMoun extends Component {
    constructor() {
        super();
        this.state = {
            name: "Loading...",
            y: "kk",
        };
    }

    componentDidMount() {
        // Simulate API call
        setTimeout(() => {
            this.setState({ name: "Mohammad Danish (Class)", y: "kk" });
        }, 2000);
    }

    render() {
        return (
            <div>
                <h2>Class Component:</h2>
                <p>Welcome, {this.state.name}{this.state.y}</p>
                <UserFunction />
            </div>
        );
    }
}
export default R_5_StateComDidMoun;

// Functional Component
function UserFunction() {
    const [name, setName] = useState("Loading...");

    useEffect(() => {
        // Simulate API call
        setTimeout(() => {
            setName("Mohammad Danish (Function)");
        }, 2000);
    }, []); // runs only once like componentDidMount

    return (
        <div>
            <h2>Functional Component:</h2>
            <p>Welcome, {name}</p>
        </div>
    );
}

