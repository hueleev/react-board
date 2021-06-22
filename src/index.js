import React from 'react';
import ReactDOM from 'react-dom';
// router
// createStore 와 루트 리듀서 불러오기
import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import rootReducer from './modules';
// **** (1) Provider 불러오기
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import ReduxThunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';

// import './index.css';
import App from './App';

import { PersistGate } from 'redux-persist/integration/react';

import "assets/vendor/nucleo/css/nucleo.css";
import "assets/vendor/font-awesome/css/font-awesome.min.css";
import "assets/scss/argon-design-system-react.scss?v1.1.0";

// logger 를 사용하는 경우, logger가 가장 마지막에 와야합니다.
const customHistory = createBrowserHistory();
const middlewares = [promiseMiddleware,
  ReduxThunk.withExtraArgument({ history: customHistory }), logger];

const store = createStore(
  rootReducer,
  
  composeWithDevTools(
    applyMiddleware(...middlewares)
  )
); // 여러개의 미들웨어를 적용 할 수 있습니다.

const persistor = persistStore(store);

// **** (2) Provider 렌더링해서 기존의 App 감싸주기
ReactDOM.render(
  <Router history={customHistory} basename="/all-ears-front">
    <Provider store={store}>    
        <PersistGate persistor={persistor}>
          <App />
        </PersistGate>
    </Provider>
  </Router>
  ,
  document.getElementById('root')
);


