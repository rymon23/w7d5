import React from 'react';

class Login extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      username: '',
      password: '',
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.login(this.state)
      .then(() => this.props.history.push('./chirps'));
  }

  render() {
    return (
      <div className="login-form">
        <h2>Login</h2>
        <form>
          <label>Username
            <input 
              type="text"
              value={this.state.username}
              onChange={this.}/>
          </label>
        
          <button onClick={this.handleSubmit}>Login</button>
        </form>
      </div>
    );
  }

}

export default Login;