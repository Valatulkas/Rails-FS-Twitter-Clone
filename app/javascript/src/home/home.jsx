import React from 'react';
import ReactDOM from 'react-dom';
import { handleErrors } from '@utils/fetchHelper';
import './home.scss';

class Home extends React.Component {
  state = {
    authenticated: false,
    show_login: true,
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
  toggle = () => {
    this.setState({
      show_login: !this.state.show_login,
    })
  }
  render () {
    const { authenticated, show_login } = this.state;
    if (authenticated) {
      return (
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              <p>Eyo!</p>
            </div>
          </div>
        </div>
      );
    };
    return (
      <div className='container'>
          <div className='row'>
              <div className='col-12'>
                <p>Login</p>
              </div>
          </div>
      </div>
    )
  }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Home />,
    document.body.appendChild(document.createElement('div')),
  )
})

/*
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
          <div className='col-md-5' id="welcome-text">
            <h1><strong>Welcome to Twitter.</strong></h1>
            <p>Connect with your friends &#8212; and other fascinating people. Get in-the-moment updates on the things that interest you. And watch events unfold, in real time, from every angle.</p>
          </div>
          <div className='col-md-4'>
            <form>
              <div className="form-group">
                <input type="text" className="form-control username" placeholder="Username" />
              </div>
              <div className="form-group col-xs-8">
                <input type="password" className="form-control password" placeholder="Password" />
              </div>
              <button id="log-in-btn" className="btn btn-default btn-primary">Log in</button>
              <label>
                <input type="checkbox" />
                <span>Remember me</span>
                <span> &#183; </span>
              </label>
              <a href="#">Forgot password?</a>
            </form>
          </div>
          <div className='col-0 col-md-2'></div>
          <div className='col-md-6'></div>
          <div className='col-md-5'>
            <form>
              <div className="new-to-t">
                <p><strong>New to Twitter?</strong><span> Sign Up</span></p>
              </div>
              <div className="form-group">
                <input type="text" className="form-control username" placeholder="Username" />
              </div>
              <div className="form-group">
                <input type="email" className="form-control email" placeholder="Email" />
              </div>
              <div className="form-group">
                <input type="password" className="form-control password" placeholder="Password" />
              </div>
              <button id="sign-up-btn" className="btn btn-default btn-warning pull-right">Sign up for Twitter</button>
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
*/