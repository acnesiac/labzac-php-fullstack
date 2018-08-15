import React from 'react';
import { Link } from 'react-router-dom';
import agent from '../agent';
import {withRouter} from 'react-router-dom';

const LoggedOutView = props => {
  if (!props.currentUser) {
    return (
      <ul className="nav navbar-nav pull-xs-right">



        <li className="nav-item">
          <Link to="/login" className="nav-link">
            Login
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/register" className="nav-link">
            Crea una cuenta
          </Link>
        </li>
      </ul>
    );
  }
  return null;
};

const LoggedInView = props => {

  function handleClick(e) {
      e.preventDefault();
      console.log('The link was clicked.');
      window.localStorage.setItem('jwt', '');
      agent.setToken(null);
      window.location.assign("/");
    }

  if (props.currentUser) {
    return (
      <ul className="nav navbar-nav pull-xs-right">



          <li className="nav-item" >
          <Link to="/" className="nav-link" >
          <i className="ion-compose"></i>&nbsp;Mis Pacientes
          </Link>  </li>
  <li className="nav-item" >
          <Link to="/profilepage" className="nav-link" >
          <i className="ion-compose"></i>&nbsp;Nuevo Paciente
          </Link>


          </li>

        {props.currentUser.username  === 'acnesiac1' &&
        <li className="nav-item">
          <Link to="/editor" className="nav-link">
            <i className="ion-compose"></i>&nbsp;Nuevo paciente
          </Link>
        </li>
        }


        <li className="nav-item">
          <Link
            to={`/@${props.currentUser.username}`}
            className="nav-link">
            <img src={props.currentUser.image} className="user-pic" alt={props.currentUser.username} />
            {props.currentUser.username}
          </Link>
        </li>
        <li className="nav-item">
        <button
          className="btn" onClick={handleClick}>
          Cierra la sesion.
        </button>
        </li>
      </ul>
    );
  }

  return null;
};

class Header extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-light">
        <div className="container">

          <Link to="/" className="navbar-brand">
            {this.props.appName.toLowerCase()}
          </Link>

          <LoggedOutView currentUser={this.props.currentUser} />

          <LoggedInView currentUser={this.props.currentUser} />
        </div>
      </nav>
    );
  }
}

export default Header;
