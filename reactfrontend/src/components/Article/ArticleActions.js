import { Link } from "react-router-dom";
import React from "react";
import agent from "../../agent";
import { connect } from "react-redux";
import ArticlePreview from "../ArticlePreview";

const mapDispatchToProps = dispatch => ({

});

const ArticleActions = props => {
  const article = props.article;
<<<<<<< HEAD

    function handleClick(e) {
        e.preventDefault();
        agent.Diagnosticos.byVenta(article.id);
    }

    return (
      <div>
          <p>
              <Link className="btn   btn-secondary  my-2" to={`/@${article.id}`} >{article.id}</Link>     |
              <Link className="btn   btn-secondary  my-2" to={`/editordiagnostico/${article.id}`}>
                    Iniciar DX
              </Link>

              {/*<button className="btn   btn-secondary  my-2" onClick={handleClick}>*/}
              {/*      Ver DXs*/}
              {/*</button>*/}
          </p>
          <h1>{article.cliente.email}</h1>
          <span className="date">${article.costo}</span>
      <ul>
          {
              article.diagnosticos.map(dx => {
                  return (
                      <Link key={dx.id} to={`/dx/${dx.id}`}>{dx.id}</Link>
                  );
              })
          }
=======
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
>>>>>>> master
      </ul>
      </div>
    );
  return <span> </span>;
};
export default connect(
  () => ({}),
  mapDispatchToProps
)(ArticleActions);
