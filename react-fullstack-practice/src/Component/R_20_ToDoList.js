import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
// import "../Css/todolist.css";
export default function R_20_ToDoList() {
    const [input, setInput] = useState("");
    const [items, setItems] = useState([]);

    const dataAdd = (e) => {
        e.preventDefault();
        if (input.trim() === "") return;
        setItems([...items, input]);
        setInput("");
    };

    // ✅ Render ToDo components
    let itemdata = items.map((i, index) => {
        let datadetials = {
            items,
            setItems,
            task: i,
            index
        };
        return <ToDo datadetials={datadetials} key={index} />;
    });

    return (
        <Container className='mt-4'>
            <h2 className='mb-3'>📝 To-Do List</h2>

            <form onSubmit={dataAdd}>
                <div className="mb-3">
                    <label htmlFor="todoInput" className="form-label">Enter Task</label>
                    <input
                        type="text"
                        className="form-control"
                        id="todoInput"
                        name="task"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="e.g., Buy milk"
                    />
                </div>
                <button type="submit" className="btn btn-primary">Add</button>
            </form>

            <ul className="list-group mt-3">
                {itemdata}
            </ul>
        </Container>
    );
}


// ✅ Child Component
const ToDo = ({ datadetials }) => {
    const { items, setItems, task, index } = datadetials;
    const [checkBg, setCheckBg] = useState(false);
    const deleteItem = () => {
        const updatedList = items.filter((_, i) => i !== index);
        setItems(updatedList);
    };
    let toggleBg = () => {
        setCheckBg(!checkBg);
    }
    return (
        <li className={`list-group-item d-flex justify-content-between align-items-center my-1 ${checkBg ? "bg-success text-white text-decoration-line-through" : ""}`} onClick={toggleBg}>
            {task}
            <span style={{ color: "red", cursor: "pointer", fontWeight: "bold" }} onClick={deleteItem}>
                ❌
            </span>
        </li>
    );
};
