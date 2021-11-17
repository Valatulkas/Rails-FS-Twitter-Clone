import React from 'react';
import ReactDOM from 'react-dom';
import { safeCredentials, handleErrors } from '@utils/fetchHelper';

class Signup extends React.Component {
    state = {
        email: '',
        username: '',
        password: '',
        error: '',
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }
    signup = (e) => {
        if (e) { e.preventDeafult(); }
        this.setState({
            error: '',
        });
        fetch('/api/users', safeCredentials({
            method: 'POST',
            body: JSON.stringify({
                user: {
                    email: this.state.email,
                    username: this.state.username,
                    password: this.state.password,
                }
            })
        }))
            .then(handleErrors)
            .then(data => {
                if (data.user) {
                    this.login();
                }
            })
            .catch(error => {
                this.setState({
                    error: 'Could not sign up.',
                })
            })
    }
    login = (e) => {
        if (e) { e.preventDefault(); }
        this.setState({
            error: '',
        });
        fetch('/api/sessions', safeCredentials({
            method: 'POST',
            body: JSON.stringify({
                user: {
                    email: this.state.email,
                    password: this.state.password,
                }
            })
        }))
            .then(handleErrors) 
            .then(data => {
                if(data.success) {
                    const params = new URLSearchParams(window.location.search);
                    const redirect_url = params.get('redirect_url') || '/';
                    window.location = redirect_url;
                }
            })
            .catch(error => {
                this.setState({
                    error: 'Could not log in.',
                })
            })
    }
    render () {
        const { email, username, password, error } = this.state;
        return (
            <React.Fragment>
                <form onSubmit={this.signup}>
                    <input name='username' type='text' />
                </form>
            </React.Fragment>
        )
    }
}

export default Signup


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