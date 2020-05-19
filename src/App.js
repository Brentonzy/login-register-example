import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import ProtectedPage from './component/ProtectedPage';
import Login from './component/Login';
import Register from './component/Register';
import PrivateRoute from './component/PrivateRoute';
import LandingPage from './component/LandingPage';

class App extends Component {
  render(){
    let routes = (
      <Switch>
        <PrivateRoute exact path='/welcome' component={ProtectedPage} />
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
        <Route path='/' exact component={LandingPage} />
        <Redirect from='/*' to='/' />
      </Switch>
    )

    return (
      <div className="App">
          {routes}
      </div>
    );
  }    
}


export default App;
