import Banner from './Banner';
import MainView from './MainView';
import React from 'react';
import { Link } from 'react-router-dom';

import agent from '../../agent';
import { connect } from 'react-redux';

import {
  HOME_PAGE_LOADED,
  HOME_PAGE_UNLOADED,
  APPLY_TAG_FILTER,
  SEARCH_HOME
} from '../../constants/actionTypes';

const mapStateToProps = state => ({
  ...state.home,
  appName: state.common.appName,
  token: state.common.token
});
const mapDispatchToProps = dispatch => ({
  onClickTag: (tag, pager, payload) =>
    dispatch({ type: APPLY_TAG_FILTER, tag, pager, payload }),
  onLoad: (tab, pager, payload) =>{
    dispatch({ type: HOME_PAGE_LOADED, tab, pager, payload })},
  onUnload: () =>
    dispatch({  type: HOME_PAGE_UNLOADED }),
  searchEvent: (key, value) =>
    dispatch({ type: SEARCH_HOME, key, value })
});

class Home extends React.Component {

  constructor (){
    super();
        this.search=ev => {
          this.searchVentas();
        };
  }

  componentWillMount() {
    this.searchVentas();
  }

  searchVentas(){
    const tab = this.props.token ? 'feed' : 'all';
    const articlesPromise = this.props.token ? agent.Ventas.all :  agent.Ventas.all;
    this.props.onLoad(tab, articlesPromise, Promise.all([agent.Tags.getAll(), articlesPromise()]));
  }

  componentWillUnmount() {
    this.props.onUnload();
  }

  render() {
    return (
      <div className="home-page">
        <Banner token={this.props.token} appName={this.props.appName} />
        <div className="container page">
          <div className="row">
            <form className="form-inline">
               <div className=" article-preview form-group">
                <ul className="nav navbar-nav pull-xs-right">
                  <li className="nav-item" >
                    <Link to="/ventas" className="nav-link" >
                     <i className="ion-compose"></i>&nbsp;Ventas
                    </Link>
                  </li>
                  <li className="nav-item" >
                  <input
                      className="form-control form-control-md"
                      type="text"
                      placeholder="Buscar"
                       onChange={this.search}
                  />
                  </li>
                </ul>



            </div>
            </form>

            <MainView  token={this.props.token} />
          </div>
        </div>
      </div>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);
