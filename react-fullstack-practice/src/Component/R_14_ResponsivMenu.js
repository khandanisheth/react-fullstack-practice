import { useState } from "react";
import "../App.css";

const R_14_ResponsivMenu = () => {
    const [show, setshow] = useState(false);
    return (
        <>
            <button className="menu-toggle" style={{ margin: '10px' }} onClick={() => setshow(!show)}>
                {show ? <span>&times;</span> : <span>&#9776;</span>}
            </button>
            <div className={`menu ${show ? 'activemenu' : ''}`}>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact</li>
                    <li>Gellery</li>
                    <li>Services</li>
                    <li>Other</li>
                    <li>Team</li>
                </ul>
            </div>
        </>
    )

}

export default R_14_ResponsivMenu;