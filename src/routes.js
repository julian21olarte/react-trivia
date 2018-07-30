import React from 'react';
import { Route, Switch } from 'react-router-dom';

// components
import Home from './components/Home/Home';
import Trivia from "./components/Trivia/Trivia";
import App from "./components/App/App";


const AppRoutes = () => {
  return(
       <App>
           <Switch>
               <Route exact path="/" component={Home} />
               <Route path="/home" component={Home} />
               <Route path="/trivia" component={Trivia} />
               <Route component={Home} />
           </Switch>
       </App>
   );
};

export default AppRoutes;