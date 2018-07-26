import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Auth from "../Auth.js";
import "./Nav.css";
import logo from '../../teacherly.ico';

export default class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      user: [],
      errors: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSignup = this.handleSignup.bind(this);
    this.handleSignOut = this.handleSignOut.bind(this);
  }

  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }

  componentWillMount() {
    const rehydrate = JSON.parse(localStorage.getItem('someSavedState'))
    console.log(rehydrate)
    this.setState({ user: rehydrate })
  }


  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state.email);
    console.log(this.state.password);

    axios.post('/login', {
      email: this.state.email,
      password: this.state.password
    })
      .then(response => {

        console.log("Response: ");
        console.log(response);
        if (response.data.user.message) {
          this.setState({ errors: response.data.user.message });
        } else {
          Auth.authenticateUser(response.token);
          this.props.toggleAuthenticateStatus();
          console.log(response.data.user);
          this.props.toggleUser(response.data.user);
          this.setState({ user: response.data.user });
          localStorage.setItem('someSavedState', JSON.stringify(response.data.user))
        }
      }).catch(error => {
        console.log("Whoops. Something went wrong with the server.");
        console.log(error);
      })
  }

  handleSignOut(event) {
    event.preventDefault();
    console.log("Submitted");
    Auth.deauthenticateUser();
    this.props.toggleAuthenticateStatus();
  }

  handleSignup(event) {
    event.preventDefault();
    console.log(this.state.email);
    console.log(this.state.password);

    axios.post("/signup", {
      email: this.state.email,
      password: this.state.password
    })
      .then(response => {
        console.log(response);

        if (response.data.user.message) {
          this.setState({ errors: response.data.user.message });

        } else {
          console.log("Success!");

          Auth.authenticateUser(response.data.token);

          this.props.toggleAuthenticateStatus(response.data.user);


          this.setState({ user: response.data.user });
        }
      }).catch(error => {
        console.log("Sign in server error");
        console.log(error);
      })
  }

  render() {
    return (
      // <nav className="navbar navbar-top navbar-expand-md navbar-dark fixed-top bg-dark">
      //   <Link className="navbar-brand" to="/">
      //     <img src={logo} className="App-logo" alt="logo" />
      //   </Link>
      //   <span className="text-white mt-2"><h3>Teacherly</h3></span>
      //   {this.props.isAuth ? (
      //     <div>
      //       <p>Hello {this.state.user.first_name} {this.state.user.last_name}</p>
      //       <div className="form-group">
      //         <button type="submit" value="Submit" onClick={this.handleSignOut} className="btn btn-outline-info btn-block">Logout</button>
      //       </div>
      //     </div>
      //   ) : (
      //       <ul className="ml-auto mt-2 mt-md-0 my-2 my-sm-0">
      //         <li className="dropdown order-0">
      //           <button type="button" id="dropdownMenu1" data-toggle="dropdown" className="btn btn-sm btn-outline-info dropdown-toggle">Login <span className="caret"></span></button>
      //           <ul className="dropdown-menu dropdown-menu-right mt-2">
      //             <li className="px-3 py-2">
      //               <form className="form" onSubmit={this.handleSubmit}>
      //                 <div className="form-group">
      //                   <input id="emailInput" placeholder="Email" className="form-control form-control-sm" type="text" name="email" value={this.state.email} onChange={this.handleChange} />
      //                 </div>
      //                 <div className="form-group">
      //                   <input id="passwordInput" placeholder="Password" className="form-control form-control-sm" type="text" name="password" value={this.state.password} onChange={this.handleChange} required="" />
      //                 </div>
      //                 <div className="form-group">
      //                   <button type="submit" value="Submit" className="btn btn-sm btn-outline-info btn-block">Login</button>
      //                 </div>
      //                 {this.state.errors ? (<p> {this.state.errors} </p>) : (<p />)}
      //                 <div className="form-group text-center">
      //                   <small><Link to='#' data-toggle="modal" data-target="#modalPassword">Forgot password?</Link></small>
      //                 </div>
      //               </form>
      //             </li>
      //           </ul>
      //         </li>
      //         <li className="dropdown order-1 ml-1">
      //           <button type="button" id="dropdownMenu2" data-toggle="dropdown" className="btn btn-sm btn-outline-info dropdown-toggle">Sign up <span className="caret"></span></button>
      //           <ul className="dropdown-menu dropdown-menu-right mt-2">
      //             <li className="px-3 py-2">
      //               <form className="form" onSubmit={this.handleSignup}>
      //                 <div className="form-group">
      //                   <input id="emailInputSignup" placeholder="Email" className="form-control form-control-sm" type="text" name="email" value={this.state.email} onChange={this.handleChange} required="" />
      //                 </div>
      //                 <div className="form-group">
      //                   <input id="passwordInputSignup" placeholder="Password" className="form-control form-control-sm" type="password" required="" />
      //                   <small>Make it a good one.</small>
      //                 </div>
      //                 <div className="form-group">
      //                   <input id="passwordInput" placeholder="Confirm Password" className="form-control form-control-sm" type="password" name="password" value={this.state.password} onChange={this.handleChange} required="" />
      //                   <small>Required</small>
      //                 </div>
      //                 <div className="form-group">
      //                   <button type="submit" className="btn btn-sm btn-outline-info btn-block">Sign up</button>
      //                 </div>
      //               </form>
      //             </li>
      //           </ul>
      //         </li>
      //       </ul>
      //     )}
      // </nav>

      <nav className="navbar navbar-top navbar-expand-md navbar-dark fixed-top bg-dark">
        <Link className="navbar-brand" to="/">
          <img src={logo} className="App-logo" alt="logo" title="Home"/>
        </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <span className="text-white mt-2"><h3>Teacherly</h3></span>
        <div className="collapse navbar-collapse" id="navbarCollapse">

          {this.props.isAuth ? (

            <ul className="navbar-nav">
              <div className="dropdown mr-1">
                <div className="btn btn-sm btn-outline-info dropdown-toggle" type="div" id="dropdownMenuButtonUser" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  {this.state.user.first_name} {this.state.user.last_name}
                </div>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <Link className="dropdown-item" to="/teachers">Your Page</Link>
                  <Link className="dropdown-item" to="/logout">Log Out</Link>
                </div>
              </div>
              <li className="nav-item">
                <button type="submit" value="Submit" onClick={this.handleSignOut} className="btn btn-sm btn-outline-info btn-block">Logout</button>
              </li>
            </ul>

          ) : (

              <ul className="navbar-nav">
                <li className="dropdown">
                  <button type="button" id="dropdownMenu1" data-toggle="dropdown" className="btn btn-sm btn-outline-info dropdown-toggle">Login <span className="caret"></span></button>
                  <ul className="dropdown-menu dropdown-menu-right mt-2">
                    <li className="px-3 py-2">
                      <form className="form" onSubmit={this.handleSubmit}>
                        <div className="form-group">
                          <input id="emailInput" placeholder="Email" className="form-control form-control-sm" type="text" name="email" value={this.state.email} onChange={this.handleChange} />
                        </div>
                        <div className="form-group">
                          <input id="passwordInput" placeholder="Password" className="form-control form-control-sm" type="text" name="password" value={this.state.password} onChange={this.handleChange} required="" />
                        </div>
                        <div className="form-group">
                          <button type="submit" value="Submit" className="btn btn-sm btn-info btn-block">Login</button>
                        </div>
                        {this.state.errors ? (<p> {this.state.errors} </p>) : (<p />)}
                        <div className="form-group text-center">
                          <small><Link to='#' data-toggle="modal" data-target="#modalPassword">Forgot password?</Link></small>
                        </div>
                      </form>
                    </li>
                  </ul>
                </li>
                <li className="nav-item ml-3">
                  <Link className="btn btn-sm btn-outline-info" to='/signup'>Sign Up</Link>
                </li>
              </ul>
            )}
        </div>
      </nav >
    )
  }
}