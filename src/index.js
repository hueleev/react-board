import React from 'react';
import ReactDOM from 'react-dom';
// router
// createStore 와 루트 리듀서 불러오기
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './modules';
// **** (1) Provider 불러오기
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import ReduxThunk from 'redux-thunk';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import './index.css';
import App from './App';

const customHistory = createBrowserHistory();
const store = createStore(
  rootReducer,
  // logger 를 사용하는 경우, logger가 가장 마지막에 와야합니다.
  composeWithDevTools(
    applyMiddleware(
      ReduxThunk.withExtraArgument({ history: customHistory }),
      logger
    )
  )
); // 여러개의 미들웨어를 적용 할 수 있습니다.

// **** (2) Provider 렌더링해서 기존의 App 감싸주기
ReactDOM.render(
  <Router history={customHistory}>
    <Provider store={store}>    
        <App />
    </Provider>
  </Router>
  ,
  document.getElementById('root')
);
