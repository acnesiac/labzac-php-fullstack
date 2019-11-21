import ArticleList from '../ArticleList';
import React from 'react';
import agent from '../../agent';
import { connect } from 'react-redux';
import {Link} from "react-router-dom";
const mapStateToProps = state => ({
  ...state.articleList,
  token: state.common.token
});
const mapDispatchToProps = dispatch => ({
});
const MainView = props => {
  return (
    <div className="col-md-12">
      <ArticleList
        token = {props.token}
        pager={props.pager}
        articles={props.articles}
        loading={props.loading}
        articlesCount={props.articlesCount}
        currentPage={props.currentPage} />
    </div>
  );
};
export default connect(mapStateToProps, mapDispatchToProps)(MainView);
