import {
  EDITORVENTA_PAGE_LOADED,
  EDITORVENTA_PAGE_UNLOADED,
  VENTA_SUBMITTED,
  ASYNC_START,
  ADD_TAG,
  REMOVE_TAG,
  UPDATE_FIELD_EDITORVENTA
} from '../constants/actionTypes';

export default (state = {}, action) => {
  switch (action.type) {
    case EDITORVENTA_PAGE_UNLOADED:
      return {
        ...state,
        articleSlug: action.payload ? action.payload.article.slug : '',
        title: action.payload ? action.payload.article.title : '',
        description: action.payload ? action.payload.article.description : '',
        body: action.payload ? action.payload.article.body : '',
        tagInput: '',
        tagList: action.payload ? action.payload.article.tagList : []
      };
    case EDITORVENTA_PAGE_LOADED:
      return {};
    case VENTA_SUBMITTED:
      return {
        ...state,
        inProgress: null,
        errors: action.error ? action.payload.errors : null
      };
    case ASYNC_START:
      if (action.subtype === VENTA_SUBMITTED) {
        return { ...state, inProgress: true };
      }
      break;
    case ADD_TAG:
      return {
        ...state,
        tagList: state.tagList.concat([state.tagInput]),
        tagInput: ''
      };
    case REMOVE_TAG:
      return {
        ...state,
        tagList: state.tagList.filter(tag => tag !== action.tag)
      };
    case UPDATE_FIELD_EDITORVENTA:
      return { ...state, [action.key]: action.value };
    default:
      return state;
  }

  return state;
};
