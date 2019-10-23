import {
  EDITORVENTA_PAGE_LOADED,
  EDITORVENTA_PAGE_UNLOADED,
  EDITORVENTA_SUBMITTED,
  EDITORVENTA_ASYNC_START,
  UPDATE_FIELD_EDITORVENTA
} from '../constants/actionTypes';

export default (state = {}, action) => {
  switch (action.type) {
    case EDITORVENTA_PAGE_LOADED:
      return {
        ...state,
        articleSlug: action.payload ? action.payload.article.slug : '',
        title: action.payload ? action.payload.article.title : '',
        description: action.payload ? action.payload.article.description : '',
        body: action.payload ? action.payload.article.body : '',
        tagInput: '',
        tagList: action.payload ? action.payload.article.tagList : []
      };
    case EDITORVENTA_PAGE_UNLOADED:
      return {};
    case EDITORVENTA_SUBMITTED:
      return {
        ...state,
        inProgress: null,
        errors: action.error ? action.payload.errors : null
      };
    case EDITORVENTA_ASYNC_START:
      if (action.subtype === EDITORVENTA_SUBMITTED) {
        return { ...state, inProgress: true };
      }
      break;
    case UPDATE_FIELD_EDITORVENTA:
      return { ...state, [action.key]: action.value };
    default:
      return state;
  }

  return state;
};
