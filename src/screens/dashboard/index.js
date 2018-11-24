import React, {Component} from 'react';

import { Drawer, Button } from 'antd';
import {auth} from "../../actions/login";
import connect from "react-redux/es/connect/connect";

class Dashboard extends React.Component {
    state = { visible: false };

    showDrawer = () => {
        this.setState({
            visible: true,
        });
    };

    onClose = () => {
        this.setState({
            visible: false,
        });
    };

    render() {
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
        auth: id => dispatch(auth())
    }
}
const LoginForm = connect(
    mapStateToProps,
    mapDispatchToProps
)(Dashboard);
export default LoginForm;