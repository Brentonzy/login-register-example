import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../store/actions/index';
import { Redirect } from 'react-router-dom';

class Login extends Component {

    state = {
        email: '',
        password: '',
        isLogin: true
    }

    inputOnChangerHander = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        })
    }

    submitHandler = event => {
        event.preventDefault();
        const { email, password, isLogin } = this.state;
        this.props.login(email, password, isLogin);
    }

    renderedContent = () => {
            if (localStorage.getItem('token')) {
                return <Redirect to="/welcome" />;
            }else {
                return (
                <form onSubmit={this.submitHandler}>
                    <input 
                        type="text" 
                        name="email"
                        placeholder="Email" 
                        value={this.state.email} 
                        onChange={this.inputOnChangerHander} />
                    <input 
                        type="text" 
                        name="password"
                        placeholder="Password" 
                        value={this.state.password} 
                        onChange={this.inputOnChangerHander} />
                    <button>Login</button>
                </form>
                );
            }
        }

    render() {
        return <div>{this.renderedContent()}</div>;
    }
}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.token!==null
    }
}
const mapDispatchToProps = dispatch => {
    return {
        login: (email, password, isLogin) => dispatch(actions.auth(email, password, isLogin))
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Login);