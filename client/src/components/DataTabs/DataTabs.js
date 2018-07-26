import React from "react";
import "./DataTabs.css";
import { Table, Button, ButtonToolbar } from "react-bootstrap";

class DataTabs extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            inputLinkClicked: false
        }
    }

    handleAddSecondInput() {
        this.setState({
            inputLinkClicked: true
        })
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row mt-2">
                        <div className="col-lg-12">
                            <ul className="nav nav-tabs">
                                <li className="nav-item">
                                    <a className="nav-link active" href="#roster" data-toggle="tab" role="tab" aria-controls="roster" aria-selected="true">Students</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#grades" data-toggle="tab" role="tab" aria-controls="grades" aria-selected="false">Tests</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#visual" data-toggle="tab" role="tab" aria-controls="visual" aria-selected="false">Visual</a>
                                </li>
                            </ul>
                            <div className="tab-content">
                                <div className="tab-pane fade show active" id="roster">
                                    <h4 className="mt-2">Student Roster</h4>
                                    <div className="row">
                                        <Table responsive>
                                            <thead>
                                                <tr>
                                                    <th>Student ID</th>
                                                    <th>Last Name</th>
                                                    <th>First Name</th>
                                                    <th>AM/PM</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    this.state.inputLinkClicked ?

                                                        <tr>
                                                            <td>
                                                                <input type="text" class="form-control" />
                                                            </td>
                                                            <td>
                                                                <input type="text" class="form-control" />
                                                            </td>
                                                            <td>
                                                                <input type="text" class="form-control" />
                                                            </td>
                                                            <td>
                                                                <select className="form-control form-control-sm">
                                                                    <option>Pick One</option>
                                                                    <option>AM</option>
                                                                    <option>PM</option>
                                                                </select>
                                                            </td>
                                                        </tr>

                                                        :

                                                        <div></div>
                                                }
                                                <tr>
                                                    <td>
                                                        <input type="text" class="form-control" />
                                                    </td>
                                                    <td>
                                                        <input type="text" class="form-control" />
                                                    </td>
                                                    <td>
                                                        <input type="text" class="form-control" />
                                                    </td>
                                                    <td>
                                                        <select className="form-control form-control-sm">
                                                            <option>Pick One</option>
                                                            <option>AM</option>
                                                            <option>PM</option>
                                                        </select>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                        <div className="row mx-auto">
                                            <ButtonToolbar>
                                                <Button bsSize="small" bsStyle="outline-success" onClick={this.handleAddSecondInput}>
                                                    Add a Row
                                        </Button>
                                                <Button bsSize="small" bsStyle="outline-danger">
                                                    Delete Last Row
                                        </Button>
                                                <Button bsSize="small" bsStyle="info">
                                                    Save
                                        </Button>
                                            </ButtonToolbar>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="grades">
                                    <h4 className="mt-2">Add a test, and then select it to add grades.</h4>
                                    <div className="alert alert-success alert-dismissable">
                                        <a className="panel-close close" data-dismiss="alert">×</a> This is an <strong>alert</strong>. Use this to show important messages to the user.
                            </div>
                                    <div className="alert alert-warning alert-dismissable">
                                        <a className="panel-close close" data-dismiss="alert">×</a> This is an <strong>alert</strong>. Use this to show important messages to the user.
                            </div>
                                    <div className="alert alert-info alert-dismissable">
                                        <a className="panel-close close" data-dismiss="alert">×</a> This is an <strong>alert</strong>. Use this to show important messages to the user.
                            </div>
                                </div>
                                <div className="tab-pane fade" id="visual">
                                    <h4 className="mt-2">Filter your results below and hit "Go" to visualize the data.</h4>
                                    <form>
                                        <div className="form-group row">
                                            <label className="col-lg-3 col-form-label form-control-label">First name</label>
                                            <div className="col-lg-9">
                                                <input className="form-control" type="text" value="" placeholder="Jane" />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label className="col-lg-3 col-form-label form-control-label">Last name</label>
                                            <div className="col-lg-9">
                                                <input className="form-control" type="text" value="" placeholder="Bishop" />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label className="col-lg-3 col-form-label form-control-label">Email</label>
                                            <div className="col-lg-9">
                                                <input className="form-control" type="email" value="" placeholder="email@gmail.com" />
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
                                                <input type="reset" className="btn btn-sm btn-secondary mr-2" value="Cancel" />
                                                <input type="button" className="btn btn-sm btn-primary" value="Save Changes" />
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

export default DataTabs;
