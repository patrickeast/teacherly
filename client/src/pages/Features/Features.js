import React, { Component } from "react";
import '../../App.css';
import Header from '../../components/Header/Header.js';
import TeacherImg from '../../images/teacher.png';
import PrincipalImg from '../../images/principal.png';
import ParentsImg from '../../images/Parents.png';

class Features extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="container-fluid">
                    <div className="row justify-content-around">
                        <div className="col-sm-6 col-md-4 col-lg-3">
                            <div className="card">
                                <img className="card-img-top" src={TeacherImg} alt="Card cap" />
                                <div className="card-body">
                                    <h5 className="card-title">Overview</h5>
                                    <p className="card-text">Finally, an intuitive student data tracking system that works seamlessly around your schedule.<br /><br /><b>Easy to learn. Easy to use.</b></p>
                                    <a href="#more" className="btn btn-outline-info">Read More</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-4 col-lg-3">
                            <div className="card">
                                <img className="card-img-top" src={ParentsImg} alt="Card cap" />
                                <div className="card-body">
                                    <h5 className="card-title">Wire Frames</h5>
                                    <p className="card-text">Support your child's learning with a visual tool built to make your life easier.<br /><br /><b>A slick interface just for parents.</b> </p>
                                    <a href="https://www.dropbox.com/sh/owk4qfnq9a48649/AAC8AN3Paw214CH2m2cUsP9Za?dl=0" className="btn btn-outline-info">View Wire Frames</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-4 col-lg-3">
                            <div className="card">
                                <img className="card-img-top" src={PrincipalImg} alt="Card cap" />
                                <div className="card-body">
                                    <h5 className="card-title">Trello Board</h5>
                                    <p className="card-text">Assess standards, view trends among classrooms and grade levels, and keep up-to-date with your teachers.<br /><br /><b>Enterprise options available.</b></p>
                                    <a href="https://trello.com/b/RCKKnpBB/teacherly" className="btn btn-outline-info">View Trello Board</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <a name="#more"></a>
                    <div className="row">
                        <div className="col-12">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Project Overview</h5>
                                    <p className="card-text">Assess standards, view trends among classrooms and grade levels, and keep up-to-date with your teachers.<br /><br /><b>Enterprise options available.</b></p>
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
