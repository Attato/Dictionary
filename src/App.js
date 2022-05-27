import React from 'react';
import { BrowserRouter } from "react-router-dom";
import Router from './router'
import './styles/App.scss';

function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}

export default App;
