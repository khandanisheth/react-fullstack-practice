import * as React from 'react';
import { Container } from 'react-bootstrap';

function R_3_Boots() {
    return (
        <div>

            {/* Bootstrap Alert */}
            <div className="alert alert-danger alert-dismissible fade show" role="alert">
                <strong>Oh snap! You got an error!</strong>
                <p>Change this and that and try again.</p>
                <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="alert"
                    aria-label="Close"
                ></button>
            </div>

            {/* Container Types */}
            <h2>Container Types Example</h2>

            <div className="container bg-light p-3 mb-4">
                <h4>.container (fixed width)</h4>
            </div>

            <div className="container-sm bg-secondary text-white p-3 mb-4">
                <h4>.container-sm (small)</h4>
            </div>

            <div className="container-md bg-success text-white p-3 mb-4">
                <h4>.container-md (medium)</h4>
            </div>

            <div className="container-lg bg-danger text-white p-3 mb-4">
                <h4>.container-lg (large)</h4>
            </div>

            <div className="container-xl bg-warning text-dark p-3 mb-4">
                <h4>.container-xl (extra large)</h4>
            </div>

            <div className="container-xxl bg-info text-white p-3 mb-4">
                <h4>.container-xxl (extra extra large)</h4>
            </div>

            <div className="container-fluid bg-dark text-white p-3 mb-4">
                <h4>.container-fluid (full width)</h4>
            </div>

        </div>
    );
}

export default R_3_Boots;



// Fisrt Step => npm install react-bootstrap bootstrap


// second step   
//      =>The following line can be included in your src/index.js or App.js file 
//      =>import 'bootstrap/dist/css/bootstrap.min.css';