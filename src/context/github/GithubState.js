import React, { useReducer } from 'react';
import axios from 'axios';
import GithubContext from './githubContext';
import GithubReducer from './githubReducer';
import {
  DEFAULT_USERS,
  SEARCH_USERS,
  SET_LOADING,
  CLEAR_USERS,
  GET_USER,
  GET_REPOS,
} from '../types';

const GithubState = (props) => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(GithubReducer, initialState);

  //Deafult Users from github
  const defaultUsers = async () => {
    setLoading();
    const res = await axios.get(`https://api.github.com/users`);
    dispatch({
      type: DEFAULT_USERS,
      payload: res.data,
    });
  };

  //Search User
  const searchUsers = async (text) => {
    //Does not need a parameter value since the function in githubReducer sets to "true"
    setLoading();
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}`
    );
    dispatch({
      type: SEARCH_USERS,
      payload: res.data.items,
    });
  };

  //Get User
  const getUser = async (username) => {
    setLoading();
    const res = await axios.get(`https://api.github.com/users/${username}`);
    dispatch({
      type: GET_USER,
      payload: res.data,
    });
  };

  //Get Repos
  const getUserRepos = async (username) => {
    setLoading();
    const res = await axios.get(
      `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc`
    );
    dispatch({
      type: GET_REPOS,
      payload: res.data,
    });
  };

  //Clear Users
  const clearUsers = () => dispatch({ type: CLEAR_USERS });

  //Set Loading
  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    //Anthing that needs to be availble under githubContext needs to be add here
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
        defaultUsers,
        searchUsers,
        clearUsers,
        getUser,
        getUserRepos,
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};

export default GithubState;
