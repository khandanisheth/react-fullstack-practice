import { useState } from "react";
import "../Css/faq.css";
import { questions } from "../data/questions";

const R_16_Faqu = () => {
    const [ansShow, setAns] = useState(questions[0].id);

    return (
        <div className="Faqu">
            <h1>A Frequently Asked Questions (FAQ)</h1>
            <div className="faqouter">
                {questions.map((data, id) => (
                    <div className="faqitem" key={id}>
                        <h3 onClick={() => setAns(ansShow === data.id ? null : data.id)}>
                            <span className="symbol">
                                {ansShow === data.id ? "−" : "+"}
                            </span>
                            {data.question}
                        </h3> 
                        <p className={ansShow === data.id ? "ansshow" : ""}>
                            {data.answer}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default R_16_Faqu;
