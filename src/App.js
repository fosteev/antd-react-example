import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {Drawer, Button} from 'antd';

class App extends React.Component {
    state = {
        visible: true,
        placement: 'left'
    };

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

    onChange = (e) => {
        this.setState({
            placement: e.target.value,
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
                    placement={this.state.placement}
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

export default App;
