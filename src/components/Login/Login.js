import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import "./index.css";
import USERS_ACTION_TYPES from '../../redux/actionTypes/UserActionTypes';

const Login = (props) => {

    const dispatch = useDispatch();

    const loginAction = useCallback(
        (user) => dispatch({type: USERS_ACTION_TYPES.LOGIN_IN_REQUEST, payload: user }),
        [dispatch]
    )

    const handleSubmitLogin = async (e, props) => {
        e.preventDefault();
        const user = {}, elms = e.target.elements;
        for(let i=0; i < elms.length; i++) {
            const cur_el = elms[i];
            const _name = cur_el.name || "";
            const _value = cur_el.value || "";
            if(_name !== "" && _value !== "") {
                user[_name] = _value;
            }
        }
        loginAction(user);
        props.history.push("/users");
    }

    const handleLinkClick = () => {
        props.history.push("/signup");
    }

    return (
        <form className="FormContainer" onSubmit={(e) => handleSubmitLogin(e, props)}>
            <label>
                React JS
            </label>
            <input type="email" name="email" placeholder="Email" />
            <input type="password" name="password" placeholder="Password" />
            <button type="submit">
                Login
            </button>
            <button className="link" onClick={(e) => handleLinkClick(e, props)}>
                Don't Have Account?
            </button>
        </form>
    )
};

export default Login;