import { connect } from "react-redux";
import Users from "./Users";
import { getUsersRequest, setSelectedUser } from "../../redux/actions/UserActions";
// import { bindActionCreators } from "redux";

const mapStateToProps = (state) => ({
    users: state.users.allUsers || []
});

const mapDispatchToProps = (dispatch) => ({
    setSelectedUser: (user) => dispatch(setSelectedUser(user)),
    // getUsersRequest: bindActionCreators(getUsersRequest, dispatch)
    getUsersRequest: (num) => dispatch(getUsersRequest(num))
});

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;