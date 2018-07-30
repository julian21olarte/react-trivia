import './Header.css';

import React from 'react';
import logo from '../../assets/logo.svg';
import { Link } from 'react-router-dom';
import {connect} from "react-redux";

const Header = ({routes}) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <img src={logo} className="App-logo" alt="logo" />
            <button className="navbar-toggler" type="button" data-toggle="collapse"
                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"/>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    {
                        routes.map((route, index) => {
                           return(
                               <li className="nav-item" key={index}>
                                   <Link className="nav-link" to={route.name} >{route.name}<span className="sr-only">(current)</span></Link>
                               </li>
                           );
                        })
                    }
                </ul>
            </div>
        </nav>
    );
};

const mapStateToProps = (state) => {
    return {
        routes: [
            {
                name: 'Home',
                url: 'Home'
            },
            {
                name: 'Trivia',
                url: 'Trivia'
            }
        ]
    }
};

export default connect(mapStateToProps)(Header);