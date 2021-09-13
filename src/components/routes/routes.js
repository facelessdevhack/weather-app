import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom';
import Home from '../../pages/home/home';
import AddCityModal from '../../pages/addCityModal/addCityModal';
import Cities from '../../pages/cities/cities';
export class Routes extends Component {
    render() {
        return (
            <Switch>
                <Route component={Home} exact path='/' />
                <Route component={Cities} path='/city' />
                <Route component={AddCityModal} path='/modal' />
            </Switch>
        )
    }
}

export default Routes
