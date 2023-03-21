import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import "../styles.css";
import { Link } from "react-router-dom";

export default function SignUp() {
    return (
        <form className='container w-25 form-top'>
            <h3 className='mb-3'>Sign Up</h3>
            <div className="mb-3">
                <label>Name</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your name"
                />
            </div>
            <div className="mb-3">
                <label>Email</label>
                <input type="text" className="form-control" placeholder="Enter your email   " />
            </div>
            <div className="mb-3">
                <label>Password</label>
                <input
                    type="password"
                    className="form-control"
                    placeholder="Create a password"
                />
                <p className='text-secondary mt-1'>Must be at least 8 characters</p>
            </div>
            <div className="d-grid">
                <Link to={"/mainpage"}> <button type="submit" className="btn btn-purple">
                    Create account
                </button>
                </Link>
            </div>
            <p className="forgot-password text-right">
                Already registered <a href="/sign-in">Log in?</a>
            </p>
        </form>

    );
}
