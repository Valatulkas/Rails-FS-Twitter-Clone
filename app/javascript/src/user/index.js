import ReactDOM from 'react-dom';
import React from 'react';
import User from './user';

document.addEventListener('DOMContentLoaded', () => {
  const node = document.getElementById('params');
  const data = JSON.parse(node.getAttribute('data-params'));

  ReactDOM.render(
    <User username={data.username} />,
    document.body.appendChild(document.createElement('div')),
  )
})