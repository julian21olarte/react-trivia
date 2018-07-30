import './Trivia.css';
import React from 'react';
import {connect} from "react-redux";
import {decrementTime, finishTime} from "../../actions/clickAction";

class Trivia extends React.Component {

    constructor(props) {
        super(props);
    }
    //console.log(props);
    render() {
        const { user, list, time, responseClick } = this.props;
        return (
            <div id="trivia" className="container-fluid trivia-container w-100">
                <div className="row">
                    <div className="col-4">
                        <h1 className="p-5 text-light">{user.nickname}</h1>
                    </div>
                    <div className="col-4 d-flex justify-content-center align-items-center">
                        <h3 className="timer-h3 p-5 text-success d-flex justify-content-center align-items-center">{time}</h3>
                    </div>
                    <div className="col-4">
                        <h1 className="p-5 text-light">Computer</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Pregunta</h5>
                                <p className="card-text">Esta es una pregunta de prueba.</p>

                                <br/>
                                <div className="row">
                                    <div className="col-xs-12 col-md-6 offset-md-3">
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="responsesGroup"
                                                   id="response1" value="option1"/>
                                            <label className="form-check-label" htmlFor="response1" onClick={responseClick}>
                                                Respuesta 1
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="responsesGroup"
                                                   id="response2" value="option2"/>
                                            <label className="form-check-label" htmlFor="response2" onClick={responseClick}>
                                                Respuesta 2
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="responsesGroup"
                                                   id="response3" value="option3"/>
                                            <label className="form-check-label" htmlFor="response3" onClick={responseClick}>
                                                Respuesta 3
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="responsesGroup"
                                                   id="response4" value="option4"/>
                                            <label className="form-check-label" htmlFor="response4" onClick={responseClick}>
                                                Respuesta 4
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <pre>
                {list}
            </pre>
            </div>
        );
    }

    componentWillMount() {
        this.props.runTime();
    }
}

const disableResponses = () => {
    document.querySelectorAll('input[name="responsesGroup"]')
    .forEach(element => {
        element.disabled = true;
        element.parentNode.classList.add('disabled');
    });
};



const mapStateToProps = (state) => {
    return {
        list: state.list,
        text: state.text,
        user: state.userData,
        time: state.time
    };
};

const mapDispatchToProps = (dispatch) => {
    return {

        runTime: () => {
            let second = 9;
            // random number for computer response second
            const min = 0;
            const max = 10;
            const cpuResponseSecond = Math.floor(Math.random() * (max - min)) + min;

            const interval = setInterval(function() {
                const timerElement = document.querySelector('h3.timer-h3.p-5');
                if(second === cpuResponseSecond) {

                }
                if(second === 6) {
                    timerElement.classList.remove('text-success');
                    timerElement.classList.add('text-warning');
                } else  if(second === 3) {
                    timerElement.classList.remove('text-warning');
                    timerElement.classList.add('text-danger');
                }
                if(!second) {
                    clearInterval(interval);
                    disableResponses();

                    second = 'Finish!';
                    dispatch(finishTime(second));
                    const selectedValue = document.querySelector('.response-checked > input');
                    console.log(selectedValue);
                    const response = selectedValue ? selectedValue.value : null;
                    console.log(response);
                } else {
                    dispatch(decrementTime(second--));
                }
            }, 1000);
        },


        responseClick: (element) => {
            console.log(element);
            const existSelection = document.querySelector('.form-check.disabled');
            console.log(existSelection);
            if(!existSelection) {
                element.target.parentNode.classList.add('response-checked');
                disableResponses();
            }
        }

    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Trivia);