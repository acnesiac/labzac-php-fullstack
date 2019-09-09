import ArticleActions from './DiagnosticoActions';
import { Link } from 'react-router-dom';
import React from 'react';

const DiagnosticoMeta = props => {
  const article = props.article;
  return (

    <div className="article-meta">

      
       
     

      <ArticleActions canModify={props.canModify} article={article} />

    </div>
  );
};

export default DiagnosticoMeta;
