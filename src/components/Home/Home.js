import React from 'react';
import './Home.css';

import logo from '../../assets/logo.svg';
import {changeNickname, initGame} from "../../actions/clickAction";
import {connect} from "react-redux";

const Home = (props) => {
    const {nickname, submit, handleChange} = props;
    console.log(props);
    return (
        <div className="h-100">
            <div className="App container-fluid">
                <div className="d-flex h-100 flex-column justify-content-center align-items-center">
                    <div className="row">
                        <div className="col">
                            <h1 className="text-center text-white">
                                Trivia React
                                <img src={logo} className="App-logo" alt=""/>
                            </h1>
                        </div>
                    </div>
                    <div className="row w-100">
                        <div className="col-xs-12 col-md-6 offset-md-3">
                            <div className="form-group">
                                <input className="form-control" type="text" placeholder="Ingresa tu Nick" value={nickname} onChange={handleChange}/>
                            </div>
                            <div className="form-group">
                                <button type="button" className="btn btn-danger" onClick={() => submit(nickname)}>Vamos!</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        user: state.userData,
        nickname: state.nickname
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        submit(nickname) {
            console.log('NICKNAME: ', nickname);
            nickname = nickname !== '' ? nickname : 'Jhon Doe';
            dispatch(initGame({nickname, question: 1}));
            ownProps.history.push('/trivia');
        },

        handleChange(event) {
            console.log('NICKNAME: ', event.target.value);
            dispatch(changeNickname(event.target.value));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);