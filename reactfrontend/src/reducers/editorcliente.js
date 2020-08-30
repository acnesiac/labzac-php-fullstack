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
        nombre: action.payload ? action.payload.cliente.nombre : '',
        email: action.payload ? action.payload.cliente.email : '',
        direccion: action.payload ? action.payload.article.direccion : ''
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
