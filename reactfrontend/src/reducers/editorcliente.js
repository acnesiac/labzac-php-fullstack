import {
  EDITORCLIENTE_PAGE_LOADED,
  EDITORCLIENTE_PAGE_UNLOADED,
  EDITORCLIENTE_SUBMITTED,
  EDITORCLIENTE_ASYNC_START,
  UPDATE_FIELD_EDITORCLIENTE
} from '../constants/actionTypes';

export default (state = {}, action) => {
  switch (action.type) {
    case EDITORCLIENTE_PAGE_LOADED:
      return {
        ...state,
        articleSlug: action.payload ? action.payload.article.slug : '',
        title: action.payload ? action.payload.article.title : '',
        description: action.payload ? action.payload.article.description : '',
        body: action.payload ? action.payload.article.body : '',
        costo: action.payload ? action.payload.article.costo : '',
        tagInput: '',
        tagList: action.payload ? action.payload.article.tagList : []
      };
    case EDITORCLIENTE_PAGE_UNLOADED:
      return {};
    case EDITORCLIENTE_SUBMITTED:
      return {
        ...state,
        inProgress: null,
        errors: action.error ? action.payload.errors : null
      };
    case EDITORCLIENTE_ASYNC_START:
      if (action.subtype === EDITORCLIENTE_SUBMITTED) {
        return { ...state, inProgress: true };
      }
      break;
    case UPDATE_FIELD_EDITORCLIENTE:
      return { ...state, [action.key]: action.value };
    default:
      return state;
  }

  return state;
};
