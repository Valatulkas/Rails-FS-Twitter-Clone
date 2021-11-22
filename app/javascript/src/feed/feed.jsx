import React from 'react';
import ReactDOM from 'react-dom';
import { handleErrors, safeCredentials } from '@utils/fetchHelper';
import './feed.scss';

class Feed extends React.Component {
  state = {
    tweets: [],
  }
  componentDidMount() {
    fetch('http://localhost:3000/tweets')
      .then(handleErrors)
      .then(data => {
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
    fetch('/tweets', safeCredentials({
      method: "POST",
      body: JSON.stringify({
        tweets: {
          username: this.state.tweets.username,
          id: this.state.tweets.id,
          message: this.state.tweets.message,
        }
      })
    }))
      .then(handleErrors)
      .then(data => {
        if(data.success) {
          indexTweets();
        }
      })
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
    fetch('/tweets', safeCredentials({
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
    fetch('http://localhost:3000/tweets/' + id, safeCredentials({
      method: 'GET',
    }))
      .then(handleErrors)
      .then(data => {
        if (data.success) {
          this.indexTweets();
        }
      })
  }

  // Index Tweets by User 
  getTweetsByUser = (userName) => {
    this.setState({
      error: 'Cannot retrieve tweets by User...'
    });
    fetch('http://localhost:3000/users/' + userName + '/tweets', safeCredentials({
      method: 'GET',
    }))
      .then(handleErrors)
      .then(data => {
        if (data.success) {
          this.indexTweets();
        }
      })
  } 

  // Search Tweets by Keyword
  getTweetByKeyword = (keyword) => {
    this.setState({
      error: 'Cannot retrieve tweets by keyword...'
    });
    fetch('http://localhost:3000/tweets/search/' + keyword, safeCredentials({
      method: 'GET',
    }))
      .then(handleErrors)
      .then(data => {
        if (data.success) {
          this.indexTweets();
        }
      })
  }

  // Delete Tweets
  deleteTweet = (id) => {
    this.setState({
      error: '',
    });
    fetch('http://localhost:3000/tweets/' + id, safeCredentials({
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
    const { tweets } = this.state;
    return (
      <React.Fragment>
        <nav className='navbar'>
            <div className='navbar-header'>
              <h1>Twitter Feed Page</h1>
              <a className="navbar-brand" href="#">
                <i className="fa fa-twitter"></i>
              </a>
            </div>
            <ul className='nav navbar-right'>
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
            <div className='search-bar col-xs-3 nav navbar-right'>
              <div className='input-group'>
                <input type="text" class="form-control search-input" placeholder="Search for..." />
                <span class="input-group-btn">
                  <button class="btn btn-default search-btn" type="button">Go!</button>
                </span>
              </div>
            </div>
        </nav>
        <div className='main'>
          <div className='container'>
            <div className='row'>
              <div className='col-xs-0 col-md-2'></div>
              <div className='col-md-3'>
                <div className='col-xs-3 profileCard-content'>
                  <div className='col-xs-12 user-field'>
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
                <div className="profileCard-content">
                  
                  <div className="user-stats">
                    
                    <div className="col-4">
                      <a href="">
                        <span>Following<br/></span>
                        <span className="user-stats-following">0</span>
                      </a>
                    </div>
                    <div className="col-4">
                      <a href="">
                        <span>Followers<br/></span>
                        <span className="user-stats-followers">0</span>
                      </a>
                    </div>
                  </div>
                </div>
                <div class="trends col-xs-12">
                  <div class="col-xs-12">
                    <div class="trends-header">
                      <span>Trends</span><span> &#183; </span><small><a href="">Change</a></small>      
                    </div>
                    <ul class="trends-list">
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
                      <textarea type="text" className="form-control post-input" rows="3" placeholder="What's happening?"></textarea>
                      <div className="pull-right">
                        <span className="post-char-counter">140</span>
                        <button type='submit' className="btn btn-primary" id="post-tweet-btn">Tweet</button>
                      </div>
                    </form>
                    <div className="feed mt-4">

                      <div className="tweet">
                        <a id="tweet-username" href="#">User</a>
                        <a className="tweet-screenName" href="#">@User</a>
                        <p>This is a tweet</p>
                        <a className="delete-tweet" href="#">Delete</a>
                      </div>

                      <div key={tweets.id} className='mt-3 tweet'>
                        <a href={`/tweets/${tweets.usename}`}>{tweets.username}</a>
                        <a href={`/tweets/${tweets.id}`}>@{tweets.id}</a>
                        <p>{tweets.message}</p>
                        <button onClick={this.deleteTweet} className='btn btn-danger'>Delete</button>
                      </div>

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
/*
  authenticate(function(response) {
    console.log(response);
    if(response.authenticated) {
      currentUser = response.username;
      $('#user-icon').text(currentUser);
      $('.username').text(currentUser);
      $('.screenName').text('@'+currentUser);
      getUserTweets(currentUser, function(response) {
        $('.user-stats-tweets').text(response.length);
      });
    } else {
      window.location.replace("/");
    }
  }, function(error) {
    console.log(error);
  });

  function profileCardChanger(username) {
    $('.user-field .username').text(username);
    $('.user-field .screenName').text('@'+username);
    getUserTweets(username, function(response) {
      $('.user-stats-tweets').text(response.length);
    });
  };

  $(document).on('click', '#log-out', function() {
    logoutUser(function(){
      authenticate(function(response) {
        if(!response.authenticated) {
          window.location.replace("/");
        }
      });
    });
  });

  // Tweet Char Counter

  function charCount() {
    var char = $('.post-input').val().length;
    $('.post-char-counter').text(140-char);
    if(char > 0 && char <= 140) {
      $("#post-tweet-btn").removeAttr('disabled');
    } else {
      $("#post-tweet-btn").attr('disabled','disabled');
    }
  };

  $(document).on('keyup', '.post-input', function() {
    charCount();
  });

  // Post Tweet

  $(document).on('click', '#post-tweet-btn', function() {
    var imageSelect = document.getElementById('image-select');
    var image = imageSelect.files[0];
    postTweet($('.post-input').val(), image, function(result) {
      if(result.success) {
        $('.post-input').val('');
        imageSelect.value = '';
        $('#image-preview').attr('src', '#');
        $('#image-preview').hide();
        getTweetsAndPost();
        charCount();
        getUserTweets(currentUser, function(response) {
        $('.user-stats-tweets').text(response.length);
      });
      }
    });
  });

  // Get Tweets

  function getTweetsAndPost() {
    getAllTweets(function(tweets){
      $('.feed').text('');
      $.each(tweets, function(index){
        if(tweets[index]['username'] === currentUser) {
          var html = '<div class="tweet col-xs-12"> \
            <a class="tweet-username" href="#">'+tweets[index]['username']+'</a> \
            <a class="tweet-screenName" href="#">@'+tweets[index]['username']+'</a> \
            <a class="delete-tweet" id="'+tweets[index]['id']+'" href="#">Delete</a>'

          if (tweets[index]['image'] !== undefined) {
            html += '<img src="' + tweets[index]['image'] + '" class="img img-responsive">'
          }

          html += '<p>'+tweets[index]['message']+'</p> \
            </div>'
          $('.feed').prepend(html);
        } else {
          var html = '<div class="tweet col-xs-12"> \
            <a class="tweet-username" href="#">'+tweets[index]['username']+'</a> \
            <a class="tweet-screenName" href="#">@'+tweets[index]['username']+'</a>'

          if (tweets[index]['image'] !== undefined) {
            html += '<img src="' + tweets[index]['image'] + '" class="img img-responsive">'
          }

          html += '<p>'+tweets[index]['message']+'</p> \
            </div>'
          $('.feed').prepend(html);
        }
      });
    });
  }

  $(document).on('click', '.navbar-brand', function() {
    getTweetsAndPost();
    profileCardChanger(currentUser);
  });

  $(document).on('click', '.delete-tweet', function() {
    deleteOneTweet($(this).attr('id'), function(){
      getTweetsAndPost();
    });
  });


  function getUserTweetsAndPost(username) {
    getUserTweets(username, function(response) {
      $('.feed').text('');
      console.log(response);
      $.each(response, function(index){
        if(response[index]['username'] === currentUser) {
          $('.feed').prepend(
            '<div class="tweet col-xs-12"> \
            <a class="tweet-username" href="#">'+response[index]['username']+'</a> \
            <a class="tweet-screenName" href="#">@'+response[index]['username']+'</a> \
            <p>'+response[index]['message']+'</p> \
            <a class="delete-tweet" id="'+response[index]['id']+'" href="#">Delete</a> \
            </div>'
          );
        } else {
          $('.feed').prepend(
            '<div class="tweet col-xs-12"> \
            <a class="tweet-username" href="#">'+response[index]['username']+'</a> \
            <a class="tweet-screenName" href="#">@'+response[index]['username']+'</a> \
            <p>'+response[index]['message']+'</p> \
            </div>'
          );
        }
      });
    });
  }

  $(document).on('click', '.tweet-username', function() {
    getUserTweetsAndPost($(this).text());
    profileCardChanger($(this).text());
  });

  $(document).on('click', '.username', function() {
    getUserTweetsAndPost($(this).text());
    profileCardChanger($(this).text());
  });

  function searchTweetsAndPost(keyword) {
    searchTweets(keyword, function(tweets){
      console.log(tweets.length);
      if(tweets.length > 0) {
        $('.feed').text('');
        $.each(tweets, function(index){
          if(tweets[index]['username'] === currentUser) {
            $('.feed').prepend(
              '<div class="tweet col-xs-12"> \
              <a class="tweet-username" href="#">'+tweets[index]['username']+'</a> \
              <a class="tweet-screenName" href="#">@'+tweets[index]['username']+'</a> \
              <p>'+tweets[index]['message']+'</p> \
              <a class="delete-tweet" id="'+tweets[index]['id']+'" href="#">Delete</a> \
              </div>'
            );
          } else {
            $('.feed').prepend(
              '<div class="tweet col-xs-12"> \
              <a class="tweet-username" href="#">'+tweets[index]['username']+'</a> \
              <a class="tweet-screenName" href="#">@'+tweets[index]['username']+'</a> \
              <p>'+tweets[index]['message']+'</p> \
              </div>'
            );
          }
        });
      }
    });
  };

  $(document).on('click', '.search-btn', function(){
    searchTweetsAndPost($('.search-input').val());
  });

  getTweetsAndPost();
*/