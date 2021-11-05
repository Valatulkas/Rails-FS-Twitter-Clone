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
            <ul className="dropdown-menu row" role="menu">
              <li ><a href="#" className="username">User</a></li>
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
          <div className='col-xs-3'>
            <div className="profileCard-content">
              <div className="user-field col-xs-12">
                <a className="username" href="#">User</a><br/>
                <a className="screenName" href="#">@User</a>
              </div>
              <div className="user-stats">
                <div className="col-xs-3">
                  <a href="">
                    <span>Tweets<br/></span>
                    <span className="user-stats-tweets">10</span>
                  </a>
                </div>
                <div className="col-xs-4">
                  <a href="">
                    <span>Following<br/></span>
                    <span className="user-stats-following">0</span>
                  </a>
                </div>
                <div className="col-xs-4">
                  <a href="">
                    <span>Followers<br/></span>
                    <span className="user-stats-followers">0</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className='col-xs-6'>
            <div className="col-xs-12 post-tweet-box">
              <textarea type="text" className="form-control post-input" rows="3" placeholder="What's happening?"></textarea>
              <div className="pull-right">
                <span className="post-char-counter">140</span>
                <button className="btn btn-primary" disabled id="post-tweet-btn">Tweet</button>
              </div>
            </div>
            <div className="feed">
              <div className="tweet col-12">
                <a className="tweet-username" href="#">User</a>
                <a className="tweet-screenName" href="#">@User</a>
                <p>This is a tweet</p>
                <a className="delete-tweet" href="#">Delete</a>
              </div>
            </div>
          </div>
          <div className='col-xs-3'>

          </div>
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

