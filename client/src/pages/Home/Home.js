import React, { Component } from "react";
import '../../App.css';
import Header from '../../components/Header/Header';
import TeacherImg from '../../images/teacher.png';
import PrincipalImg from '../../images/principal.png';
import ParentsImg from '../../images/Parents.png';
// import ModalApp from '../../components/Modal/Modal';

export default class Home extends Component {
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
                                    <h5 className="card-title">For Educators</h5>
                                    <p className="card-text">Finally, an intuitive student data tracking system that works seamlessly around your schedule.<br /><br /><b>Easy to learn. Easy to use.</b></p>
                                    {/* <ModalApp /> See How it Works */}
                                    <a href="/" className="btn btn-outline-info">See How it Works</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-4 col-lg-3">
                            <div className="card">
                                <img className="card-img-top" src={ParentsImg} alt="Card cap" />
                                <div className="card-body">
                                    <h5 className="card-title">For Parents</h5>
                                    <p className="card-text">Support your child's learning with a visual tool built to make your life easier.<br /><br /><b>A slick interface just for parents.</b> </p>
                                    <a href="/" className="btn btn-outline-info">Coming Soon!</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-4 col-lg-3">
                            <div className="card">
                                <img className="card-img-top" src={PrincipalImg} alt="Card cap" />
                                <div className="card-body">
                                    <h5 className="card-title">For Administrators</h5>
                                    <p className="card-text">Assess standards, view trends among classrooms and grade levels, and keep up-to-date with your teachers.<br /><br /><b>Enterprise options available.</b></p>
                                    <a href="/" className="btn btn-outline-info">Coming Soon!</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}