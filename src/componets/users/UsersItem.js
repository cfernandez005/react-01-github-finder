//"Component" is no longer needed with function conversion
//import React, { Component } from 'react';
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

//Method to generate values to props
/*No longer needed with function conversion
static propTypes = {
  user: PropTypes.object.isRequired,
};*/

//Changing to function since this Component no longer has state
//class UsersItem extends Component {

//Function requires props to be passes for const varible
//const UsersItem = (props) => {
//Function now uses Destructuring to pass variables within Function parameter
const UsersItem = ({ user: { login, avatar_url, html_url } }) => {
  //Constructor method
  /*constructor() {
    //"super()" is required in order for the constructor to fire off
    //when the component loads in the page
    super();
    //JavaScript object
    this.state = {
      id: 'id',
      login: 'mojombo',
      avatar_url: 'https://avatars0.githubusercontent.com/u/1?v=4',
      html_url: 'https://github.com/mojombo',
    };
  }*/

  /*Alternative to Constructor method.
  state = {
    id: 'id',
    login: 'mojombo',
    avatar_url: 'https://avatars0.githubusercontent.com/u/1?v=4',
    html_url: 'https://github.com/mojombo',
  };*/

  //"render()" no longer needed with function conversion
  //render() {
  //const variable used so that "this.state" does not have to be typed out
  //for each state item specified

  //"this" is no longe needed with function conversion
  //const { login, avatar_url, html_url } = this.props.user;

  //const variable format for function
  /*This const variable's purpose can now be written within Function parameter
  const { login, avatar_url, html_url } = props.user;*/

  return (
    <div className='card text-center'>
      <img
        src={avatar_url}
        alt=''
        className='round-img'
        style={{ width: '60px' }}
      />
      <h3>{login}</h3>
      <div>
        {/**Replacing More button link with different functionality
        <a href={html_url} className='btn btn-dark btn-sm my-1'>
          More
        </a> */}
        <Link to={`/user/${login}`} className='btn btn-dark btn-sm my-1'>
          More
        </Link>
      </div>
    </div>
  );
  //}
};

//States are set below the function for Functions
UsersItem.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UsersItem;
