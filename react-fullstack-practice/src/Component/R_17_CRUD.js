import { useEffect, useState } from "react"
// import { Container } from 'react-bootstrap';
import '../Css/crud.css'
// import { Await } from "react-router-dom";
let R_17_CRUD = () => {
    const [fruits, setFruits] = useState([]);
    const [fname, setFname] = useState('');
    const [city, setCity] = useState('');
    const [id, setId] = useState(null);

    const dataFatch = async () => {
        try {
            let res = await fetch("http://localhost:3001/show");
            let data = await res.json();
            setFruits(data.fruits);
        } catch (error) {
            console.log("Data Not Fetched: " + error);
        }
    };
    useEffect(() => {
        dataFatch();
    }, []);

    // Submit or Update
    const handelSubmit = async (e) => {
        e.preventDefault();
        try {
            if (id === null) {
                //  INSERT
                const res = await fetch("http://localhost:3001/insert", {
                    method: "POST",
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ fname, city })
                });
                const data = await res.json();
                setFruits(data.fruits);
                // fruits.forEach((item) => {
                //     console.log(`${item.id} - ${item.name} - ${item.city}`);
                // });
            } else {
                //  UPDATE
                const res = await fetch(`http://localhost:3001/update/${id}`, {
                    method: "PUT",
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ fname, city })
                });
                const data = await res.json();
                setFruits(data.fruits);
                setId(null); // reset edit mode
            }

            setFname('');
            setCity('');
        } catch (error) {
            console.error("Error:" + error);
        }
    };

    let handleDelete = async (id) => {
        let res = await fetch(`http://localhost:3001/delete/${id}`, {
            method: "DELETE",
        });
        let data = await res.json();
        setFruits(data.fruits);
    }

    function handelUpdate(data) {
        setFname(data.fname);
        setCity(data.city);
        setId(data.id);

    }
    return (
        <>
            <div className="container">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">id</th>
                            <th scope="col">Fruit Name</th>
                            <th scope="col">City</th>
                            <th scope="col">Operation</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            fruits.map((item) =>
                            (
                                <tr key={item.id}>
                                    <th scope="row">{item.id}</th>
                                    <td>{item.fname}</td>
                                    <td>{item.city}</td>
                                    <td>
                                        <button className="btn btn-warning btn-sm mx-1" onClick={() => handelUpdate(item)}>Edit</button>
                                        <button className="btn btn-danger btn-sm" onClick={() => handleDelete(item.id)}>Delete</button>
                                    </td>
                                </tr>
                            ))
                        }
                        <tr>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="container mt-5">
                <h2 className="mb-4">Add Fruit Details</h2>
                <form onSubmit={handelSubmit}>
                    <div className="mb-3">
                        <label htmlFor="fruit" className="form-label">Fruit Name</label>
                        <input type="text" className="form-control" id="fruit" placeholder="Enter fruit name" value={fname} onChange={(e) => setFname(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="city" className="form-label">City</label>
                        <input type="text" className="form-control" id="city" placeholder="Enter city name" value={city} onChange={(e) => setCity(e.target.value)} />
                    </div>
                    <button type="submit" className="btn btn-primary">{id ? "Update" : "Add"}</button>
                </form>
            </div>
        </>
    )
}

export default R_17_CRUD;