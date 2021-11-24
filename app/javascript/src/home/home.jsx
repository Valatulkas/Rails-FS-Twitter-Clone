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
          <nav className='navbar navbar-fixed-top navbar default'>
              <div className='container'>
                <div className='navbar-header'>
                  <h1>Twitter Clone</h1>
                  <a className="navbar-brand" href="#">
                    <i className="fa fa-twitter"></i>
                  </a>
                </div>
                <ul className='nav navbar-nav navbar-right'>
                  <li className='dropdown'>
                    <a className='dropdown-toggle' data-toggle='dropdown' role='button' href='#'>
                      language: <strong>English</strong><span className='caret'></span>
                    </a>
                    <ul className='dropdown-menu row' role='menu'>
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
              </div>
          </nav>
          <div className='main'>
            <div className='container'>
              <div className='row'> 
                <div className='home-card col-xs-10 col-xs-offset-1'>
                  <div className='col-xs-6 col-md-6 intro'>
                    <h1><strong>Welcome to Twitter.</strong></h1>
                    <p>Connect with your friends &#8212; and other fascinating people. Get in-the-moment updates on the things that interest you. And watch events unfold, in real time, from every angle.</p>         
                  </div>
                  <div className='login col-xs-4 col-xs-offset-1 col-md-4'>
                    <Login />
                  </div>
                  <div className='signup col-xs-4 col-xs-offset-1 col-md-4'>
                    <Signup />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <footer>
            <span className="mr-3 text-secondary"><a href="https://github.com/Valatulkas" target="_blank" rel="noopener noreferrer">JFerg</a></span>
          </footer>
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
