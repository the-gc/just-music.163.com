import React from 'react'
import { Provider } from "react-redux"
import { GlobalStyle } from './style'
import { renderRoutes } from 'react-router-config'
import store from './store/index'
import routes from './router/index'
import { HashRouter } from 'react-router-dom'
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <HashRouter>
      <GlobalStyle></GlobalStyle>
      { renderRoutes(routes) }
      </HashRouter>
    </Provider>
  );
}

export default App;
