import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"
import App from './page/index';

import Home from './page/Home/'
import About from './page/About/'
import AboutA from './page/About/abouta.js'
import AboutB from './page/About/aboutb.js'
import Topics from './page/Topics/'

const routes = [
  {
    path: "/",
    component: Home
  },
  {
    path: "/about",
    component: About,
    routes: [
      {
        path: "/about/a",
        component: AboutA
      },
      {
        path: "/about/b",
        component: AboutB
      }
    ]
  },
  {
    path: "/topics",
    component: Topics
  }
];

export default () => (
  <Router >
    <Switch>
      <Route exact path="/" render={props => <App  {...props} routes={routes} />} />
    </Switch>
  </Router>
)