import React from 'react';
import ReactDOM from 'react-dom';
import { handleErrors } from '@utils/fetchHelper';
import Login from './login';
import Signup from './signup';
import './home.scss';

class Home extends React.Component {
  state = {
    authenticated: false,
  }

  componentDidMount() {
    fetch('/api/authenticated')
      .then(handleErrors)
      .then(data => {
        this.setState({
          authenticated: data.authenticated,
        })
      })
  }
  render () {
    const { authenticated } = this.state;
      return (
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
                    <li className="col-xs-12"><a href="#">Japanese</a></li>
                    <li className="col-xs-12"><a href="#">Greek</a></li>
                    <li className="col-xs-12"><a href="#">Swahili</a></li>
                    <li className="col-xs-12"><a href="#">Icelandic</a></li>
                    <li className="col-xs-12"><a href="#">Russian</a></li>
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
                <div className='col-0 col-md-1'></div>
                <div className='col-md-4' id="welcome-text">
                  <h1><strong>Welcome to Twitter.</strong></h1>
                  <p>Connect with your friends &#8212; and other fascinating people. Get in-the-moment updates on the things that interest you. And watch events unfold, in real time, from every angle.</p>
                </div>
                <div className='col-0 col-md-1'></div>
                <div className='col-md-3'>
                  <Login />
                </div>
                <div className='col-0 col-md-2'></div>
                <div className='col-md-6'></div>
                <div className='col-md-3 mt-5  col-xs-offset-1'>
                  <Signup />
                </div>
              </div>
              <div>
                <span className="mr-3 text-secondary"><a href="https://github.com/Valatulkas" target="_blank" rel="noopener noreferrer">JFerg</a></span>
              </div>
            </div>
          </div>
        </React.Fragment>
      );
    
  }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Home />,
    document.body.appendChild(document.createElement('div')),
  )
})
