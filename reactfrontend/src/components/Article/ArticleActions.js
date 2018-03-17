import { Link } from 'react-router-dom';
import React from 'react';
import agent from '../../agent';
import { connect } from 'react-redux';
import { DELETE_ARTICLE } from '../../constants/actionTypes';

const mapDispatchToProps = dispatch => ({
  onClickDelete: payload =>
    dispatch({ type: DELETE_ARTICLE, payload })
});

const ArticleActions = props => {
  const article = props.article;
  const del = () => {
    props.onClickDelete(agent.Articles.del(article.slug))
  };
  
  if (props.canModify) {
    return (

      <span>


        <ul  className="list-group">
        <li className="list-group-item list-group-item-action flex-column align-items-start active">
                <h1>{article.title}</h1>


                <Link to={`/@${article.author.username}`}>
                  <img src={article.author.image} alt={article.author.username} />
                </Link>

                <span className="date">
                  {new Date(article.createdAt).toDateString()}
                </span>
        </li>

        <li className="list-group-item">
          <Link
            to={`/editor/${article.slug}`}
            className="btn btn-outline-secondary btn-lg">
            <i className="ion-edit"></i> Edita paciente
          </Link>
        </li>

          <li className="list-group-item">
            <Link
            to={`/hourEditor/${article.slug}`}
            className="btn btn-outline-secondary btn-lg">
            <i className="ion-edit"></i> Evolucion grafica
            </Link>
          </li>

          <li className="list-group-item">
          <Link
          to={`/reacttable`}
          className="btn btn-outline-secondary btn-lg">
          <i className="ion-edit"></i> Tabla Evolucion
          </Link>
          </li>

          <li className="list-group-item">
          <Link
            to={`/hojaEnfermeria`}
            className="btn btn-outline-secondary btn-lg">
            <i className="ion-edit"></i> Presion arterial
          </Link>
          </li>

          <li className="list-group-item">
          <Link
            to={`/profilepage`}
            className="btn btn-outline-secondary btn-lg">
            <i className="ion-edit"></i> Sube tu Dx
          </Link>
          </li>

          <li className="list-group-item">
          <Link
            to={`/loadimage`}
            className="btn btn-outline-secondary btn-lg">
            <i className="ion-edit"></i> Visualiza Dx
          </Link>
          </li>
        </ul>       

      </span>
    );
  }

  return (
    <span>
    </span>
  );
};

export default connect(() => ({}), mapDispatchToProps)(ArticleActions);
