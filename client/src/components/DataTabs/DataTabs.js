import React from "react";
import "./DataTabs.css";
import { Table, Button, ButtonToolbar } from "react-bootstrap";
import { Bar } from 'react-chartjs-2';


const data = {
    labels: [
        'Student 1',
        'Student 2',
        'Student 3',
        'Student 4',
        'Student 5',
        'Student 6',
        'Student 7',
        'Student 8',
        'Student 9',
        'Student 10',
        'Student 11',
        'Student 12',
        'Student 13',
        'Student 14',
        'Student 15',
        'Student 16',
        'Student 17',
        'Student 18',
        'Student 19',
        'Student 20',
    ],
    datasets: [{
        data: [88, 67, 56, 65, 100, 100, 100, 100, 34, 7, 67, 85, 76, 75, 84, 30, 46, 89, 95, 98],
        backgroundColor: [
            '#63f5ff',
            '#63f563',
            '#d86245',
            '#d87f45',
            '#d89d45',
            '#d8bb45',
            '#d8e253',
            '#93e253',
            '#77e253',
            '#63f563',
            '#45d8d5',
            '#45b0d8',
            '#4587d8',
            '#4564d8',
            '#5145d8',
            '#7545d8',
            '#9d45d8',
            '#d845cb',
            '#d84587',
            '#d84545'
        ],
        hoverBackgroundColor: [
            '#4cbcc4',
            '#4dc14d',
            '#af5038',
            '#ad6535',
            '#a37634',
            '#9e8832',
            '#979e3a',
            '#68a03b',
            '#56a53b',
            '#43a843',
            '#2d918f',
            '#307a96',
            '#2f5e99',
            '#304699',
            '#393099',
            '#54319b',
            '#6e2f99',
            '#992f8f',
            '#912d5a',
            '#962e2e'
        ]
    }]
};

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
                                                        000000001
                                                    </td>
                                                    <td>
                                                        1
                                                    </td>
                                                    <td>
                                                        Student
                                                    </td>
                                                    <td>
                                                        AM
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        000000002
                                                    </td>
                                                    <td>
                                                        2
                                                    </td>
                                                    <td>
                                                        Student
                                                    </td>
                                                    <td>
                                                        AM
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        000000003
                                                    </td>
                                                    <td>
                                                        3
                                                    </td>
                                                    <td>
                                                        Student
                                                    </td>
                                                    <td>
                                                        PM
                                                    </td>
                                                </tr>
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
                                                <Button bsSize="small" bsStyle="outline-info" onClick={this.handleAddSecondInput}>
                                                    Add a Row
                                        </Button>
                                                <Button bsSize="small" bsStyle="outline-danger">
                                                    Delete Last Row
                                        </Button>
                                                <Button bsSize="small" bsStyle="success">
                                                    Save
                                        </Button>
                                            </ButtonToolbar>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="grades">
                                    <h4 className="mt-2">Add a test, and then select it to add grades.</h4>
                                    <div className="row">
                                        <ButtonToolbar>
                                            <Button bsSize="small" bsStyle="outline-success" onClick={this.handleAddSecondInput}>
                                                Add a New Test
                                                </Button>
                                        </ButtonToolbar>
                                        <Table responsive>
                                            <thead>
                                                <tr>
                                                    <th>Select Student</th>
                                                    <th>Select Test</th>
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
                                                        <select className="form-control form-control-sm">
                                                            <option>Choose from Your Roster</option>
                                                            <option>Student 1</option>
                                                            <option>Student 2</option>
                                                            <option>Student 3</option>
                                                            <option>Student 4</option>
                                                            <option>Student 5</option>
                                                            <option>Student 6</option>
                                                            <option>Student 7</option>
                                                            <option>Student 8</option>
                                                            <option>Student 9</option>
                                                            <option>Student 10</option>
                                                            <option>Student 11</option>
                                                            <option>Student 12</option>
                                                            <option>Student 13</option>
                                                            <option>Student 14</option>
                                                            <option>Student 15</option>
                                                            <option>Student 16</option>
                                                            <option>Student 17</option>
                                                            <option>Student 18</option>
                                                            <option>Student 19</option>
                                                            <option>Student 20</option>
                                                        </select>
                                                    </td>
                                                    <td>
                                                        <select className="form-control form-control-sm">
                                                            <option>Choose from the List</option>
                                                            <option>Choose from the List</option>
                                                            <option>08.24.18 Decimals</option>
                                                            <option>08.30.18 Decimals 2</option>
                                                            <option>09.18.18 Fractions</option>
                                                            <option>09.27.18 Fraction 2</option>
                                                            <option>10.24.18 Clock</option>
                                                        </select>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                        <br />
                                        <Table>
                                            <thead>
                                                <tr>
                                                    <th>Question #</th>
                                                    <th>Question:</th>
                                                    <th>Possible Points</th>
                                                    <th>Given Points</th>
                                                </tr>
                                            </thead>
                                            <tbody>
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
                                                        <input type="text" class="form-control" />
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                        <div className="row mx-auto">
                                            <ButtonToolbar>
                                                <Button bsSize="small" bsStyle="info">
                                                    Add a Question
                                                </Button>
                                                <Button bsSize="small" bsStyle="success">
                                                    Save Test
                                                </Button>
                                            </ButtonToolbar>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="visual">
                                    <h4 className="mt-2">Filter your results below and hit "Go" to visualize the data.</h4>
                                    <Table responsive>
                                        <thead>
                                            <tr>
                                                <th>Select Student(s)</th>
                                                <th>Select Test</th>
                                            </tr>
                                        </thead>
                                        <tbody>

                                            <tr>
                                                <td>
                                                    <select className="form-control form-control-sm">
                                                        <option>Choose from the List</option>
                                                        <option>Student 1</option>
                                                        <option>Student 2</option>
                                                        <option>Student 3</option>
                                                        <option>Student 4</option>
                                                        <option>Student 5</option>
                                                        <option>Student 6</option>
                                                        <option>Student 7</option>
                                                        <option>Student 8</option>
                                                        <option>Student 9</option>
                                                        <option>Student 10</option>
                                                        <option>Student 11</option>
                                                        <option>Student 12</option>
                                                        <option>Student 13</option>
                                                        <option>Student 14</option>
                                                        <option>Student 15</option>
                                                        <option>Student 16</option>
                                                        <option>Student 17</option>
                                                        <option>Student 18</option>
                                                        <option>Student 19</option>
                                                        <option>Student 20</option>
                                                    </select>
                                                </td>
                                                <td>
                                                    <select className="form-control form-control-sm">
                                                        <option>Choose from the List</option>
                                                        <option>08.24.18 Decimals</option>
                                                        <option>08.30.18 Decimals 2</option>
                                                        <option>09.18.18 Fractions</option>
                                                        <option>09.27.18 Fraction 2</option>
                                                        <option>10.24.18 Clock</option>
                                                    </select>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                    <div className="row mx-auto text-center">
                                        <Button bsSize="small" bsStyle="success">
                                            Visualize!
                                        </Button>
                                        <Bar data={data} />

                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div >
        )

    }

}

export default DataTabs;
