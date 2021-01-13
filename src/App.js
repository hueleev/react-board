import React, { Component } from 'react';
import { Switch } from 'react-router-dom';
import './App.css';

import { routes, RouteWithSubRoutes } from './routes/routes';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          {routes.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route} />
          ))}
        </Switch>
      </div>
    );
  }
}

export default App;
