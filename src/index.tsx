import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Results from './components/Results/Results';
import Profile from './components/Profile/Profile'

const Root =(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Results} /> 
      <Route path="/profile/:{id}"component={Profile} />
    </Switch>
  </BrowserRouter>
);

ReactDOM.render(Root, document.getElementById('root'));


serviceWorker.unregister();
