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
          <h1>{article.description}</h1>
            <Link to={`diagnostico/${article.id}/1`} >
                  <i className="ion-compose"></i>&nbsp;Nuevo DX
            </Link>  <Link to={`diagnostico/${article.id}/1`} >
                  <i className="ion-compose"></i>&nbsp;Existente DX
            </Link>
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
)(ArticleActions);
