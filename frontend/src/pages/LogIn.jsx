import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import "../styles.css";
import { Link } from "react-router-dom";

export default function LogIn() {
    return (
        <form className='container w-25 form-top'>
            <h3 className='mb-3'>Log in</h3>
            <div className="mb-3">
                <label>Name</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your name"
                />
            </div>
            <div className="mb-3">
                <label>Password</label>
                <input
                    type="password"
                    className="form-control"
                    placeholder="Enter your password"
                />
            </div>
            <div className="d-grid">
                <Link to={"/mainpage"}> <button type="submit" className="btn btn-purple">
                    Submit
                </button>
                </Link>
            </div>
            <p className="forgot-password text-right mt-2">
                No user account? <Link to={'/sign-up'}>Sign Up</Link>
            </p>

        </form>


    );
}
