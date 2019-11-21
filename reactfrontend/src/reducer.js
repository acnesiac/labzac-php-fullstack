import article from './reducers/article';
import diagnostico from './reducers/diagnostico';
import articleList from './reducers/articleList';
import auth from './reducers/auth';
import { combineReducers } from 'redux';
import common from './reducers/common';
import editorventa from './reducers/editorventa';
import editor from './reducers/editor';
import home from './reducers/home';
import profile from './reducers/profile';
import settings from './reducers/settings';
import { routerReducer } from 'react-router-redux';

export default combineReducers({
  diagnostico,
  article,
  articleList,
  auth,
  common,
  editor,
  editorventa,
  home,
  profile,
  settings,
  router: routerReducer
});
