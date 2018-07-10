import React, { Component } from "react";
import Header from "../../components/Header/Header.js";

export default class Signup extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="container">
                    <div className="row justify-content-around">
                        <div className="col-sm-10 col-md-6">
                            <div className="card bg-info text-white">
                                <div className="card-header">
                                    Help us guide your Teacherly experience.
                                </div>
                                <div className="card-title">
                                </div>
                                <div className="card-text">
                                    <form id="signin" name="signin" method="post" action="signin">
                                        <div class="input-field">
                                            <input name="email" placeholder="Email Address" type="text" class="text validate homeText" />
                                            <input name="firstname" placeholder="First Name" type="text" class="validate homeText" />
                                            <input name="lastname" placeholder="Last Name" type="text" class="validate homeText" />
                                            <input name="password" placeholder="Password" type="password" class="validate homeText" />
                                        </div>
                                        <br />
                                        <input className="btn btn-small btn-outline-light" type="submit" value="Sign in" />
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
