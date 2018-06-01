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
 <div className="nav-item active">
                <h1>{article.title}</h1>


                <Link to={`/@${article.author.username}`}>
                 
                </Link>

                <span className="date">
                  {new Date(article.createdAt).toDateString()}
                </span>
        </div>

<nav class="navbar navbar-expand-lg navbar-light bg-light">
 <div class="collapse navbar-collapse" id="navbarNav">
        <ul  className="navbar-nav list-unstyled" >
       
        <li className="nav-item active">
          <Link
            to={`/editor/${article.slug}`}
            className="btn btn-outline-secondary btn-md">
            <i className="ion-edit"></i> Visualiza imagen
          </Link>
        </li>

    


          <li className="nav-item active">
          <Link
            to={`/profilepage`}
            className="btn btn-outline-secondary btn-md">
            <i className="ion-edit"></i> Sube tu Dx
          </Link>
          </li>

          <li className="nav-item active">
          <Link
            to={`/loadimage`}
            className="btn btn-outline-secondary btn-md">
            <i className="ion-edit"></i> Visualiza Dx
          </Link>
          </li>
        </ul>  
        </div>
      </nav>     

      </span>
    );
  }

  return (
    <span>
    </span>
  );
};

export default connect(() => ({}), mapDispatchToProps)(ArticleActions);
