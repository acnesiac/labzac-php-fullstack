import agent from '../agent';
import Header from './Header';
import React from 'react';
import { connect } from 'react-redux';
import { APP_LOAD, REDIRECT } from '../constants/actionTypes';
import { Route, Switch } from 'react-router-dom';
import Article from '../components/Article';
import Editor from '../components/Editor';
import Home from '../components/Home';
import Login from '../components/Login';
import CommentContainer from '../components/Article/CommentContainer';


import Graph2D from '../components/Graph2D';
import GraphChart2D from '../components/GraphChart2D';
import AppGraph from '../components/AppGraph';
import HojaEnfermeria from '../components/HojaEnfermeria';
import HourEditor from '../components/HourEntry/HourEditor';
import Upload from '../components/Upload/Upload';
import LoadImage from '../components/Upload/LoadImage';
import ProfilePage from '../components/Upload/ProfilePage';

import Profile from '../components/Profile';
import ProfileFavorites from '../components/ProfileFavorites';
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
  onLoad: (payload, token) =>
    dispatch({ type: APP_LOAD, payload, token, skipTracking: true }),
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
      // this.context.router.replace(nextProps.redirectTo);
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
            <Route path="/editor" component={Editor} />
            <Route path="/article/:id" component={Article} />
            <Route path="/settings" component={Settings} />
            <Route path="/@:username/favorites" component={ProfileFavorites} />
            <Route path="/@:username" component={Profile} />
            <Route path="/graph2d" component={Graph2D} />
            <Route path="/graphchart2d" component={GraphChart2D} />
            <Route path="/graphchartTraversi2d" component={AppGraph} />
            <Route path="/hojaEnfermeria" component={HojaEnfermeria} />
            <Route path="/hourEditor/:slug" component={HourEditor} />
            <Route path="/upload" component={Upload} />
            <Route path="/profilepage" component={ProfilePage} />
            <Route path="/loadimage" component={LoadImage} />
            <Route path="/reacttable" component={CommentContainer} />

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

// App.contextTypes = {
//   router: PropTypes.object.isRequired
// };

export default connect(mapStateToProps, mapDispatchToProps)(App);
