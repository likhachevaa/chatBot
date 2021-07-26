import React, { Component } from 'react';
import './style.scss';
import Home from '@pages/Home'
import { Switch, Route } from 'react-router-dom';


export default class Router extends Component {

    render() {
        return (
            <Switch className="router">
                <Route exact path='/' component={Home} />
                <Route
                    exact
                    path='/Chat/:chatId'
                    render={(obj) =>
                        <Home chatId={Number(obj.match.params.chatId)} />}
                />
            </Switch>
        );
    }
}