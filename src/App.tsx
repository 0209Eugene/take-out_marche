import React from 'react';
import { Switch, Route } from 'react-router-dom'; 

import './App.css';

import HomePage from './pages/homepage/homepage.component';

const ChickenCurryPage: React.FC = () => {
  return (
    <div>
      <h1>ChickenCurryPage</h1>
    </div>
  );
}

const  App: React.FC = () => {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/chicken-curry' component={ChickenCurryPage}/>
      </Switch>
    </div>
  );
}

export default App;
