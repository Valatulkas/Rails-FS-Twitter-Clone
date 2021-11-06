import '@src/home';

function Request () {
    this.type = '';
    this.url = '';
    this.data = {};
    this.dataType = 'json';
    this.success = function(response) {}
    this.error = function(response) {}
};

// User
function createUser(username, email, password, callback) {
    var newRequest = new Request();
    newRequest['type'] = 'POST';
    newRequest['url'] = 'users';
    newRequest['data'] = {
        'user': {
            'username': username,
            'email': email,
            'password': password
        }
    };
    newRequest['success'] = function(response){
        console.log(response);
        return callback();
    };
    $.ajax(newRequest);
};

// Sign in
function signIn(username, password, callback) {
    var newRequest = new Request();
    newRequest['type'] = 'POST';
    newRequest['url'] = 'sessions';
    newRequest['xhrFields'] = { 'withCredentials': true};
    newRequest['data'] = {
        'user': {
            'username': username,
            'password': password
        }
    };
    newRequest['success'] = function(response){
        console.log(response);
        return callback();
    };
    $.ajax(newRequest);
};

// Log off
function logOff(callback) {
    var newRequest = new Request();
    newRequest['type'] = 'DELETE';
    newRequest['url'] = 'sessions';
    newRequest['xhrFields'] = { 'withCredentials': true };
    newRequest['success'] = function(response){
        console.log(response);
        return callback();
    };
  $.ajax(newRequest);
};

// Authentication
function authenticate(successCB,errorCB) {
    var newRequest = new Request();
    newRequest['type'] = 'GET';
    newRequest['url'] = 'authenticated';
    newRequest['xhrFields'] = { 'withCredentials': true };
    newRequest['success'] = function(response){
      console.log(response);
      return successCB(response);
    };
    newRequest['error'] = function(errorMessage) {
      return errorCB(errorMessage);
    }
    $.ajax(newRequest);
};

// Tweet Post
function postTweet(msg, callback) {
    var newRequest = new Request();
    newRequest['type'] = 'POST';
    newRequest['url'] = 'tweets';
    newRequest['xhrFields'] = { 'withCredentials': true };
    newRequest['data'] = {
      'tweet': {
        'message': msg
      }
    };
    newRequest['success'] = function(response){
      console.log(response);
      return callback({'success': true});
    };
    $.ajax(newRequest);
};

// Render all Tweets
function getAllTweets(callback) {
    var newRequest = new Request();
    newRequest['type'] = 'GET';
    newRequest['url'] = 'tweets';
    newRequest['success'] = function(response){
      return callback(response.tweets);
    };
    $.ajax(newRequest);
};

// Tweets by ID
function getOneTweet(id) {
    var newRequest = new Request();
    newRequest['type'] = 'GET';
    newRequest['url'] = 'tweets/' + id;
    newRequest['success'] = function(response){
      console.log(response);
    };
    $.ajax(newRequest);
};
  
// Tweets by Username
function getUserTweets(username, callback) {
    var newRequest = new Request();
    newRequest['type'] = 'GET';
    newRequest['url'] = 'users/' + username + '/tweets';
    newRequest['success'] = function(response){
      console.log(response);
      return callback(response.tweets);
    };
    $.ajax(newRequest);
};
  
// Delete tweet by ID
function deleteTweet(id, callback) {
    var newRequest = new Request();
    newRequest['type'] = 'DELETE';
    newRequest['url'] = 'tweets/' + id;
    newRequest['xhrFields'] = { 'withCredentials': true };
    newRequest['success'] = function(response){
      console.log(response);
      return callback();
    };
    $.ajax(newRequest);
};
  
// Keyword Search 
function searchTweets(keyword, callback) {
    var newRequest = new Request();
    newRequest['type'] = "GET";
    newRequest['url'] = "tweets/search/"+keyword;
    newRequest["success"] = function(response){
      console.log(response);
      return callback(response.tweets);
    };
    $.ajax(newRequest);
};

