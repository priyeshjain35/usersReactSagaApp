// import React, {useState, useEffect} from 'react';
// import ApiService from "../../Services/ApiService";
import React, { Component } from "react";

// const handleUserRowClick = (user, props) => {
//     const id = user.id;
//     props.history.push(`/user/${id}`);
// }

const UserTableHeader = ["Email", "First Name", "Last Name"];

// const Users = (props) => {
//     const [users, setUsers] = useState([]);
//     const [next, setNext] = useState(1);
    
//     useEffect(() => {
//         let response = [];
//         let url = `/api/users?page=${next}`;
//         async function fetchUsers() {
//             response = await ApiService(url);
//             if(response && response.data && response.data.length > 0) {
//                 setUsers(response.data);
//             }
//         }
//         fetchUsers();
//     }, [next]);

//     return (
//         <React.Fragment>
//             {users && users.length && 
//                 <table>
//                     <thead>
//                         <tr>
//                             {UserTableHeader.map((item, key) => <th key={key}>{item}</th>)}
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {users.map((user, key) => { 
//                             return(
//                                 <tr key={key} onClick={(e) => handleUserRowClick(user, props)}>
//                                     <td>{user.email}</td>
//                                     <td>{user.first_name}</td>
//                                     <td>{user.last_name}</td>
//                                 </tr>
//                             );
//                         })}
//                     </tbody>
//                 </table>
//             }
//             <div className="icon-container">
//                 <i className='far fa-arrow-alt-circle-left' onClick={() => setNext(1)}></i>
//                 <i className='far fa-arrow-alt-circle-right' onClick={() => setNext(2)}></i>
//             </div>
//         </React.Fragment>
//     )
// }

// export default Users;

// import React, { Component } from "react";

class Users extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount = () => {
        this.props.getUsersRequest(1);
    }

    handleRowClick = (user) => {
        this.props.setSelectedUser(user);
        let {id} = user;
        this.props.history.push(`/user/${id}`);
    }

    handleArrowButtonClick = (num) => {
        this.props.getUsersRequest(num);
    }

    render() {
        const {users} = this.props;
        return (
            <React.Fragment>
                {users && users.length && 
                    <table>
                        <thead>
                            <tr>
                                {UserTableHeader.map((item, key) => <th key={key}>{item}</th>)}
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user, key) => { 
                                return(
                                    <tr key={key} onClick={() => this.handleRowClick(user)}>
                                        <td>{user.email}</td>
                                        <td>{user.first_name}</td>
                                        <td>{user.last_name}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                }
                <div className="icon-container">
                    <i className='far fa-arrow-alt-circle-left' onClick={() => this.handleArrowButtonClick(1)}></i>
                    <i className='far fa-arrow-alt-circle-right' onClick={() => this.handleArrowButtonClick(2)}></i>
                </div>
            </React.Fragment>
        )
    }
}

export default Users;