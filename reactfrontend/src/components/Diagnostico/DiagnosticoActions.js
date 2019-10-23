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

const DiagnosticoActions = props => {
  const article = props.article;

  const del = () => {
    props.onClickDelete(agent.Articles.del(article.slug));
  };

    return (
      <span>
         <span className="date">
            {article.costo}
        </span>
          <h1>{article.title}</h1>
          <Link to={`/@${article.id}`} />
          <span >
            </span>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">

          <div className="collapse navbar-collapse" id="navbarNav">
           <ul>
            </ul>
          </div>
        </nav>
      </span>
    );

  return <span> </span>;
};

export default connect(
  () => ({}),
  mapDispatchToProps
)(DiagnosticoActions);
