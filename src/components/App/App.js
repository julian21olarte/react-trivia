import React  from 'react';
import './App.css';
import Header from "../Header/Header";
import {connect} from "react-redux";

const App = ({children}) => {
    return (
        <div id="router-container">
            <Header/>
            {children}
        </div>
    );
};

export default connect()(App);
