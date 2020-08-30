import React from 'react';
import agent from '../../agent';
import { connect } from 'react-redux';
import { DIAGNOSTICO_PAGE_LOADED, DIAGNOSTICO_PAGE_UNLOADED } from '../../constants/actionTypes';
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
        <div className="container">
          TBD
        </div>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Cliente);
