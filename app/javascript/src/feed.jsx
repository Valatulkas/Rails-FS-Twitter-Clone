import React from 'react';
import ReactDOM from 'react-dom';
import './feed.scss';

/*
var currentUser;

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
    
function profileCard(username) {
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

    // Tweet Character Limit
function charCount() {
        var char = $('.post-input').val().length;
        $('.post-input-length').text(140-char);
        if (char > 0 && char <= 140) {
            $("#post-tweet-btn").removeAttr('disabled');
        }  else {
            $("#post-tweet-btn").attr('disabled','disabled');
        }
}

$(document).on('keyup', '.post-input', function () {
        charCount();
});

$(document).on('click', '#post-tweet-button', function () {
        postTweet($('.post-input').val(), function(result) {
            if(result.success) {
              $('.post-input').val('');
              getTweetsAndPost();
              charCount();
              getUserTweets(currentUser, function(response) {
                $('.user-stats-tweets').text(response.length);
              });
            }
        });
})

function postTweets() {
        getAllTweets(function(tweets){
            $('.feed').text('');
            $.each(tweets, function(index){
                if(tweets[index]['username'] === currentUser) {
                    $('.feed').append(
                        '<div class="tweet col-xs-12"> \
                        <a class="tweet-username" href="#">'+tweets[index]['username']+'</a> \
                        <a class="tweet-screenName" href="#">@'+tweets[index]['username']+'</a> \
                        <p>'+tweets[index]['message']+'</p> \
                        <a class="delete-tweet" id="'+tweets[index]['id']+'" href="#">Delete</a> \
                        </div>'
                    );
                } else {
                    $('.feed').append(
                        '<div class="tweet col-xs-12"> \
                        <a class="tweet-username" href="#">'+tweets[index]['username']+'</a> \
                        <a class="tweet-screenName" href="#">@'+tweets[index]['username']+'</a> \
                        <p>'+tweets[index]['message']+'</p> \
                        </div>'
                    );
                }
            })
        })
}
    
$(document).on('click', '.navbar-brand', function() {
        postTweets();
        profileCard(currentUser);
});
    
$(document).on('click', '.delete-tweet', function() {
        deleteTweet($(this).attr('id'), function(){
          postTweets();
        });
});

function postUserTweets(username) {
        getUserTweets(username, function(response) {
            $('.feed').text('');
            console.log(response);
            $.each(response, function(index){
                if(response[index]['username'] === currentUser) {
                    $('.feed').append(
                        '<div class="tweet col-xs-12"> \
                        <a class="tweet-username" href="#">'+response[index]['username']+'</a> \
                        <a class="tweet-screenName" href="#">@'+response[index]['username']+'</a> \
                        <p>'+response[index]['message']+'</p> \
                        <a class="delete-tweet" id="'+response[index]['id']+'" href="#">Delete</a> \
                        </div>'
                    );
                } else {
                    $('.feed').append(
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
        postUserTweets($(this).text());
        profileCard($(this).text());
});

$(document).on('click', '.username', function() {
        postUserTweets($(this).text());
        profileCard($(this).text());
});

function postSearchTweets(keyword) {
        postSearchTweets(keyword, function(tweets) {
            console.log(tweets.length);
            if(tweets.length > 0) {
                $('.feed').text('');
                $.each(tweets, function(index){
                    if(tweets[index]['username'] === currentUser) {
                        $('.feed').append(
                          '<div class="tweet col-xs-12"> \
                          <a class="tweet-username" href="#">'+tweets[index]['username']+'</a> \
                          <a class="tweet-screenName" href="#">@'+tweets[index]['username']+'</a> \
                          <p>'+tweets[index]['message']+'</p> \
                          <a class="delete-tweet" id="'+tweets[index]['id']+'" href="#">Delete</a> \
                          </div>'
                        );
                      } else {
                        $('.feed').append(
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
}

$(document).on('click', '.search-btn', function(){
        postSearchTweets($('.search-input').valu());
    });

postTweets();

*/

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
          <div className='col-0 col-md-2'></div>
          <div className='col-3'>
            <div className="profileCard-content">
              <div className="user-field col-xs-12">
                <a className="username" href="#">User</a><br/>
                <a className="screenName" href="#">@User</a>
              </div>
              <div className="user-stats">
                <div className="col-3">
                  <a href="">
                    <span>Tweets<br/></span>
                    <span className="user-stats-tweets">10</span>
                  </a>
                </div>
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
          </div>
          <div className='col-0 col-md-1'></div>
          <div className='col-5'>
            <div className="col-xs-12 post-tweet-box">
              <textarea type="text" className="form-control post-input" rows="3" placeholder="What's happening?"></textarea>
              <div className="pull-right">
                <span className="post-char-counter">140</span>
                <button className="btn btn-primary" disabled id="post-tweet-btn">Tweet</button>
              </div>
            </div>
            <div className="feed mt-4">
              <div className="tweet col-12">
                <a className="tweet-username" href="#">User</a>
                <a className="tweet-screenName" href="#">@User</a>
                <p>This is a tweet</p>
                <a className="delete-tweet" href="#">Delete</a>
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

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Feed />,
    document.body.appendChild(document.createElement('div')),
  )
})

