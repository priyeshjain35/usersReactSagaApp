import React from 'react';
import {useStore} from 'react-redux';

const UserDetails = () => {
    
    const curr_state = useStore().getState();
    const { selectedUser } = curr_state.users;

    return (
        <div className="card">
            <img src={selectedUser.avatar} alt="John" style={{width:"100%"}} />
            <p>{selectedUser.email}</p>
            <h1>{selectedUser.first_name}</h1>
            <p>{selectedUser.last_name}</p>
        </div>
    )
}

export default UserDetails;