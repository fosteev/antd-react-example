import React, {Component} from 'react'
import {Provider} from 'react-redux';
import createBrowserHistory from 'history/createBrowserHistory';
import {syncHistoryWithStore} from 'react-router-redux';
import {
    Router,
    Route,
    Link,
    Redirect,
    withRouter,
    Switch
} from 'react-router-dom';

import AppReducer from './reducers';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import Login from './screens/login';
import App from './App';

import {composeWithDevTools} from 'redux-devtools-extension';

export const store = createStore(AppReducer, composeWithDevTools(applyMiddleware(thunk)));
const customHistory = createBrowserHistory();
const history = syncHistoryWithStore(customHistory, store);

const fakeAuth = {
    isAuthenticated: false,
    authenticate(cb) {
        this.isAuthenticated = true;
        setTimeout(cb, 100); // fake async
    },
    signout(cb) {
        this.isAuthenticated = false;
        setTimeout(cb, 100);
    }
};

const PrivateRoute = ({component: Component, ...rest}) => (
    <Route {...rest} render={(props) => (
        fakeAuth.isAuthenticated === true
            ? <Component {...props} />
            : <Redirect to='/login'/>
    )}/>
)

const LoginRoute = ({component: Component, ...rest}) => (
    <Route {...rest} render={(props) => (
        fakeAuth.isAuthenticated === false
            ? <Component {...props} />
            : <Redirect to='/'/>
    )}/>
)

class Root extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router history={history}>
                    <div>
                        <Switch>
                            <LoginRoute path='/login' component={Login}/>
                            <PrivateRoute path='/' component={App}/>
                        </Switch>
                    </div>
                </Router>
            </Provider>
        );
    }

}


export default Root
