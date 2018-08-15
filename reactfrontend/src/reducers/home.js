import { HOME_PAGE_LOADED, HOME_PAGE_UNLOADED } from '../constants/actionTypes';
import agent from '../agent';

export default (state = {}, action) => {
  switch (action.type) {
    case HOME_PAGE_LOADED:
    agent.Articles.all();
      return {
        ...state,
        tags: action.payload[0].tags
      };
    case HOME_PAGE_UNLOADED:
      return {};
    default:
      return state;
  }
};
