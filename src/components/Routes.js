import React from 'react'
import {Route, BrowserRouter, Router, Switch} from 'react-router-dom';
import Welcome from './Welcome'
import People from './People'


function Routes (props) {
    return (
        <div>
            <BrowserRouter>
            <Route exact path = '/' component = {Welcome}/>
            <Route path = '/people' component = {People}/>
            </BrowserRouter>
        </div>
    )
}

export default Routes;