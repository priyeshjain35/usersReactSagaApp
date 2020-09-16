import React from 'react';
import "./index.css";

const handleSignUpClick = (e, props) => {
    e.preventDefault();
    props.history.push("/");
}

const SignUp = (props) => {
    return (
        <form className="FormContainer">
            <label>
                React JS
            </label>
            <input placeholder="Email" />
            <input placeholder="Password" />
            <button onClick={(e) => handleSignUpClick(e, props)}>
                Sign Up
            </button>
        </form>
    )
}

export default SignUp;