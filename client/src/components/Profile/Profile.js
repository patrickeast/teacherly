import React from "react";
import "./Profile.css";
import profileImg from "../../images/beagle.jpg";
import { Button } from "react-bootstrap";


const Profile = props => (
    <div>
        <div className="container">
            <div className="row m-y-2">
                <div className="col-lg-4 text-center">
                    <img className="profileImg img-fluid rounded-circle" src={profileImg} alt="Profile Pic" />
                    <label className="custom-file text-center">
                        <input type="file" id="file" className="custom-file-input" />
                        <span className="btn btn-outline-info custom-file-control"><h6 className="mb-0">Upload a photo</h6></span>
                    </label>
                </div>
                <div className="col-lg-8">
                    <ul className="nav nav-tabs">
                        <li className="nav-item">
                            <a className="nav-link active" href="#profile" data-toggle="tab" role="tab" aria-controls="profile" aria-selected="true">Profile</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#messages" data-toggle="tab" role="tab" aria-controls="messages" aria-selected="false">Messages
                                <span class="badge ml-2 badge-danger">3</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#edit" data-toggle="tab" role="tab" aria-controls="edit" aria-selected="false">Edit</a>
                        </li>
                    </ul>
                    <div className="tab-content">
                        <div className="tab-pane fade show active" id="profile">
                            <h4 className="mt-2">Patrick East</h4>
                            <div className="row">
                                <div className="col-12">
                                    <h6><strong>About</strong></h6>
                                    <p>
                                        Hi, I'm Patrick. I'm not a teacher, but I did create this app! Thanks for watching the overview.
                                    </p>
                                    <h6><strong>Hobbies:</strong></h6>
                                    <span className="mr-2 badge badge-pill badge-primary">Pop Punk Music</span>
                                    <span className="mr-2 badge badge-pill badge-success">Being Vegan?</span>
                                    <span className="mr-2 badge badge-pill badge-danger">Stephen King novels</span>
                                    <span className="mr-2 badge badge-pill badge-warning">Coding</span>
                                    <span className="mr-2 badge badge-pill badge-info">Digital Illustration</span>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="messages">
                            <h4 className="mt-2">Recent Messages &amp; Notifications</h4>
                            <div className="alert alert-success alert-dismissable">
                                <a className="panel-close close" data-dismiss="alert">×</a> You added a new roster!
                            </div>
                            <div className="alert alert-warning alert-dismissable">
                                <a className="panel-close close" data-dismiss="alert">×</a> You added a new test. Time to grade!
                            </div>
                            <div className="alert alert-info alert-dismissable">
                                <a className="panel-close close" data-dismiss="alert">×</a> Don't forget to verify your email address.
                            </div>
                        </div>
                        <div className="tab-pane fade" id="edit">
                            <h4 className="mt-2">Edit Profile</h4>
                            <form>
                                <div className="form-group row">
                                    <label className="col-lg-3 col-form-label form-control-label">First name</label>
                                    <div className="col-lg-9">
                                        <input className="form-control" type="text" placeholder="Jane" />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-lg-3 col-form-label form-control-label">Last name</label>
                                    <div className="col-lg-9">
                                        <input className="form-control" type="text" placeholder="Bishop" />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-lg-3 col-form-label form-control-label">Email</label>
                                    <div className="col-lg-9">
                                        <input className="form-control" type="email" placeholder="email@gmail.com" />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-lg-3 col-form-label form-control-label">About Me</label>
                                    <div className="col-lg-9">
                                        <textarea className="form-control" type="text" placeholder="Tell everyone a bit about yourself. This will show up when parents or administrators search for you." />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-lg-3 col-form-label form-control-label">Time Zone</label>
                                    <div className="col-lg-9">
                                        <select id="user_time_zone" className="form-control" size="0">
                                            <option value="Hawaii">(GMT-10:00) Hawaii</option>
                                            <option value="Alaska">(GMT-09:00) Alaska</option>
                                            <option value="Pacific Time (US &amp; Canada)">(GMT-08:00) Pacific Time (US &amp; Canada)</option>
                                            <option value="Arizona">(GMT-07:00) Arizona</option>
                                            <option value="Mountain Time (US &amp; Canada)">(GMT-07:00) Mountain Time (US &amp; Canada)</option>
                                            <option value="Central Time (US &amp; Canada)" selected="selected">(GMT-06:00) Central Time (US &amp; Canada)</option>
                                            <option value="Eastern Time (US &amp; Canada)">(GMT-05:00) Eastern Time (US &amp; Canada)</option>
                                            <option value="Indiana (East)">(GMT-05:00) Indiana (East)</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-lg-3 col-form-label form-control-label">New Password</label>
                                    <div className="col-lg-9">
                                        <input className="form-control" type="password" placeholder="8-20 characters. Must use uppercase and lowercase letters." />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-lg-3 col-form-label form-control-label">Confirm password</label>
                                    <div className="col-lg-9">
                                        <input className="form-control" type="password" placeholder="8-20 characters. Must use uppercase and lowercase letters." />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-lg-3 col-form-label form-control-label"></label>
                                    <div className="col-lg-9">
                                        <Button type="reset" bsSize="small" bsStyle="secondary">
                                            Reset
                                        </Button>
                                        <Button bsType="reset" bsSize="small" bsStyle="primary">
                                            Save Changes
                                        </Button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <hr />
    </div>
);

export default Profile;