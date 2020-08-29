import React from 'react';
import { connect } from 'react-redux';
import { DIAGNOSTICO_PAGE_LOADED, DIAGNOSTICO_PAGE_UNLOADED } from '../../constants/actionTypes';
import MainView from "../Cliente/MainView";
const mapStateToProps = state => ({
  ...state.diagnostico,
  currentUser: state.common.currentUser
});

const mapDispatchToProps = dispatch => ({
  onLoad: payload =>
    dispatch({ type: DIAGNOSTICO_PAGE_LOADED, payload }),
  onUnload: () =>
    dispatch({ type: DIAGNOSTICO_PAGE_UNLOADED })
});

class Cliente extends React.Component {
  componentWillMount() {

  }
  componentWillUnmount() {
    this.props.onUnload();
  }

  render() {
    return (
        <div className="home-page">
          <div className="container">
            <div className="row">
              <div className="col-lg">
                <ul className="list-group">
                  <li className="list-group-item active">Cras justo odio</li>
                  <li className="list-group-item">Dapibus ac facilisis in</li>
                  <li className="list-group-item">Morbi leo risus</li>
                  <li className="list-group-item">Porta ac consectetur ac</li>
                  <li className="list-group-item">Vestibulum at eros</li>
                </ul>
              </div>
              <div className="col-6">
                <div className="card">
                  <img className="card-img-left" src="..." alt="Card image cap"/>
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text">Some quick example text to build on the card title and make up the of the card's content.</p>
                    </div>
                </div>
              </div>
              <div className="col-lg">
                <ul className="list-group">
                  <li className="list-group-item active">Cras justo odio</li>
                  <li className="list-group-item">Dapibus ac facilisis in</li>
                  <li className="list-group-item">Morbi leo risus</li>
                  <li className="list-group-item">Porta ac consectetur ac</li>
                  <li className="list-group-item">Vestibulum at eros</li>
                </ul>
              </div>
            </div>
          </div>


        </div>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Cliente);
