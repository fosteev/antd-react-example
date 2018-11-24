import React, { Component } from 'react';
import Form from '../../components/form';
import { connect } from 'react-redux';
import {auth} from '../../actions/login';
import {Redirect} from "react-router-dom";


class Login extends React.Component {
    login = (v) => {
        this.props.auth();
    }

    render() {
        // const { isAuthenticated } = this.props.login
        // const { pathname } = this.props.location;
        //
        // if ((isAuthenticated === true) && (pathname === '/login') && (this.state.redirectToReferrer === false)) {
        //     this.state.redirectToReferrer = true;
        //     return <Redirect from={'/login'} to='/' />
        // }

        return (
            <div className='login'>
                <Form onSubmit={v => this.login()}/>
            </div>
        )
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
)(Login);
export default LoginForm;
