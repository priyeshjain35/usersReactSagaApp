import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";
import Modal from '../Modal/Modal';
import "./index.css";

const Header = () => {
    const { user } = useSelector(state => ({user: state.users}));
    const [isOpen, setOpen] = useState(false);
    
    let history = useHistory();
    
    function handleLogoutConfirm() {
        setOpen(false);
        history.push("/");
    }

    return (
        <header className="header">
            <div>
                {user && user.loggedInUser && Object.keys(user.loggedInUser).length ? 
                    <React.Fragment>
                        <p>{`Welcome ${user.loggedInUser.email}`}</p>
                        <button onClick={() => setOpen(true)}>Logout</button>
                        <Modal open={isOpen} handleConfirm={handleLogoutConfirm} handleClose={() => setOpen(false)}>
                            <h2>Do you want to Logout?</h2>
                        </Modal>
                    </React.Fragment> : 
                    <p>{"Welcome Guest"}</p>
                }
            </div>
        
        </header>
    )
}

export default Header;