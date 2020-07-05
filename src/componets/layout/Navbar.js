import React from 'react';
import PropTypes from 'prop-types';
//Exported from react-router-dom which has a lot of exports that are not default
//Curly braces are needed
import { Link } from 'react-router-dom';

//Function now uses Destructuring to pass variables within Function parameter
const Navbar = ({ title }) => {
  return (
    <nav className='navbar bg-primary'>
      <h1>
        <i className='fab fa-github'>&nbsp;</i>
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
};

//States are set below the function for Functions
Navbar.defaultProps = {
  title: 'Github Finder',
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Navbar;
