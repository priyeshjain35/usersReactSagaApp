import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import {Login, SignUp} from "../components/Login";
import {Users, UserDetails} from "../components/Users";
import UsersContainer from "../components/Users/UsersContainer";
import UnkonwnPath from "../components/UnkonwnPath/UnkonwnPath";
import Header from "../components/Header/Header";

const Routes = () => {
    return (
        <Router>
            <Header />
            <Switch>
                <Route path="/" exact component={Login}></Route>
                <Route path="/signup" component={SignUp}></Route>
                <Route path="/users" component={UsersContainer}></Route>
                <Route path="/user/:id" component={UserDetails}></Route>
                <Route path="*" component={UnkonwnPath} />
            </Switch>
        </Router>
    );
}

export default Routes;