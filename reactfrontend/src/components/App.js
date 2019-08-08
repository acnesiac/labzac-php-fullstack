import agent from '../agent';
import Header from './Header';
import React from 'react';
import { connect } from 'react-redux';
import { APP_LOAD, REDIRECT } from '../constants/actionTypes';
import { Route, Switch } from 'react-router-dom';
import Article from '../components/Article';
import Editor from '../components/Editor';
import EditorVenta from '../components/EditorVenta';
import Home from '../components/Home';
import Login from '../components/Login';
import ProfilePage from '../components/Upload/ProfilePage';
import Profile from '../components/Profile';
import Register from '../components/Register';
import Settings from '../components/Settings';
import { store } from '../store';
import { push } from 'react-router-redux';
import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyBqWC-AHjyG4xd3mnXHECz0uKH2piAhOOk",
    authDomain: "uploadrx-92ff0.firebaseapp.com",
    databaseURL: "https://uploadrx-92ff0.firebaseio.com",
    projectId: "uploadrx-92ff0",
    storageBucket: "uploadrx-92ff0.appspot.com",
    messagingSenderId: "30483709073"
  };



const mapStateToProps = state => {
  return {
    appLoaded: state.common.appLoaded,
    appName: state.common.appName,
    currentUser: state.common.currentUser,
    redirectTo: state.common.redirectTo
  }};

const mapDispatchToProps = dispatch => ({
  onLoad: (payload, token) =>{
    //agent.Articles.all();
    //dispatch({ type: CHANGE_TAB, payload, token, skipTracking: true });
    dispatch({ type: APP_LOAD, payload, token, skipTracking: true })},
  onRedirect: () =>
    dispatch({ type: REDIRECT })
});

class App extends React.Component {
  constructor(){
    super();
    firebase.initializeApp(config);
  }


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
            currentUser={this.props.currentUser} />
            <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/editor/:slug" component={Editor} />
            <Route path="/editorventa" component={EditorVenta} />
            </Switch>
        </div>
      );
    }
    return (
      <div>
        <Header
          appName={this.props.appName}
          currentUser={this.props.currentUser} />
      </div>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
