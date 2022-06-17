import agent from '../agent';
import Header from './Header';
import React from 'react';
import {connect} from 'react-redux';
import {APP_LOAD, REDIRECT} from '../constants/actionTypes';
import {Link, Route, Switch} from 'react-router-dom';
import Home from '../components/Home';
import Login from '../components/Login';
import {store} from '../store';
import {push} from 'react-router-redux';
import Venta from "./Venta";

const SideView = props => {

    if (props.currentUser) {
        return (
            <div className="d-flex flex-column flex-shrink-0 p-3 bg-light">
                <ul className="nav nav-pills flex-column mb-auto">
                    <li className="nav-item">
                        <Link to="/ventas" className="nav-link">
                            <i className="ion-compose"></i>&nbsp;Ventass

                        </Link>
                    </li>

                </ul>
            </div>
        );
    }
    return null;
};

const mapStateToProps = state => {
    return {
        appLoaded: state.common.appLoaded,
        appName: state.common.appName,
        currentUser: state.common.currentUser,
        redirectTo: state.common.redirectTo
    }
};

const mapDispatchToProps = dispatch => ({
    onLoad: (payload, token) => {
        dispatch({type: APP_LOAD, payload, token, skipTracking: true})
    },
    onRedirect: () =>
        dispatch({type: REDIRECT})
});


class App extends React.Component {
    constructor() {
        super();
    }

    // here is the trick to redirect pages
    componentWillReceiveProps(nextProps) {
        if (nextProps.redirectTo) {
            store.dispatch(push(nextProps.redirectTo));
            this.props.onRedirect();
        }
    }

    componentWillMount() {
        const token = window.localStorage.getItem('jwt');
        if (token) {
            agent.setToken(token);
        }
        this.props.onLoad(token ? agent.Auth.current() : null, token);
    }

    render() {
        if (this.props.appLoaded) {
            return (
                <div>
                    <Header
                        appName={this.props.appName}
                        currentUser={this.props.currentUser}/>
                    <div className={this.props.currentUser ? "wrapper" : ""}>
                        <SideView currentUser={this.props.currentUser}></SideView>
                        <Switch>
                            <Route exact path="/" component={Home}/>
                            <Route path="/login" component={Login}/>
                            <Route path="/ventas" component={Venta}/>
                        </Switch>
                    </div>
                </div>
            );
        }
        return (
            <div>
                <Header
                    appName={this.props.appName}
                    currentUser={this.props.currentUser}/>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
