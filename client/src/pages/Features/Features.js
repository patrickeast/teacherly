import React, { Component } from "react";
import '../../App.css';
import Header from '../../components/Header/Header.js';
import TechImg from '../../images/Tech.png';
import TrelloImg from '../../images/Trello.png';
import HomeImg from '../../images/Home.jpeg';

class Features extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">What is Teacherly?</h5>
                                    <p className="card-text"></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-around">
                        <div className="col-sm-6 col-md-4 col-lg-3">
                            <div className="card">
                                <img className="card-img-top" src={TechImg} alt="Card cap" />
                                <div className="card-body">
                                    <h5 className="card-title">Tech Used</h5>
                                    <ul className="card-text">
                                        <li>React Router</li>
                                        <li>Bootstrap</li>
                                        <li>JawsDB for MySQL DB</li>
                                        <li>Passport Local for Auth Handling</li>
                                        <li>Customized version of ChartJS for data visualization</li>
                                        <li>NightmareJS for testing (If I have time)</li>
                                        <li className="disabled">More to come...</li>
                                    </ul>
                                    <a href="https://github.com/patrickeast/teacherly" target="_blank" className="btn btn-outline-info">View the GitHub Repo.</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-4 col-lg-3">
                            <div className="card">
                                <img className="card-img-top" src={HomeImg} alt="Card cap" />
                                <div className="card-body">
                                    <h5 className="card-title">Wire Frames</h5>
                                    <p className="card-text">I uploaded my wire frames to Dropbox. I have detailed drawings of the two main pages, with comments on each image to discuss individual features.</p>
                                    <a href="https://www.dropbox.com/sh/owk4qfnq9a48649/AAC8AN3Paw214CH2m2cUsP9Za?dl=0" target="_blank" className="btn btn-outline-info">View Wire Frames</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-4 col-lg-3">
                            <div className="card">
                                <img className="card-img-top" src={TrelloImg} alt="Card cap" />
                                <div className="card-body">
                                    <h5 className="card-title">Trello Board</h5>
                                    <p className="card-text">Trello will be vital in keeping up-to-date with my tasks. I'm attempting to complete a lot here, even by only doing the Teacher "tier" of the product.</p>
                                    <a href="https://trello.com/b/RCKKnpBB/teacherly" target="_blank" className="btn btn-outline-info">View Trello Board</a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div >
        );
    }
}

export default Features;
