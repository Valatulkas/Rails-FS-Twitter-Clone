import React, { lazy } from 'react';
import ReactDOM from 'react-dom';
import Login from './login';
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
                    <p><strong>New to Twitter?</strong><span> Sign Up</span></p>
                    <input name='username' type='text' className='form-control form-control-lg mb-3' placeholder='Username' vlaue={username} onChange={this.handleChange} required />
                    <input name='email' type='text' className='form-control form-control-lg mb-3' placeholder='Email' value={email} onChange={this.handleChange} required />
                    <input name='password' type='text' className='form-control form-control-lg mb-3' placeholder='Password' value={password} onChange={this.handleChange} required />
                    <button type='submit' className='btn btn-info btn-block btn-lg'>Sign up for Twitter!</button> 
                    <hr/>
                    <p className="mb-0">Already have an account? <a className="text-primary pull-right" onClick={Login}>Log in</a></p>
                </form>
            </React.Fragment>
        )
    }
}

export default Signup