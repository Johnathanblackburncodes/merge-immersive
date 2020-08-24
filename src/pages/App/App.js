import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import { getGitHubUser } from "../../Services/github-api";
import { getGUser } from "../../Services/user";
import SignupPage from "../SignupPage/SignupPage";
import LoginPage from "../LoginPage/LoginPage";
import EditProfilePage from "../EditProfilePage/EditProfilePage";
import userService from "../../utils/userService";
import HomePage from "../HomePage/HomePage";
import Error from "../Error/Error";

import AllUsersPage from "../AllUsersPage/AllUsersPage";
import UserDetail from "../UserDetail/UserDetail"

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: userService.getUser(),
      gUser: "",
      repos: "",
      repoName: "",
    };
  }
  async componentDidMount() {
    const { user } = await getGUser;
    const userData = await getGitHubUser(user);
    console.log(userData);
    this.setState({
      gUser: userData.avatar_url,
      repos: userData.repos,
      repoName: userData.repos.name,
    });
  }

  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  };

  handleSignUpOrLogin = () => {
    this.setState({ user: userService.getUser() });
  };

  render() {
    return (
      <>
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <HomePage
                handleLogout={this.handleLogout}
                user={this.state.user}
              />
            )}
          />
          <Route
            exact
            path="/signup"
            render={({ history }) => (
              <SignupPage
                history={history}
                handleSignUpOrLogin={this.handleSignUpOrLogin}
              />
            )}
          />
          <Route
            exact
            path="/login"
            render={(props) => (
              <LoginPage {...props} handleSignUpOrLogin={this.handleSignUpOrLogin} />
            )}
          />
          <Route path="/profile" render={() => <UserDetail user={this.state.user} />} />
          <Route
            path="/allusers"
            render={() => <AllUsersPage user={this.state.user} />}
          />
          <Route
            path="/edit" // :id?
            render={() => <EditProfilePage user={this.state.user} />}
          />
          <Error />
        </Switch>
      </>
    );
  }
}

export default App;
