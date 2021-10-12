class LoginForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {login: '', password: ''};

      this.onChangeLogin = this.onChangeLogin.bind(this);
      this.onChangePassword = this.onChangePassword.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(event){
      alert(`${this.state.login}, добро пожаловать!`);
      event.preventDefault();
    }

    onChangePassword(event){
      this.setState({password: event.target.value});
    }

    onChangeLogin(event) {
      this.setState({login: event.target.value});
    }

    render() {
      return (
        <form onSubmit={this.onSubmit}>
          <p><label> Логин: <input type="text" name="login" value={this.state.login}
                           onChange={this.onChangeLogin}/></label></p>
          <p><label> Пароль: <input type="password" name="password" value={this.state.password}
                            onChange={this.onChangePassword}/></label></p>
          <p><input type="submit" value="Submit" /></p>
        </form>
      );
    }
  }

  ReactDOM.render(<LoginForm />,  document.getElementById('root'));