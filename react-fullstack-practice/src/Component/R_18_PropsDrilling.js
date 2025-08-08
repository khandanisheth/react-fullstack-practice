// import { useState } from "react";
// import "../Css/faq.css";
// import { questions } from "../data/questions";
// // import Faq from "./Faq"; // child component ko import karo

// const R_18_PropsDrilling = () => {
//   const [ansShow, setAns] = useState(questions[0].id);

//   return (
//     <div className="Faqu">
//       <h1>A Frequently Asked Questions (FAQ)</h1>
//       <div className="faqouter">
//         {questions.map((itemdata) => (
//           <Faq
//             key={itemdata.id}
//             ansShow={ansShow}
//             setAns={setAns}
//             itemdata={itemdata}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default R_18_PropsDrilling;
// const Faq = ({ ansShow, setAns, itemdata }) => {
//   return (
//     <div className="faqitem">
//       <h3 onClick={() => setAns(ansShow === itemdata.id ? null : itemdata.id)}>
//         <span className="symbol">
//           {ansShow === itemdata.id ? "−" : "+"}
//         </span>
//         {itemdata.question}
//       </h3>
//       <p className={ansShow === itemdata.id ? "ansshow" : ""}>
//         {itemdata.answer}
//       </p>
//     </div>
//   );
// };




import { useState } from "react";
import "../Css/faq.css";
import { questions } from "../data/questions";
// import Faq from "./Faq"; // child component ko import karo

const R_18_PropsDrilling = () => {
    const [ansShow, setAns] = useState(questions[0].id);
    let items = questions.map((value) => {
        let itemDetatials = {
            ansShow, setAns, value
        }
        return (<Faq itemDetatials={itemDetatials} key={value.id} />)
    })
    return (
        <div className="Faqu">
            <h1>A Frequently Asked Questions (FAQ)</h1>
            <div className="faqouter">
                {items}
            </div>
        </div>
    );
};

export default R_18_PropsDrilling;
const Faq = ({ itemDetatials }) => {
    let { ansShow, setAns, value } = itemDetatials;
    return (
        <div className="faqitem">
            <h3 onClick={() => setAns(value.id)}>
                <span className="symbol">
                    {ansShow === value.id ? "−" : "+"}
                </span>
                {value.question}
            </h3>
            <p className={ansShow === value.id ? "ansshow" : ""}>
                {value.answer}
            </p>
        </div>
    );
};
