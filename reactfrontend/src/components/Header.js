import React from 'react';
import { Link } from 'react-router-dom';
import agent from '../agent';

const LoggedOutView = props => {
  if (!props.currentUser) {
    return (
      <ul className="nav">

        <li className="nav-item">
          <Link to="/login" className="nav-link">
            Iniciar sesion
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/register" className="nav-link">
           Crear cuenta
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
      <ul className="nav navbar-nav">




        <li className="nav-item">
          <Link
            to={`/@${props.currentUser.username}`}
            className="nav-link">
            {props.currentUser.username}
          </Link>
        </li>
        <li className="nav-item">
        <button
          className="btn" onClick={handleClick}>
          salir
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
      <nav className="navbar navbar-expand-lg bg-light">
          <div className="container-fluid">

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
