import ReactDOM from 'react-dom';
import React from 'react';
import Feed from './feed';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Feed />,
    document.body.appendChild(document.createElement('div')),
  )
})