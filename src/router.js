import { HashRouter as Router, Route, Switch } from "react-router-dom";
import React from 'react'
import Home from "./pages/home";
import Login from "./pages/login/login";
import Logintbygoogle from './pages/test/Logintbygoogle'
import Dashboard from "./pages/test/Dashboard";


export default function IRouter() {
    return <Router>

        <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/home" component={Home} />
            <Route path='/logoogle' component={Logintbygoogle} ></Route>
            <Route path='/Dashboard' component={Dashboard} ></Route>
        </Switch>

    </Router>
}