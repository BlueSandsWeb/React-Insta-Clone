import React from 'react';
import './LoginPage.css';


class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      test: this.props.test,
      username: '',
      pass: ''
    };
    console.log(this.props);
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  };

  handleLogin = (e) => {
    const user = this.state.username;
    localStorage.setItem('user', user);
    window.location.reload();
  };

  render() {
    return(
      <div className="login-page">
        <h1><img className="insta-name" src="https://fontmeme.com/images/instagram-new-logo.png" alt="" /></h1>
        <form action="" className="login-form hidden" onSubmit={this.handleLogin}>
          <label htmlFor="username"> Username:
            <input type="text" name="username" placeholder="test@tester.com" onChange={this.handleChange} value={this.state.username} />
          </label>
          <label htmlFor="pass"> Password:
            <input type="text" name="pass" placeholder="Shhhh it's a secret" onChange={this.handleChange} value={this.state.pass} />
          </label>
          <button type="submit" className="login-submit">login</button>
        </form>
      </div>
    );
  }
}

export default LoginPage;