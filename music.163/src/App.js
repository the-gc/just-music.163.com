import React from 'react';
import { GlobalStyle } from './style'
import { renderRoutes } from 'react-router-config'
import routes from './router/index'
import { HashRouter } from 'react-router-dom'
import './App.css';

function App() {
  return (
    <HashRouter>
      <GlobalStyle></GlobalStyle>
      { renderRoutes(routes) }
    </HashRouter>
  );
}

export default App;
