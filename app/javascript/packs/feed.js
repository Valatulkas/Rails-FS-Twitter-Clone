import '@src/feed';

$('.feeds.index').ready(function() {
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

    
})