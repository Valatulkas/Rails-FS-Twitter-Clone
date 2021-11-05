// demo.jsx
import React from 'react';
import ReactDOM from 'react-dom';

const Feed = () => (
  <React.Fragment>
    <nav className='navbar'>
    <h1>Feed Page</h1>
      <div className='container'>
        <div className='navbar-header'>
          <a className="navbar-brand" href="#">
            <i className="fa fa-twitter"></i>
          </a>
        </div>
        <ul className='nav navbar-right'>
          <li className='dropdown'>
            <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">User</a>
            <ul class="dropdown-menu row" role="menu">
              <li ><a href="#" class="username">User</a></li>
              <li ><a href="#">Lists</a></li>
              <li ><a href="#">Help</a></li>
              <li ><a href="#">Keyboard shortcuts</a></li>
              <li ><a href="#">Settings</a></li>
              <li ><a id="log-out" href="#">Log out</a></li>
            </ul>
          </li>
        </ul>
        <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/feed">Feed</a>
            </li>
        </ul> 
      </div>
    </nav>
    <div className='main'>
      <div className='container'>
        <div className='row'>
      
        </div>
      </div>
    </div>
    <div>
      <span className="mr-3 text-secondary"><a href="https://github.com/Valatulkas" target="_blank" rel="noopener noreferrer">JFerg</a></span>
    </div>
  </React.Fragment>
)

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Feed />,
    document.body.appendChild(document.createElement('div')),
  )
})

