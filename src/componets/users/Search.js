import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Search extends Component {
  state = {
    text: '',
  };

  static propTypes = {
    searchUsers: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired,
    setAlert: PropTypes.func.isRequired,
  };

  //Arrow function to change the state of text
  onChange = (e) => {
    //Basic method for a single input variable
    //this.setState({ text: e.target.value });
    //Key based mehtod for multiple input variables; email, name, etc.
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    if (this.state.text === '')
      this.props.setAlert('Please enter search input', 'light');
    else {
      //Needed to pass search input over to App.js
      this.props.searchUsers(this.state.text);
      //clears forms afterwards
      this.setState({ text: '' });
    }
  };

  render() {
    //Function now uses Destructuring to pass variables within Function parameter
    const { showClear, clearUsers } = this.props;

    return (
      <div>
        <form onSubmit={this.onSubmit} className='form'>
          <input
            type='text'
            name='text'
            placeholder='Search Users...'
            value={this.state.text}
            onChange={this.onChange}
          />
          <input
            type='submit'
            value='Search'
            className='btn btn-dark btn-block'
          />
        </form>
        {showClear && (
          <button className='btn.btn-light btn-block' onClick={clearUsers}>
            Clear
          </button>
        )}
      </div>
    );
  }
}

export default Search;
