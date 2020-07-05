//"Component" is no longer needed with function conversion
//import React, { Component } from 'react';
import React from 'react';
import UsersItem from './UsersItem';
import Spinner from '../layout/Spinner';
import PropTypes from 'prop-types';

//Changing to function
//export class Users extends Component {

//Function now uses Destructuring to pass variables within Function parameter
const Users = ({ users, loading }) => {
  //If statement for spinner
  if (loading) {
    return <Spinner />;
  } else {
    return (
      /*Hard-coded State no longer needed since users will not come in as props
  in Axios call in App.js
    state = {
    users: [
      {
        id: '1',
        login: 'mojombo',
        avatar_url: 'https://avatars0.githubusercontent.com/u/1?v=4',
        html_url: 'https://github.com/mojombo',
      },
      {
        id: '2',
        login: 'defunkt',
        avatar_url: 'https://avatars0.githubusercontent.com/u/2?v=4',
        html_url: 'https://github.com/defunkt',
      },
      {
        id: '3',
        login: 'pjhyet',
        avatar_url: 'https://avatars0.githubusercontent.com/u/3?v=4',
        html_url: 'https://github.com/pjhyet',
      },
    ],
  };*/

      //"render()" no longer needed with function conversion
      //render() {

      //"return" not needed forTernary operator
      //return (
      <div style={userStyle}>
        {/**"map()" is a high order array function */}
        {/**"key" is needed so that each element in the map loop has an id*/}
        {/**"state." must be converted to "props."
        {this.state.users.map((user) => (*/}
        {users.map((user) => (
          <UsersItem key={user.id} user={user} />
        ))}
      </div>
    );
  }
};

Users.propTypes = {
  users: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
};

const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem',
};

export default Users;
