import { useState } from "react";
import "../App.css";

const R_15_LoginModel = () => {
    const [modelStatus, setModelStatus] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Data Submitted:", formData);
        // reset form
        setFormData({ name: "", email: "", message: "" });
        // close modal
        setModelStatus(false);
    };

    return (
        <>
            <button className="em" onClick={() => setModelStatus(!modelStatus)}>
                {modelStatus ? <span>OFF</span> : <span>On</span>}
            </button>

            <div className={`modelOverlay ${modelStatus ? 'showmodelOverlay' : ''}`} onClick={() => setModelStatus(false)}
            ></div>

            <div className={`modelBox ${modelStatus ? 'showModel' : ''}`}>
                <h2>
                    Enquiry Now
                    <span className="closeBtn" onClick={() => setModelStatus(false)}>&times;</span>
                </h2>
                <form onSubmit={handleSubmit} className="enquiryForm">
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    <textarea
                        name="message"
                        placeholder="Your Message"
                        rows="4"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    ></textarea>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </>
    );
};

export default R_15_LoginModel;
