import ReactDOM from 'react-dom';
import React from 'react';
import Home from './home';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Home />,
    document.body.appendChild(document.createElement('div')),
  )
})