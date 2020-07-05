import {
  DEFAULT_USERS,
  SEARCH_USERS,
  SET_LOADING,
  CLEAR_USERS,
  GET_USER,
  GET_REPOS,
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case DEFAULT_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    case SEARCH_USERS:
      //state is immutable, meaning that it can not be changed directly
      //to change state, it must be coppied first. Spread operator copies "..."
      return {
        ...state,
        //represents all users pulled from api
        users: action.payload,
        loading: false,
      };
    case GET_USER:
      return {
        ...state,
        user: action.payload,
        loading: false,
      };
    case CLEAR_USERS:
      return {
        ...state,
        users: [],
        loading: false,
      };
    case GET_REPOS:
      return {
        ...state,
        repos: action.payload,
        loading: false,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};
