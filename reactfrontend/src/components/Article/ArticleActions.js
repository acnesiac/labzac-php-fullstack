import { Link } from "react-router-dom";
import React from "react";
import agent from "../../agent";
import { connect } from "react-redux";
import { DELETE_ARTICLE } from "../../constants/actionTypes";

const mapDispatchToProps = dispatch => ({
  onClickDelete: payload =>
    dispatch({
      type: DELETE_ARTICLE,
      payload
    })
});

const ArticleActions = props => {
  const article = props.article;

  const del = () => {
    props.onClickDelete(agent.Articles.del(article.slug));
  };

  if (props.canModify) {
    return (
      <span>
        
        <span className="date">
            {new Date(article.createdAt).toDateString()}
        </span>
          <h1>{article.title}</h1>
          <Link to={`/@${article.author.username}`} />
          <span >
          <Link
            to={`/editorventa`}
            className="btn btn-outline-secondary btn-md">
            <i className="ion-edit" /> Agrega DX
          </Link>  </span>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          
          <div className="collapse navbar-collapse" id="navbarNav">
           <ul>
            </ul>
          </div>
        </nav>
      </span>
    );
  }

  return <span> </span>;
};

export default connect(
  () => ({}),
  mapDispatchToProps
)(ArticleActions);
