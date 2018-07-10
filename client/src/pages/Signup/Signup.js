import React, { Component } from "react";
import Header from "../../components/Header/Header.js";

export default class Signup extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="container">
                    <div className="row justify-content-around">
                        <div className="col-sm-10 col-md-8">
                            <div className="card bg-info text-white mb-3">
                                <div className="card-header text-center">
                                    <h1>Help us guide your Teacherly experience.</h1>
                                </div>
                                <div className="card-title">
                                </div>
                                <div className="card-text">
                                    <form id="singup" name="signup" method="post" action="/signup">
                                        <div className="row justify-content-around">
                                            <div className="col-11">
                                                <div className="row">
                                                    <div className="col">
                                                        <div className="form-group">
                                                            <label for="name">What's your first name?</label>
                                                            <input name="firstname" placeholder="First Name" type="text" className="form-control form-control-sm" />
                                                        </div>
                                                    </div>
                                                    <div className="col">
                                                        <div className="form-group">
                                                            <label for="name">What's your last name?</label>
                                                            <input name="lastname" placeholder="Last Name" type="text" className="form-control form-control-sm" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <label for="email">Email Address</label>
                                                    <input className="form-control form-control-sm" aria-describedby="emailHelp" name="email" placeholder="Email Address" type="text" />
                                                    <small id="emailHelp" className="form-text text-warning">We'll never share your email with anyone else.</small>
                                                </div>
                                                <div className="row">
                                                    <div className="col">
                                                        <div className="form-group">
                                                            <label for="password">Choose a secure password.</label>
                                                            <input name="password" placeholder="Password" type="password" className="form-control form-control-sm" />
                                                        </div>
                                                    </div>
                                                    <div className="col">
                                                        <div className="form-group">
                                                            <label for="password">Re-type your password.</label>
                                                            <input name="password" placeholder="Password" type="password" className="form-control form-control-sm" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <label for="organization">How will you use Teacherly?</label>
                                                    <select className="form-control form-control-sm" aria-describedby="role" name="role" placeholder="Choose a role" type="text">
                                                        <option>Choose a role...</option>
                                                        <option>Teacher</option>
                                                        <option className="disabled">Parent/Guardian of a student</option>
                                                        <option className="disabled">Administrator</option>
                                                    </select>
                                                </div>
                                                <div className="form-group">
                                                    <label for="organization">How did you hear about us?</label>
                                                    <select className="form-control form-control-sm" aria-describedby="role" name="role" placeholder="Choose a role" type="text">
                                                        <option>Options...</option>
                                                        <option>DU's Full Stack Web Development Certification Bootcamp</option>
                                                        <option className="disabled">Teacher or School</option>
                                                        <option className="disabled">Google Search</option>
                                                    </select>
                                                </div>
                                                <input className="btn btn-sm btn-outline-light mb-3" type="submit" value="Sign Up!" />
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
