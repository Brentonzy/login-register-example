import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../store/actions/index';

class Register extends Component {

    state = {
        email: '',
        password: '',
        isLogin: false
    }

    inputOnChangerHander = e => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        })
    }

    submitHandler = event => {
        event.preventDefault();
        const { email, password, isLogin } = this.state;
        this.props.register(email, password, isLogin);
        this.props.history.push('/');
    }
    render(){
        return(
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
                <button>Register</button>
            </form>
            
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        register: (email, password, isLogin) => dispatch(actions.auth(email, password, isLogin))
    }
}

export default connect(null, mapDispatchToProps) (Register);