import 'bootstrap/dist/css/bootstrap.min.css';
import "../Css/faq.css";
import { questions } from "../data/questions";
import { useState } from 'react';
import { data } from 'react-router-dom';
function R_9_Ruf() {
    const arr = [
        {
            "id": 1,
            "name": "Leanne Graham",
            "username": "Bret",
            "email": "Sincere@april.biz",
            "address": {
                "street": "Kulas Light",
                "suite": "Apt. 556",
                "city": "Gwenborough",
                "zipcode": "92998-3874",
                "geo": {
                    "lat": "-37.3159",
                    "lng": "81.1496"
                }
            },
            "phone": "1-770-736-8031 x56442",
            "website": "hildegard.org",
            "company": {
                "name": "Romaguera-Crona",
                "catchPhrase": "Multi-layered client-server neural-net",
                "bs": "harness real-time e-markets"
            }
        },
    ];
    const [ansShow, setAns] = useState(questions[0].id);
    return (
        <div className="container mt-4">
            <div className="row">
                {arr.map((user) => (
                    <div className="col-md-6" key={user.id}>
                        <div className="card mb-4 shadow-sm">
                            <div className="card-body">
                                <h5 className="card-title">{user.name}</h5>
                                <h6 className="card-subtitle mb-2 text-muted">@{user.username}</h6>
                                <p className="card-text">
                                    <strong>Email:</strong> {user.email}<br />
                                    <strong>Phone:</strong> {user.phone}<br />
                                    <strong>Website:</strong> {user.website}<br />
                                    <strong>Company:</strong> {user.company.name}<br />
                                    <strong>Address:</strong> {user.address.street}, {user.address.city}
                                </p>
                                <a href={`http://${user.website}`} className="card-link" target="_blank" rel="noopener noreferrer">
                                    Visit Website
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>




            <div className="Faqu">
                <h1>A Frequently Asked Questions (FAQ)</h1>
                <div className="faqouter">
                    {questions.map((value) => (
                        <div className="faqitem" key={value.id}>
                            <h3 onClick={() => setAns(value.id === ansShow ? null : value.id)}>
                                <span className="symbol">
                                    {ansShow === value.id ? "−" : "+"}
                                </span>
                                {value.question}
                            </h3>
                            <p className={ansShow === value.id ? "ansshow" : ""}>
                                {value.answer}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default R_9_Ruf;
