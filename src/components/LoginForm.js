import React from "react";

class LoginForm extends React.Component {
  
  state = {
    username: '',
    password: ''
  }

  handleUsername = (e) => {
    this.setState({username: e.target.value})
  }

  handlePassword = (e) => {
    this.setState({password: e.target.value})
  }

  render() {
    // debugger;
    return (
      <form onSubmit={this.props.handleLogin.bind(this, this.state)}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" value={this.state.username} onChange={this.handleUsername}/>
          </label>
        </div>
        <div> 
          <label>
            Password
            <input id="password" name="password" type="password" value={this.state.password} onChange={this.handlePassword}/>
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
