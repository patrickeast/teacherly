import React, { Component } from "react";
import "./index.css";
import { Form, FormControl, FormGroup, ControlLabel, Col, Button } from "react-bootstrap";

export default class Contact extends Component {
    constructor(props, context) {
        super(props, context);

        this.handleChange = this.handleChange.bind(this);

        this.state = {
            value: ''
        };
    }

    getValidationState() {
        const length = this.state.value.length;
        if (length > 10) return 'success';
        else if (length > 5) return 'warning';
        else if (length > 0) return 'error';
        return null;
    }

    handleChange(e) {
        this.setState({ value: e.target.value });
    }


    render() {
        return (
            <div className="Contact-header bg">
                <div className="row justify-content-center">
                    <div className="col-11 col-sm-8 col-md-6">
                        <div className="card bg-transparent mt-4 mb-5">
                            <div className="card-header text-center">
                                <h1>Contact Teacherly</h1>
                            </div>
                            <div className="card-body">
                                <div className="card-title ml-2 mr-2">
                                    <p>Do you have any questions? We'd love to hear from you. Please fill out the form below, and we'll get back to you as soon as possible.</p>
                                    <div className="card-text">
                                        <Form horizontal>
                                            <FormGroup className="contactFields" controlId="formHorizontalName">
                                                <Col componentClass={ControlLabel} sm={2}>
                                                    Name
                                                    </Col>
                                                <Col sm={12}>
                                                    <FormControl className="bg-light" type="text" placeholder="Name" />
                                                </Col>
                                            </FormGroup>

                                            <FormGroup className="contactFields" controlId="formHorizontalEmail">
                                                <Col componentClass={ControlLabel} sm={4}>
                                                    Email
                                                    </Col>
                                                <Col sm={12}>
                                                    <FormControl className="bg-light" type="email" placeholder="Email" />
                                                </Col>
                                            </FormGroup>

                                            <FormGroup className="contactFields" controlId="formControlsSelect">
                                                <Col componentClass={ControlLabel} sm={10}>
                                                    Role
                                                    </Col>
                                                <Col sm={12}>
                                                    <FormControl className="bg-light" componentClass="select" placeholder="select">
                                                        <option value="select">Parent</option>
                                                        <option value="select">Teacher</option>
                                                        <option value="select">Administrator</option>
                                                    </FormControl>
                                                </Col>
                                            </FormGroup>

                                            <FormGroup className="contactFields" controlId="formControlsTextarea">
                                                <Col componentClass={ControlLabel} sm={10}>
                                                    Message
                                                    </Col>
                                                <Col sm={12}>
                                                    <FormControl className="bg-light" componentClass="textarea" placeholder="Leave a message. We're here to help." />
                                                </Col>
                                            </FormGroup>

                                            <FormGroup>
                                                <Col smOffset={0} sm={12}>
                                                    <Button className="btn-sm btn-light" type="submit">Submit</Button>
                                                </Col>
                                            </FormGroup>
                                        </Form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}