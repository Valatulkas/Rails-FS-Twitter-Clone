// home.jsx
import React from 'react';
import ReactDOM from 'react-dom';
import './home.scss';

const Home = () => (
  <React.Fragment>
    <nav className='navbar'>
    <h1>Home Page</h1>
      <div className='container'>
        <div className='navbar-header'>
          <a class="navbar-brand" href="#">
            <i class="fa fa-twitter"></i>
          </a>
        </div>
        <ul className='nav navbar-right'>
          <li className='dropdown'>
            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">language: <strong>English </strong><span class="caret"></span></a>
            <ul class="dropdown-menu row" role="menu">
              <li class="col-xs-12"><a href="#">Bahasa Malaya</a></li>
              <li class="col-xs-12"><a href="#">Dansk</a></li>
              <li class="col-xs-12"><a href="#">English</a></li>
              <li class="col-xs-12"><a href="#">Suomi</a></li>
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
        <div>
          <span className="mr-3 text-secondary"><a href="https://github.com/Valatulkas" target="_blank" rel="noopener noreferrer">JFerg</a></span>
        </div>
      </div>
    </nav>
  </React.Fragment>
)

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Home />,
    document.body.appendChild(document.createElement('div')),
  )
})