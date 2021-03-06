import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => (
  <div>
    <header>
      Login first. I need your personal information.
    </header>
    <div>
      <form action="/login/facebook" method="GET">
        <button>Login with facebook</button>
      </form>
    </div>
    <div>
      <Link to="/">Go back to the Entrance</Link>
    </div>
    <div>
      <Link to="/main">main</Link>
    </div>
  </div>
);

export default Login;
