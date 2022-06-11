import agent from '../agent';
import Header from './Header';
import React from 'react';
import {connect} from 'react-redux';
import {APP_LOAD, REDIRECT} from '../constants/actionTypes';
import {Route, Switch} from 'react-router-dom';
import EditorVenta from '../components/EditorVenta';
import Home from '../components/Home';
import Login from '../components/Login';
import Register from '../components/Register';
import {store} from '../store';
import {push} from 'react-router-redux';
import EditorDiagnostico from "./EditorDiagnostico";
import Diagnostico from '../components/Diagnostico';
import Citas from '../components/Citas';
import EditorCliente from "./EditorCliente";
import Venta from "./Venta";


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
        //agent.Articles.all();
        //dispatch({ type: CHANGE_TAB, payload, token, skipTracking: true });
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
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route path="/login" component={Login}/>
                        <Route path="/ventas" component={Venta}/>
                        <Route path="/register" component={Register}/>
                        <Route path="/editorventa" component={EditorVenta}/>
                        <Route path="/editordiagnostico/:venta" component={EditorDiagnostico}/>
                        <Route path="/dx/:id" component={Diagnostico}/>
                        <Route path="/citas" component={Citas}/>
                        <Route path="/clientes" component={EditorCliente}/>
                    </Switch>
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
