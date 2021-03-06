import React, {Component} from 'react';

import './App.css';
import {Drawer, Button} from 'antd';
import connect from "react-redux/es/connect/connect";

import Login from './screens/login';

import {
    Router,
    Route,
    Link,
    Redirect,
    withRouter,
    Switch
} from 'react-router-dom';

import Dashboard from './screens/dashboard';



class App extends React.Component {
    state = {
        boll: false
    }
    render() {
        // const { isAuthenticated } = this.props.login;
        // const { pathname } = this.props.location;
        //
        // if ((isAuthenticated === false) && (pathname === '/') && (this.state.boll === false)) {
        //     this.state.boll = true;
        //     return <Redirect to='/login' />
        // }

        return (
            <div>
                <Button type="primary" onClick={this.showDrawer}>
                    Open
                </Button>
                <Drawer
                    title="Basic Drawer"
                    placement="right"
                    closable={false}
                    onClose={this.onClose}
                    visible={this.state.visible}
                >
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                </Drawer>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        login: state.login
    }
}

const mapDispatchToProps = dispatch => {
    return {

    }
}

const AppConnect = connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
export default AppConnect;

