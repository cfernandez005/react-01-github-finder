//"Component" is no longer needed with function conversion
//import React, { Component } from 'react';
import React from 'react';
import PropTypes from 'prop-types';
//Exported from react-router-dom which has a lot of exports that are not default
//Curly braces are needed
import { Link } from 'react-router-dom';

//Function requires props to be passes for const varible
//const Navbar = (props) => {
//Function now uses Destructuring to pass variables within Function parameter
const Navbar = ({ title }) => {
  //Method to generate values to props
  /*No longer needed with function conversion
  static defaultProps = {
    title: 'Github Finder',
  };

  static propTypes = {
    title: PropTypes.string.isRequired,
  };*/

  //"render()" no longer needed for with function conversion
  //render() {
  return (
    <nav className='navbar bg-primary'>
      <h1>
        {/*<i> tag used to use icon from fontawesome.com
          "&nbsp;" used to create a space charater */}
        <i className='fab fa-github'>&nbsp;</i>
        {/**Prop example */}
        {/**this" no longer needed with function conversion*/}
        {/*this.props.title*/}
        {title}
      </h1>
      <ul>
        <li>
          {/**react-router-dom uses "to" instead of "a href links.
           * This way, state can be saved between page navigation" */}
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
      </ul>
    </nav>
  );
  //}
};

//States are set below the function for Functions
Navbar.defaultProps = {
  title: 'Github Finder',
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Navbar;
