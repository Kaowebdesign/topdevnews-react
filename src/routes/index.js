import React from 'react';
import { Route, Switch } from 'react-router';
// import Header from '../components/Header.jsx';
import Home from '../page/Home';
import About from '../page/About';
import SinglePost from '../components/SinglePost';

const routes = (
    <div>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/post/:type/:slug" component={SinglePost} />
        </Switch>
    </div>
);

export default routes;