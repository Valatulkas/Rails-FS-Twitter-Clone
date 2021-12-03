import React from 'react';
import ReactDOM from 'react-dom';
import { handleErrors } from '@utils/fetchHelper';
import './user.scss';

class UserFeed extends React.Component {
    state = {
        user: {},
        loading: true,
    }

    componentDidMount() {
      this.fetchTweets();
    }

    fetchTweets = () => {
      fetch('/api/feed/${this.props.user_username}') 
        .then(handleErrors)
        .then(data => {
          console.log(data)
          this.setState({
            user: data.user,
            loading: false,
          })
        })
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
            this.indexTweets()
          }
        })
        .catch(error => {
          this.setState({
            error: 'Could not post tweets...'
          })
        })
    }

    render () {
        const { user, loading } = this.state;
        if (loading) {
          return <p>loading ...</p>
        };

        const { tweet, username } = user

        return (
          <React.Fragment>
            <nav className='navbar sticky-top'>
              <a className='navbar-brand' href='#'><h6>tweeeeets</h6></a>
              <form className='form-inline'>
                <input type="text" className="form-control mr-sm-2 search-input my-2" placeholder="Search for..." />
                <button className="btn btn-outline-secondary my-2 mr-5">Go!</button>
                <ul>
                  <li className='dropdown mt-2'>
                    <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"><span id='user-icon'>{username}</span></a>
                    <ul className="dropdown-menu row" role="menu">
                      <li ><a href="#" className="username">User</a></li>
                      <hr className='py-0 my-0'/>
                      <li ><a href="#">Lists</a></li>
                      <li ><a href="#">Help</a></li>
                      <hr className='py-0 my-0'/>
                      <li ><a href="#">Keyboard shortcuts</a></li>
                      <li ><a href="#">Settings</a></li>
                      <hr className='py-0 my-0'/>
                      <li ><button className='btn btn-default'>Log Out</button></li>
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
                          <a className="username" href={`/tweets/@${username}`}><strong>{username}</strong></a><br/>
                          <a className="screenName mt-3" href='#'><small>@User</small></a>
                        </div>
                        <div className='row user-stats mb-2 mt-2'>
                          <div className='col-3'>
                            <a href="#">
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
                    <div className="feed">
                      {tweet.map(tweet => {
                        return (
                        <div key={tweet.id} className='tweet'>
                          <a href={`/feed/@${tweet.usename}`} id='space'>{tweet.username}</a>
                          <a href={`/feed/@${tweet.username}`} id='username'><small>@{tweet.username}</small></a>
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
  const node = document.getElementById('params');
  const data = JSON.parse(node.getAttribute('data-params'));

  ReactDOM.render(
    <UserFeed user_username={data.user_username} />,
    document.body.appendChild(document.createElement('div')),
  )
})