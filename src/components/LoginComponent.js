import React from 'react';
import Background from '../gallery-2948052_960_720.jpg'
import users from '../users.json'
//import { Columns, Container } from 'react-bulma-components'

class LoginComponent extends React.Component{

  sectionStyle = {
    width: "100%",
    height: "400px",
    backgroundImage: 'url(${ Background })'
  }; 

  constructor(){
    super();
    this.state = {
      loginPage : true,
      invalidLogin : false,
      name: "",
      username: "",
      password: "",
      confirmPassword: "",
      invalidSignUp: false,
      passwordError: false,
      signUpSuccess: false
    };
    this.switchToLogin = this.switchToLogin.bind(this);
    this.switchToSignUp = this.switchToSignUp.bind(this);
    this.login = this.login.bind(this);
    this.signUp = this.signUp.bind(this);
  }

  switchToLogin(){
    if(!this.state.loginPage){
      this.setState({loginPage : true});
      this.setState({invalidSignUp : false});
      this.setState({passwordError : false});
      this.setState({signUpSuccess : false});
      this.setState({name : ""});
      this.setState({username : ""});
      this.setState({password : ""});
      this.setState({confirmPassword : ""});
    }
    
  }

  switchToSignUp(){
    if(this.state.loginPage){
      this.setState({loginPage : false});
      this.setState({invalidLogin : false});
    }
    
  }

  login(event){
    if(this.state.username === "" || this.state.password === ""){
      this.setState({invalidLogin : true});
    }else{
      var flag = false;
      for(let user in users){
        if(users[user].username === this.state.username && users[user].password === this.state.password){
          //login success
          this.props.onLogin(true, users[user].name);
          flag = true;
          break;
        }
      }
      if(!flag){
        this.setState({invalidLogin : true});
      }
    }
  }

  signUp(){
    if(this.state.username === "" || this.state.password === ""
      || this.state.name === "" || this.state.confirmPassword === ""){
        this.setState({invalidSignUp : true});
    }else if(this.state.password !== this.state.confirmPassword){
      this.setState({passwordError : true});
    }else{
      var obj = {
        username : this.state.username,
        name : this.state.name,
        password : this.state.password
      };
      users.push(obj);
      this.setState({signUpSuccess : true});
    }
  }
 
  render(){
    return (
      <div>
        <div>
          <nav className="navbar">
            <div className="container">
              <div className="navbar-brand">
                <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarMenu">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                  </a>
              </div>
              <div id="navbarMenu" className="navbar-menu">
                <div className="navbar-end">
                  <a className="navbar-item" onClick={this.switchToLogin}
                    style = {{"fontWeight" : this.state.loginPage && "bold"}}>Log In</a>
                  <a className="navbar-item" onClick={this.switchToSignUp}
                    style = {{"fontWeight" : !this.state.loginPage && "bold"}}>Sign Up</a>
                </div>
              </div>
            </div>
          </nav>
          {/* <!-- END NAV -->     */}
          <section className="is-fullheight">
              <div className="container has-text-centered">
                <div className="columns">
                  <div className="column is-two-thirds has-text-left is-clearfix">
                    <h1 className="title is-1">Image Finder</h1>
                    <img src={ Background } />
                  </div>
                  <div className="column is-one-third has-text-left" style = {{display : !this.state.loginPage && 'none'}}>
                    <br/>
                    <br/>
                    <form>
                      <div className="field">
                        <label className="label">User Name</label>
                        <div className="control">
                          <input className="input is-medium" name="username"
                            onChange={e => this.setState({username : e.target.value})} type="text"/>
                        </div>
                      </div>
                      <div className="field">
                        <label className="label">Password</label>
                        <div className="control">
                          <input className="input is-medium" name="password" 
                            onChange={e => this.setState({password : e.target.value})} type="password"/>
                        </div>
                      </div>
                    </form>
                    <br/>
                    <div className="control">
                      <button type="submit" onClick={this.login}
                        className="button is-link is-fullwidth has-text-weight-medium is-medium">Log In
                      </button>
                    </div>
                    <div className="field" style = {{display : !this.state.invalidLogin && 'none'}}>
                      <br/>
                      <p>
                        Invalid Username or Password
                      </p>
                    </div>
                  </div>
                  <div className="column is-one-third has-text-left" style = {{display : this.state.loginPage && 'none'}}>
                    <br/>
                    <br/>
                    <div className="field">
                      <label className="label">Name</label>
                      <div className="control">
                        <input className="input is-medium" onChange={e => this.setState({name : e.target.value})}
                          type="text" v-bind="userSignUpDetails.name"/>
                      </div>
                    </div>
                    <div className="field">
                      <label className="label">User Name</label>
                      <div className="control">
                        <input className="input is-medium" onChange={e => this.setState({username : e.target.value})}
                          type="text" v-bind="userSignUpDetails.username"/>
                      </div>
                    </div>
                    <div className="field">
                      <label className="label">Password</label>
                      <div className="control">
                        <input className="input is-medium" onChange={e => this.setState({password : e.target.value})}
                          type="text" v-bind="userSignUpDetails.password"/>
                      </div>
                    </div>
                    <div className="field">
                      <label className="label">Confirm Password</label>
                      <div className="control">
                        <input className="input is-medium" onChange={e => this.setState({confirmPassword : e.target.value})}
                          type="text" v-bind="userSignUpDetails.confirmPassword"/>
                      </div>
                    </div>
                    <div className="control">
                      <button type="submit" onClick={this.signUp}
                        className="button is-link is-fullwidth has-text-weight-medium is-medium">Sign Up
                      </button>
                    </div>
                    <div className="field" style = {{display : !this.state.invalidSignUp && 'none'}}>
                      <p>
                        All fields are mandatory
                      </p>
                    </div>
                    <div className="field" style = {{display : !this.state.passwordError && 'none'}}>
                      <p>
                        Password and confirm password does not match
                      </p>
                    </div>
                    <div className="field" style = {{display : !this.state.signUpSuccess && 'none'}}>
                      <p>
                        You have successfully Signed Up. Please Log In to continue.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            {/* <!-- </div> --> */}
          </section>
        </div>
      </div>
    );
  }
  
}

export default LoginComponent;
