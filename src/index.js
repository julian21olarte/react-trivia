import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import AppRoutes from './routes';
import { BrowserRouter as Router } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import store from "./store";
import {Provider} from "react-redux";

ReactDOM.render(
        <Provider store={store}>
            <Router>
                <AppRoutes/>
            </Router>
        </Provider>,
    document.getElementById('root'));
registerServiceWorker();
