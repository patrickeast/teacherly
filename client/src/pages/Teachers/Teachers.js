import React, { Component } from "react";
import Header from "../../components/Header/Header.js";
import Profile from "../../components/Profile/Profile.js";
import DataTabs from "../../components/DataTabs/DataTabs.js";
import "./index.css";

export default class Teachers extends Component {
    render () {
        return (
            <div >
                <Header />
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <Profile />
                            <br />
                            <DataTabs />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}