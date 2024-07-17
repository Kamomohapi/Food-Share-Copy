import React from "react";
import { Link } from 'react-router-dom';
export function Donatebtn() {
    return (
        <div>
            <Link to="/SignUp">
                <button type="button" className="btn btn-success btn-lg">Donate</button>
            </Link>
        </div>
    )
}