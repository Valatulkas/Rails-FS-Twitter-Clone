import React from 'react';
import ReactDOM from 'react-dom';
import { safeCredentials, handleErros } from '@utils/fetchHelper';
                
class Login extends React.Component {
    state = {
        username: '',
        password: '',
        error: '',
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
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
                    username: this.state.username,
                    password: this.state.password,
                }
            })
        }))
            .then(handleErros)
            .then(data => {
                if(data.success) {
                    const params = new URLSearchParams(window.location.search);
                    const redirect_url = params.get('redirect_url') || '/feed';
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
        const { username, password, error } = this.state;
        return (
            <React.Fragment>
                <form onSubmit={this.login}>
                    <p><strong>Already on Twitter?</strong><span> Sign In</span></p>
                    <input name='username' type='text' className='form-control mb-3' placeholder='Username' value={username} onChange={this.handleChange} required />
                    <input name='password' type='text' className='form-control mb-3' placeholder='Password' value={password} onChange={this.handleChange} required />
                    <button type='submit' className='btn btn-info btn-block pl-3'>Log In</button>
                    {error && <p className='text-danger mt-2'>{errors}</p>}
                    <a href="#">Forgot password?</a>
                </form>
            </React.Fragment>
        )
    }
}
export default Login