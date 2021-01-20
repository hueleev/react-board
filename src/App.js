import React, { Component } from 'react';
import { Switch } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import './App.css';
import { routes, RouteWithSubRoutes } from './routes/routes';

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;

class App extends Component {
  render() {
    return (
      // <>
      //   <GlobalStyle />
      //   <TodoTemplate>
      //     <TodoHead />
      //     <TodoList />
      //     <TodoCreate />
      //   </TodoTemplate>
      // </>
      <>
        <div>
          <Switch>
            {routes.map((route, i) => (
              <RouteWithSubRoutes key={i} {...route} />
            ))}
          </Switch>
        </div>
      </>
    );
  }
}

export default App;
