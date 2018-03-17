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
        <span>
          <Link
            to={`/editor/${article.slug}`}
            className="btn btn-outline-secondary btn-sm">
            <i className="ion-edit"></i> Edita paciente
          </Link>
        </span>
        
        <span>
          <Link
          to={`/hourEditor/${article.slug}`}
          className="btn btn-outline-secondary btn-sm">
          <i className="ion-edit"></i> Evolucion ingreso grafica
          </Link>

          <Link
          to={`/reacttable`}
          className="btn btn-outline-secondary btn-sm">
          <i className="ion-edit"></i> Tabla Evolucion
          </Link>

          <Link
            to={`/hojaEnfermeria`}
            className="btn btn-outline-secondary btn-sm">
            <i className="ion-edit"></i> Presion arterial
          </Link>

          <Link
            to={`/profilepage`}
            className="btn btn-outline-secondary btn-sm">
            <i className="ion-edit"></i> Sube Dx
          </Link>


          <Link
            to={`/loadimage`}
            className="btn btn-outline-secondary btn-sm">
            <i className="ion-edit"></i> Visualiza Dx
          </Link>

        </span>
       

      </span>
    );
  }

  return (
    <span>
    </span>
  );
};

export default connect(() => ({}), mapDispatchToProps)(ArticleActions);
