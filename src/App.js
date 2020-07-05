import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './componets/layout/Navbar';
import Users from './componets/users/Users';
import User from './componets/users/User';
import Search from './componets/users/Search';
import Alert from './componets/layout/Alert';
import About from './componets/pages/About';
import axios from 'axios';
import './App.css';

class App extends Component {
  state = {
    users: [],
    //Object
    user: {},
    repos: [],
    loading: false,
    alert: null,
  };

  //"componentDidMount()" lyfecycle method for when the component loads
  //axios gets the response data from the URL parameter
  async componentDidMount() {
    //"setState" allows you to change the value of a state variable
    this.setState({ loading: true });
    const res = await axios.get(
      //URL query parameters set for deprecation by Github
      //`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}
      //&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
      `https://api.github.com/users`
    );
    this.setState({ users: res.data, loading: false });
  }

  //Serach GitHub users
  searchUsers = async (text) => {
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}`
    );
    this.setState({ users: res.data.items, loading: false });
  };

  //Gets a single GitHub user
  getUser = async (username) => {
    this.setState({ loading: true });
    const res = await axios.get(`https://api.github.com/users/${username}`);
    this.setState({ user: res.data, loading: false });
  };

  //Get users repos
  getUserRepos = async (username) => {
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc`
    );
    this.setState({ repos: res.data, loading: false });
  };

  //Clear users from state
  clearUsers = () => {
    this.setState({ users: [], loading: false });
  };
  //Sets an alert when a search is done with no data input
  setAlert = (msg, type) => {
    //Can be condensed since the variable names are the same as the names
    // of the variables they are set to
    //this.setState({ alert: { msg: msg, type: type } });
    this.setState({ alert: { msg, type } });
    //"setTimeout()" takes a function of when to timeout
    setTimeout(() => this.setState({ alert: null }), 5000);
  };

  render() {
    //Used to reproduce console error from propType setup in Navbar.js
    //const numbers = [1, 2, 3, 4];

    //Destructuring used to pass variables within Function parameter
    const { users, user, repos, loading } = this.state;

    return (
      <Router>
        <div className='App'>
          {/**Prop example */}
          {/**<Navbar title={numbers} />*/}
          <Navbar />
          <div className='container'>
            <Alert alert={this.state.alert} />
            <Switch>
              <Route
                exact
                path='/'
                render={(props) => (
                  <Fragment>
                    <Search
                      searchUsers={this.searchUsers}
                      clearUsers={this.clearUsers}
                      showClear={users.length > 0 ? true : false}
                      setAlert={this.setAlert}
                    />
                    <Users loading={loading} users={users} />
                  </Fragment>
                )}
              />
              <Route exact path='/about' component={About} />
              <Route
                exact
                path='/user/:login'
                render={(props) => (
                  <User
                    {...props}
                    getUser={this.getUser}
                    getUserRepos={this.getUserRepos}
                    user={user}
                    repos={repos}
                    loading={loading}
                  />
                )}
              />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
