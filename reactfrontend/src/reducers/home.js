import { HOME_PAGE_LOADED, HOME_PAGE_UNLOADED, SEARCH_HOME } from '../constants/actionTypes';
import agent from '../agent';

export default (state = {}, action) => {
  switch (action.type) {
    case HOME_PAGE_LOADED:
      return {
        ...state,
        tags: action.payload[0].tags
      };
    case SEARCH_HOME:
      return {
        ...state,
        tags : []
      };
    case HOME_PAGE_UNLOADED:
      return {};
    default:
      return state;
  }
};
