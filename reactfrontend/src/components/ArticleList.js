import ArticlePreview from './ArticlePreview';
import ListPagination from './ListPagination';
import React from 'react';
import {Link} from "react-router-dom";
const ArticleList = props => {
  if (!props.token) {
    return null;
  }
  if (!props.articles) {
    return (
      <div className="article-preview">Loading...</div>
    );
  }
  return (
    <div>
      <form className="form-inline">
        <div className=" article-preview form-group">
          <ul className="nav navbar-nav pull-xs-right">
            <li className="nav-item" >
              <Link to="/editorventa" className="btn btn-primary" >
                Nueva venta
              </Link>
            </li>
            <li className="nav-item" >
              <input
                  className="form-control form-control-md"
                  type="text"
                  placeholder="Buscar"
              />
            </li>
          </ul>
        </div>
      </form>
      {
        props.articles.map(article => {
          return (
            <ArticlePreview article={article} key={article.slug} />
          );
        })
      }
      <ListPagination
        pager={props.pager}
        articlesCount={props.count}
        currentPage={props.currentPage} />
    </div>
  );
};
export default ArticleList;
