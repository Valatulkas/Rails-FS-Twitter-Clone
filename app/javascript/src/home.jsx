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
          <a className="navbar-brand" href="#">
            <i className="fa fa-twitter"></i>
          </a>
        </div>
        <ul className='nav navbar-right'>
          <li className='dropdown'>
            <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">language: <strong>English </strong><span class="caret"></span></a>
            <ul className="dropdown-menu row" role="menu">
              <li className="col-xs-12"><a href="#">Bahasa Malaya</a></li>
              <li className="col-xs-12"><a href="#">Dansk</a></li>
              <li className="col-xs-12"><a href="#">English</a></li>
              <li className="col-xs-12"><a href="#">Suomi</a></li>
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
          <div className='col-md-6' id="welcome-text">
            <h1><strong>Welcome to Twitter.</strong></h1>
            <p>Connect with your friends &#8212; and other fascinating people. Get in-the-moment updates on the things that interest you. And watch events unfold, in real time, from every angle.</p>
          </div>
          <div className='col-md-6'>
            <form>
              <div className="form-group">
                <input type="text" class="form-control username" placeholder="Username" />
              </div>
              <div className="form-group col-xs-8">
                <input type="password" class="form-control password" placeholder="Password" />
              </div>
              <button id="log-in-btn" class="btn btn-default btn-primary col-xs-3 col-xs-offset-1">Log in</button>
              <label>
                <input type="checkbox" />
                <span>Remember me</span>
                <span> &#183; </span>
              </label>
              <a href="#">Forgot password?</a>
            </form>
          </div>
          <div className='col-md-6'></div>
          <div className='col-md-6'>
            <form>
              <div className="new-to-t">
                <p><strong>New to Twitter?</strong><span> Sign Up</span></p>
              </div>
              <div className="form-group">
                <input type="text" class="form-control username" placeholder="Username" />
              </div>
              <div className="form-group">
                <input type="email" class="form-control email" placeholder="Email" />
              </div>
              <div className="form-group">
                <input type="password" class="form-control password" placeholder="Password" />
              </div>
              <button id="sign-up-btn" class="btn btn-default btn-warning pull-right">Sign up for Twitter</button>
            </form>
          </div>
        </div>
        <div>
          <span className="mr-3 text-secondary"><a href="https://github.com/Valatulkas" target="_blank" rel="noopener noreferrer">JFerg</a></span>
        </div>
      </div>
    </div>
  </React.Fragment>
)

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Home />,
    document.body.appendChild(document.createElement('div')),
  )
})