import '@src/feed';

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