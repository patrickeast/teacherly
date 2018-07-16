import React, { Component } from "react";
import '../../App.css';
import Header from '../../components/Header/Header.js';
import TechImg from '../../images/Tech.png';
import TrelloImg from '../../images/Trello.png';
import HomeImg from '../../images/Home.jpeg';

export default class Features extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <div className="card bg-white text-info">
                                <div className="card-header">
                                    <h4 className="mb-0">What is Teacherly?</h4>
                                </div>
                                <div class="card-body">
                                    <h5 class="card-title">At its core, Teacherly is a student data tracker.</h5>
                                    <p class="card-text">Teacherly is a data tracker and visualization tool for teachers. Its primary use is for teachers,
                                    but as I built out the idea with my wife (a 5th grade teacher), it became apparent that there are three tiers to this
                                        product -- a <b>Teacher</b> tier, a <b>Parent</b> tier, and an <b>Administrator</b> tier.
                                        <br /><br />
                                        I'll only be working on the Teacher app for this project, since it will have all of the main components necessary to
                                        create the other two tiers. The teachers will be able to create an account, defining their name, school, subject, and email
                                        address. Once created, the app will take the user to their own page with a Profile area up top and the main features of the
                                        app below that in a tabbed card container.
                                        <br /><br /> On the first tab, teachers will be able to import their class rosters, update the rosters live on-screen to add/remove
                                        students, and export the roster into a .csv. This will make the primary table for the app.
                                        <br /> <br />On the second tab, teachers will be able to add a test for the entire class, with an editable table on-screen for the
                                        test questions, test possible points, and test given points. They will also be able to grade a test for a specific student.
                                        <br /><br />On the third tab, teachers will be able to select a student (or multiple students), and a test (or multiple tests), and
                                        chartJS will visualize scores and data for them. This is meant to be a quick and easy overview for the teacher to be able to
                                        assess standards, compare students, and get reports.
                                        </p>
                                </div>
                            </div>
                        </div>
                    </div>
                <br />
                <br />
                <div className="row justify-content-around">
                    <div className="col-sm-6 col-md-4">
                        <div className="card">
                            <img className="card-img-top" src={TechImg} alt="Card cap" />
                            <div className="card-body">
                                <h5 className="card-title">Tech Used</h5>
                                <div className="card-text">
                                    <p>HTML, CSS, Bootstrap, JavaScript, React.js, React Router, Chart.js, MySQL, JawsDB, Passport-Local, GitHub, Heroku</p>
                                </div>
                                <a href="https://github.com/patrickeast/teacherly" target="_blank" rel="noopener noreferrer" className="btn btn-outline-info">View the GitHub Repo.</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-4">
                        <div className="card">
                            <img className="card-img-top" src={HomeImg} alt="Card cap" />
                            <div className="card-body">
                                <h5 className="card-title">Wire Frames</h5>
                                <p className="card-text">I uploaded my wire frames to Dropbox. I have detailed drawings of the two main pages, with comments on each image to discuss individual features.</p>
                                <a href="https://www.dropbox.com/sh/owk4qfnq9a48649/AAC8AN3Paw214CH2m2cUsP9Za?dl=0" target="_blank" rel="noopener noreferrer" className="btn btn-outline-info">View Wire Frames</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-4">
                        <div className="card">
                            <img className="card-img-top" src={TrelloImg} alt="Card cap" />
                            <div className="card-body">
                                <h5 className="card-title">Trello Board</h5>
                                <p className="card-text">Trello will be vital in keeping up-to-date with my tasks. I'm attempting to complete a lot here, even by only doing the Teacher "tier" of the product.</p>
                                <a href="https://trello.com/b/RCKKnpBB/teacherly" target="_blank" rel="noopener noreferrer" className="btn btn-outline-info">View Trello Board</a>
                            </div>
                        </div>
                    </div>
                </div>

            </div >
            </div >
        );
    }
}