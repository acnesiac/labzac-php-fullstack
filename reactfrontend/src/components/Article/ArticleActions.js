import { Link } from "react-router-dom";
import React from "react";
import agent from "../../agent";
import { connect } from "react-redux";

const mapDispatchToProps = dispatch => ({

});

const ArticleActions = props => {
  const article = props.article;


    return (
      <span>
         <span className="date">
            {article.costo}
        </span>
          <span className="date">
                {article.costo}
        </span>
          <Link  to={'/home'}>
                Nuevo diagnostico
        </Link>
          <h1>{article.description}</h1>
      </span>
    );

  return <span> </span>;
};

export default connect(
  () => ({}),
  mapDispatchToProps
)(ArticleActions);
