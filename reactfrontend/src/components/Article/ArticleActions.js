import { Link } from "react-router-dom";
import React from "react";
import agent from "../../agent";
import { connect } from "react-redux";
import ArticlePreview from "../ArticlePreview";

const mapDispatchToProps = dispatch => ({

});

const ArticleActions = props => {
  const article = props.article;

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
          <h1>{article.title}</h1>
          <h1>{article.description}</h1>
          <span className="date">${article.costo}</span>
      <ul>
          {
              article.diagnosticos.map(dx => {
                  return (
                      <Link key={dx.id} to={`/dx/${dx.id}`}>{dx.id}</Link>
                  );
              })
          }
      </ul>
      </div>
    );
  return <span> </span>;
};
export default connect(
  () => ({}),
  mapDispatchToProps
)(ArticleActions);
