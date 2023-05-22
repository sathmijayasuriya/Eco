import React from "react";
import Header from "../components/Header";


function Dashboard(props) {
return (
    <>
        <Header/>
    <div>
        <div className="component-body">
        <div className="dashboard">
            <div className="container">
                <div className="row">
                <div className="col-sm">
                <a href="/AllReservation">
                <button type="button" className=" dbutton" id="btn-dash">
                    <i className="fa fa-bus" id="fa fa-2x"></i>
                    <span className="lead align-top ">Reservation Management</span>
                </button>
                </a>
            </div>
            <div className="col-sm">
            <a href="/AllRental">
                <button type="button" className="dbutton" id="btn-dash">
                <i className="fa fa-taxi" id="fa fa-2x"></i>
                <span className="lead align-top">Rental Management</span>
                </button>
                </a>
            </div>
            <div className="col-sm">
                <a href="/AllVehicle">
                <button type="button" className="dbutton" id="btn-dash">
                    <i className="fa fa-car" id="fa fa-2x"></i>
                    <span className="lead align-top">Vehicle Management</span>
                </button>
                </a>
            </div>
            </div>
            <div className="row">
            <div className="col-sm">
            <a href="/AllEmployee">
                <button type="button" className=" dbutton" id="btn-dash">
                    <i className="fa fb fa-group"></i>
                    <span className="lead align-top ">Human Resource</span>
                </button>
                </a>
            </div>
        </div>
        </div>
    </div>
    </div>
    </div>
</>
);
}

export default Dashboard;