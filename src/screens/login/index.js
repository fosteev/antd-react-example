import React, { Component } from 'react';
import Form from '../../components/form';
import { connect } from 'react-redux';

class Login extends React.Component {
    state = {
        redirectToReferrer: false
    }

    login = () => {

    }

    render() {
        return (
            <div className='login'>
                <Form onSubmit={v => this.login(v)}/>
            </div>
        )
    }
}


export default connect(
    state => ({
        store: state
    }),
    dispatch => ({
        onAuth: (params) => {

        },
        onCheck: () => {

        }
    })
)(Login);
