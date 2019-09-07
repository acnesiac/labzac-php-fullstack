import DiagnosticoMeta from './DiagnosticoMeta';
import CommentContainer from './CommentContainer';
import React from 'react';
import agent from '../../agent';
import { connect } from 'react-redux';
import marked from 'marked';
import { ARTICLE_PAGE_LOADED, ARTICLE_PAGE_UNLOADED } from '../../constants/actionTypes';

const mapStateToProps = state => ({
  ...state.article,
  currentUser: state.common.currentUser
});

const mapDispatchToProps = dispatch => ({
  onLoad: payload =>
    dispatch({ type: ARTICLE_PAGE_LOADED, payload }),
  onUnload: () =>
    dispatch({ type: ARTICLE_PAGE_UNLOADED })
});

class Diagnostico extends React.Component {
  componentWillMount() {
    // this.props.onLoad(Promise.all([
    //
    // ]));
  }
  // agent.Diagnosticos.get(this.props.match.params.id)
  //agent.Comments.forArticle(this.props.match.params.id)

  componentWillUnmount() {
    this.props.onUnload();
  }

  render() {
    if (!this.props.article) {
      return <div>{ this.props.match.params.costo },{ this.props.match.params.id }</div>
    }

    const markup = { __html: marked(this.props.article.body, { sanitize: true }) };

    return (
      <div className="home-page">

          <div className="container">


            <DiagnosticoMeta
              article={this.props.article}
            />

          </div>


        <div className="container page">
{
  /*
          <div className="row article-content">
            <div className="col-xs-12">

              <div dangerouslySetInnerHTML={markup}></div>

              <ul className="tag-list">
                {
                  this.props.article.tagList.map(tag => {
                    return (
                      <li
                        className="tag-default tag-pill tag-outline"
                        key={tag}>
                        {tag}
                      </li>
                    );
                  })
                }
              </ul>

            </div>
          </div>
            <hr />
              <div className="article-actions">
          </div>
*/
}


        {/*
          <div className="row">
            <CommentContainer
              comments={this.props.comments || []}
              errors={this.props.commentErrors}
              slug={this.props.match.params.id}
              currentUser={this.props.currentUser} />
          </div>
        */}
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Diagnostico);
