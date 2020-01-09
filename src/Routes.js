import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Home from './Home';
import Welcome from './Welcome';
import Registration from './Registration';
import App from './App';


const Routes = () => {
    return (
    <Router>
        <div>
            <Route exact path="/" component={App}/>
            <Route path="/Home" component={Home}/>
            <Route path="/Welcome" component={Welcome}/>
            <Route path="/Registration" component={Registration}/>
        </div>
    </Router>
    )
}

export default Routes;
