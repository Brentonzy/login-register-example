import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
    return (
        <div>
            <h1>Welcome</h1>
            <div><Link to='/register'>Register</Link></div>
            <div><Link to='/login'>LogIn</Link></div>
        </div>
    );

}

export default LandingPage;