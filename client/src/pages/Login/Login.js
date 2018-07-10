import React, { Component } from "react";
import Header from "../../components/Header/Header.js";

export default class Login extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="container">
                    <div className="row justify-content-around">
                        <div className="col-sm-10 col-md-6">
                            <div className="card bg-info text-white">
                                <div className="card-header text-center">
                                    <h1>Welcome back! Please sign in.</h1>
                                </div>
                                <div className="card-title">
                                </div>
                                <div className="card-text">
                                    <form id="signin" name="signin" method="post" action="/signin">
                                        <div className="row justify-content-around">
                                            <div className="col-11">
                                                <div className="form-group">
                                                    <label for="email">Email Address</label>
                                                    <input className="form-control" aria-describedby="emailHelp" name="email" placeholder="Email Address" type="text" />
                                                </div>
                                                <div className="form-group">
                                                    <label for="password">Password</label>
                                                    <input className="form-control" aria-describedby="passwordHelp" name="password" placeholder="Password" type="password" />
                                                    <small id="passwordHelp" class="form-text text-white">Forgot your password? Click <a href="/" className="text-white">here</a> to reset it.</small>
                                                </div>
                                                <div className="text-center">
                                                    <input className="btn btn-sm btn-outline-light mb-2" type="submit" value="Sign in" />
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}
