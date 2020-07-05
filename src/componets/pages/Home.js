import React, { Fragment } from 'react';
import Search from '../users/Search';
import Users from '../users/Users';

export const Home = () => (
  //Return statement not needed since only a Fragment is returned
  <Fragment>
    <Search />
    <Users />
  </Fragment>
);

export default Home;
