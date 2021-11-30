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
      indexTweets();
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
        <nav className='navbar sticky-top'>
          <a className='navbar-brand' href='#'><h6>tweeeeets</h6></a>
          <form className='form-inline'>
            <input type="text" className="form-control mr-sm-2 search-input my-2" placeholder="Search for..." />
            <button onClick={() => this.getTweetByKeyword(keyword)} className="btn btn-outline-secondary my-2 mr-5">Go!</button>
            <ul>
              <li className='dropdown mt-2'>
                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"><span id='user-icon'>User</span></a>
                <ul className="dropdown-menu row" role="menu">
                  <li ><a href="#" className="username">User</a></li>
                  <hr className='py-0 my-0'/>
                  <li ><a href="#">Lists</a></li>
                  <li ><a href="#">Help</a></li>
                  <hr className='py-0 my-0'/>
                  <li ><a href="#">Keyboard shortcuts</a></li>
                  <li ><a href="#">Settings</a></li>
                  <hr className='py-0 my-0'/>
                  <li ><button onClick={this.logout} className='btn btn-default'>Log Out</button></li>
                </ul>
              </li>
            </ul>
          </form>
        </nav>

        <div className='main'>
          <div className='container'>
            <div className='row'>
              <div className='col-0 col-md-1'></div>
              <div className='col-3 profile ml-0 pl-0'>
                <div className='profileCard col-xs-12'>
                  <div className='profileContent'>
                    <div className='user-field col-xs-12'>
                      <a className="username" onClick={() => this.getTweetsByUser(tweets.userName)} ><strong>User</strong></a><br/>
                      <a className="screenName mt-3" href='#'><small>@User</small></a>
                    </div>
                    <div className='row user-stats mb-2 mt-2'>
                      <div className='col-3'>
                        <a href="#" onClick={() => this.getTweetsByUser(user)} >
                          <span className='user-stat'>TWEETS<br/></span>
                          <span className="user-stats-tweets"><small>10</small></span>
                        </a>
                      </div>
                      <div className='col-3'>
                        <a href="">
                          <span className='user-stat'>FOLLOWING<br/></span>
                          <span className="user-stats-following"><small>0</small></span>
                        </a>
                      </div>
                      <div className="col-3">
                        <a href="">
                          <span className='user-stat'>FOLLOWERS<br/></span>
                          <span className="user-stats-followers"><small>0</small></span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xs-12 trends mt-4">
                  <div className="col-xs-12">
                    <div className="trends-header">
                      <span>Trends</span><span> &#183; </span><small><a href="#">Change</a></small>
                    </div>
                    <ul className="trends-list mt-3 pl-0">
                      <li><a href="#"><small>#Ruby</small></a></li>
                      <li><a href="#"><small>#React</small></a></li>
                      <li><a href="#"><small>#Rails</small></a></li>
                      <li><a href="#"><small>#API</small></a></li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-5 post-tweet-box">
                <form onSubmit={this.postTweet} id='post-tweet'>
                  <textarea type="text" className="form-control post-input" rows="3" placeholder="What's happening?" onChange={this.onNewTweetChange} value={newTweet}></textarea>
                  
                  <div className="pull-right">
                    <span className="post-char-counter">142</span>
                    <button type='submit' className="btn btn-primary" id="post-tweet-btn">Tweet</button>
                  </div>
                </form>
                <div className="feed">
                  {tweets.map(tweet => {
                    return (
                    <div key={tweet.id} className='tweet'>
                      <a href={`/tweets/${tweet.usename}`} id='space'>{tweet.username}</a>
                      <a href={`/tweets/${tweet.username}`} id='username'><small>@{tweet.username}</small></a>
                      <p className='mt-2'>
                        {tweet.message}
                        <div className='button-float'>
                          <button onClick={() => this.deleteTweet(tweet.id)} className='btn btn-danger btn-sm' id='tweet-button'>Delete</button>
                        </div>
                      </p>
                      
                    </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
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