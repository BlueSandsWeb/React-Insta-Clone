import React from 'react';
import './LoginPage.css';

function LoginPage(props) {
  return (
      <div className="login-page">
        <form action="" className="login-form hidden" onSubmit={props.login}>
          <label htmlFor="username"> Username:
            <input type="text" name="username" placeholder="test@tester.com" value={props.user}/>
          </label>
          <label htmlFor="pass"> Password:
            <input type="text" name="pass" placeholder="Shhhh it's a secret" value={props.pass}/>
          </label>
          <button type="submit">login</button>
        </form>
      </div>
  );
}

export default LoginPage;