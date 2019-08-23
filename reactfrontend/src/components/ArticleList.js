import ArticlePreview from './ArticlePreview';
import ListPagination from './ListPagination';
import React from 'react';
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


      {
        props.articles.map(article => {
          return (
            <ArticlePreview article={article} key={article.slug} />
          );
        })
      }
      <ListPagination
        pager={props.pager}
        articlesCount={props.articlesCount}
        currentPage={props.currentPage} />
    </div>
  );
};
export default ArticleList;
