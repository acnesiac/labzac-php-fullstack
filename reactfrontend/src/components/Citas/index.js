import DiagnosticoMeta from './DiagnosticoMeta';
import CommentContainer from './CommentContainer';
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

class Citas extends React.Component {
  componentWillMount() {

  }
  //agent.Comments.forArticle(this.props.match.params.id)
  componentWillUnmount() {
    this.props.onUnload();
  }

  render() {
    if (!this.props.diagnostico) {
      return <div>TBD</div>;
    }
    return (
      <div className="home-page">
        TBD
      </div>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Citas);
