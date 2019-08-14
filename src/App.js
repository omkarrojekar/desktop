import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
    Redirect
} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';
import LogOut from './Admin/LogOut';
import AdminLogin from './Admin/AdminLogin';
import DashBoard from './Admin/DashBoard';
import Header from './layout/Header';
import Footer from './layout/Footer';
import Leftbar from './layout/Leftbar';
import Createmr from './Mr/Createmr';
import Managemr from './Mr/Managemr';
import Viewmr from './Mr/Viewmr';
import CreateDoctor from './Doctors/CreateDoctor';
import ManageDoctor from './Doctors/ManageDoctor';
import ViewDoctor from './Doctors/ViewDoctor';
import Publish from './Admin/Publish';
import ViewFiles from './Admin/ViewFiles';
import ViewFile from './Admin/ViewFile';
import EditMr from './Mr/EditMr';
import EditDoctor from './Doctors/EditDoctor';
import UserLogin from './Doctors/UserLogin';
import MrDashBoard from './Mr/MrDashBoard';
import DoctorDashboard from './Doctors/DoctorDashBoard';
import UserLogout from './Doctors/UserLogout';
import ViewDoctors from './Mr/ViewDoctors';
import ViewMrFiles from './Mr/ViewMrFiles';
import SendFile from './Mr/SendFile';
import ChangePassword from './Mr/ChangePassword';
import ChangeUsername from './Account/ChangeUsername';
import SendToDoctor from './Mr/SendToDoctor';
import SharedFiles from './Doctors/SharedFiles';
import ViewSharedFile from './Doctors/ViewSharedFile';
import DoctorLogin from './Doctors/DoctorLogin';
import DoctorFile from './Doctors/DoctorFile';
import TrackDoctor from './Doctors/TrackDoctor';
import DeleteDoctor from './Doctors/DeleteDoctor';
import TrackFiles from './Admin/TrackFiles';
import DeleteMr from './Mr/DeleteMr';
import ViewMrDoctor from './Mr/ViewMrDoctor';
import Demo from './Admin/Demo' ;
import DoctorsOfMr from './Mr/DoctorsOfMr';


function App() 
{
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    <h1>Hello AWSSSSA</h1>
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
        </a>
            </header>
        </div>
    );
  }
  



export default App;