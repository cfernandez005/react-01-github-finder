import React, { useContext } from 'react';
import UsersItem from './UsersItem';
import Spinner from '../layout/Spinner';
import GithubContext from '../../context/github/githubContext';

const Users = () => {
  //Hook brought in GithubContext
  //"useContext" hook needs to be brougt in from import React
  const githubContext = useContext(GithubContext);

  //Destructuring to initialize variables from githubContext
  const { loading, users } = githubContext;

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div style={userStyle}>
        {/**"map()" is a high order array function */}
        {/**"key" is needed so that each element in the map loop has an id*/}
        {users.map((user) => (
          <UsersItem key={user.id} user={user} />
        ))}
      </div>
    );
  }
};

const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem',
};

export default Users;
