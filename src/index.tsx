import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Results from './components/Results/Results';
import Detail from './components/Detail/Detail'

const Root =(
  <Router>
    <Switch>
      <Route exact path="/" component={Results} /> 
      <Route path="/:name"component={Detail} />
    </Switch>
  </Router>
);

ReactDOM.render(Root, document.getElementById('root'));


serviceWorker.unregister();
