import React from 'react';
import ReactDOM from 'react-dom';
import { handleErrors, safeCredentials } from '@utils/fetchHelper';
import './feed.scss';

class Feed extends React.Component {
  state = {
    tweets: [],
    newTweet: '',
  }

  onNewTweetChange = (e) => {
    this.setState({
      newTweet: e.target.value,
    })
  }

  componentDidMount() {
    fetch('/api/tweets')
      .then(handleErrors)
      .then(data => {
        console.log(data)
        this.setState({
          tweets: data.tweets,
        })
      })
  }

  // Log out
  logout = (e) => {
    if (e) { e.preventDefault(); } 
    this.setState({
        error: 'Could not sign out...',
    });
    
    fetch('/api/sessions', safeCredentials({
        method: 'DELETE',
    }))
        .then(handleErrors)
        .then(data => {
            if(data.success) {
                window.location.replace('/home');
            }
        })
  }

  // Post Tweets
  postTweet = (e) => {
    if (e) { e.preventDefault(); }
    this.setState({
      error: '',
    });
    fetch('/api/tweets', safeCredentials({
      method: "POST",
      body: JSON.stringify({
        tweet: {
          message: this.state.newTweet,
        }
      }),
    }))
      .then(handleErrors)
      .catch(error => {
        this.setState({
          error: 'Could not post tweet..'
        })
      })
  }

  // Index Tweets
  indexTweets = () => {
    this.setState({
      error: '',
    });
    fetch('/api/tweets', safeCredentials({
      method: 'GET',
    }))
      .then(handleErrors)
      .then(data => {
        this.setState({
          tweets: this.state.tweets.concat(data.tweets),
        })
      })
      .catch(error => {
        this.setState({
          error: 'Could not post tweets..'
        })
      })
  }
  
  // Index Tweets by ID
  getTweetById = (id) => {
    this.setState({
      error: 'Cannot retrieve tweet by ID...'
    });
    fetch('/api/tweets/' + id, safeCredentials({
      method: 'GET',
    }))
      .then(handleErrors)
  }

  // Index Tweets by User 
  getTweetsByUser = (userName) => {
    this.setState({
      error: 'Cannot retrieve tweets by User...'
    });
    fetch('/api/users/' + userName + '/tweets', safeCredentials({
      method: 'GET',
    }))
      .then(handleErrors)
  } 

  // Search Tweets by Keyword
  getTweetByKeyword = (keyword) => {
    this.setState({
      error: 'Cannot retrieve tweets by keyword...'
    });
    fetch('/api/tweets/search/' + keyword, safeCredentials({
      method: 'GET',
    }))
      .then(handleErrors)
  }

  // Delete Tweets
  deleteTweet = (id) => {
    this.setState({
      error: '',
    });
    
    fetch('/api/tweets/' + id, safeCredentials({
      method: 'DELETE',
    }))
      .then(handleErrors)
      .then(data => {
        if(data.success) {
          indexTweets();
        }
      })
      .catch(error => {
        this.setState({
          error: 'Could not post tweets...'
        })
      })
  }

  render () {
    const { tweets, newTweet } = this.state;
    return (
      <React.Fragment>
        <nav className='navbar navbar-fixed-top nav'>
          <div className='container'>
            <div className='navbar-header'>
              <h1>Twitter Feed Page</h1>
              <a className="navbar-brand" href="#">
                <i className="fa fa-twitter"></i>
              </a>
            </div>
            <div className='search-bar nav navbar-right'>
              <div className='input-group'>
                <input type="text" className="form-control search-input" placeholder="Search for..." />
                <span className="input-group-btn">
                  <button className="btn btn-basic" type="button">Go!</button>
                </span>
              </div>
            </div>
            <ul className='nav navbar-nav navbar-right'>
              <li className='dropdown'>
                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"><span id='user-icon'>User</span></a>
                <ul className="dropdown-menu row" role="menu">
                  <li ><a href="#" className="username">User</a></li>
                  <li ><a href="#">Lists</a></li>
                  <li ><a href="#">Help</a></li>
                  <li ><a href="#">Keyboard shortcuts</a></li>
                  <li ><a href="#">Settings</a></li>
                  <li ><button onClick={this.logout}>Log Out</button></li>
                </ul>
              </li>
            </ul>
          </div>
        </nav>

        <div className='main'>
          <div className='container'>
            <div className='row'>
              <div className='col-xs-3 profile'>
                <div className='profileCard col-xs-12'>
                  <div className='profileContent'>
                    <div className='user-field col-xs-12'>
                      <a className="username" href="#">User</a><br/>
                      <a className="screenName mt-3" href="#"><small>@User</small></a>
                    </div>
                    <div className='user-stats'>
                      <div className='col-xs-4'>
                        <a href="">
                          <span>Tweets<br/></span>
                          <span className="user-stats-tweets">10</span>
                        </a>
                      </div>
                      <div className='col-xs-4'>
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
                <div className="trends col-xs-12">
                  <div className="col-xs-12">
                    <div className="trends-header">
                      <span>Trends</span><span> &#183; </span><small><a href="">Change</a></small>
                    </div>
                    <ul className="trends-list">
                      <li><a href="#">#Ruby</a></li>
                      <li><a href="#">#React</a></li>
                      <li><a href="#">#Rails</a></li>
                      <li><a href="#">#API</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-5 post-tweet-box">
                <form onSubmit={this.postTweet}>
                  <textarea type="text" className="form-control post-input" rows="3" placeholder="What's happening?" onChange={this.onNewTweetChange} value={newTweet}></textarea>
                  
                  <div className="pull-right">
                    <span className="post-char-counter">142</span>
                    <button type='submit' className="btn btn-primary" id="post-tweet-btn">Tweet</button>
                  </div>
                </form>
                <div className="feed mt-4">
                  {tweets.map(tweet => {
                    return (
                    <div key={tweet.id} className='mt-3'>
                      <a href={`/tweets/${tweet.usename}`}>{tweet.username}</a>
                      <a href={`/tweets/${tweet.username}`}>@{tweet.username}</a>
                      <p>{tweet.message}</p>
                      <button onClick={() => this.deleteTweet(tweet.id)} className='btn btn-danger'>Delete</button>
                    </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <span className="mr-3 text-secondary"><a href="https://github.com/Valatulkas" target="_blank" rel="noopener noreferrer">JFerg</a></span>
        </div>
      </React.Fragment>
    )
  }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Feed />,
    document.body.appendChild(document.createElement('div')),
  )
})