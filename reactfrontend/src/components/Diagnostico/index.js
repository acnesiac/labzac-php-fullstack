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

class Diagnostico extends React.Component {
  componentWillMount() {
    this.props.onLoad(Promise.all([
      agent.Diagnosticos.get(this.props.match.params.id)
    ]));
  }
  //agent.Comments.forArticle(this.props.match.params.id)
  componentWillUnmount() {
    this.props.onUnload();
  }

  render() {
    if (!this.props.diagnostico) {
      return null;
    }
    return (
      <div className="home-page">
        <div className="container page">
            <div className="container">
                <DiagnosticoMeta
                    diagnostico={this.props.diagnostico}
                     />
            </div>
            {
              <div className="row">
                <CommentContainer
                  comments={this.props.comments || []}
                  errors={this.props.commentErrors}
                  slug={this.props.match.params.id}
                  currentUser={this.props.currentUser} />
              </div>
            }
        </div>
      </div>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Diagnostico);
