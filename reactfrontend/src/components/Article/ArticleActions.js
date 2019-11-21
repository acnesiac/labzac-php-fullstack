import { Link } from "react-router-dom";
import React from "react";
import agent from "../../agent";
import { connect } from "react-redux";

const mapDispatchToProps = dispatch => ({

});

const ArticleActions = props => {
  const article = props.article;
    return (
      <div>
          <span>
              <Link   className="btn btn-sm pull-xs-right btn-primary" to={`/editordiagnostico/${article.id}`}>
                    Nuevo DX
              </Link>
          </span>
          <Link   className="btn btn-sm pull-xs-right btn-primary" to={`/editordiagnostico/${article.id}`}>
                Ver DXs
          </Link>
          <Link to={`/@${article.id}`} >{article.id}</Link>
          <h1>{article.cliente.email}</h1>
        <span className="date">${article.costo}</span>
      <ul>
          <Link  to={`/dx/${article.id}`}>
                Ver diagnostico
          </Link>
          <Link  to={`/dx/${article.id}`}>
                Ver diagnostico
          </Link>
          <Link  to={`/dx/14`}>
                Ver diagnostico
          </Link>
      </ul>
      </div>
    );
  return <span> </span>;
};
export default connect(
  () => ({}),
  mapDispatchToProps
)(ArticleActions);
