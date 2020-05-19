import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../store/actions/index';
import { Link } from 'react-router-dom';

class ProtectedPage extends Component {

    onClickHandler = () => {
        this.props.logout();
    }

    render(){
        return (
            <div>
                <h1>You are logged in!</h1>
                <Link to="/"><div onClick={this.onClickHandler}>Logout</div></Link>
            </div>
            
        )
    }  
}

const mapDispatchToProps = dispatch => {
    return{
        logout: () => dispatch(actions.logout())
    }
    
}

export default connect(null, mapDispatchToProps)(ProtectedPage);