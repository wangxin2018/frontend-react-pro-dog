import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"


export default class App extends Component {
    render() {
        console.log('this.props===', this.props);
        const { routes } = this.props;
        return (
            <div>
                <Router>
                    <div>
                        <ul>
                            <li>
                                <Link to="/">HOME</Link>
                            </li>
                            <li>
                                <Link to="/about">about</Link>
                            </li>
                            <li>
                                <Link to="/topics">topics</Link>
                            </li>
                        </ul>
                        {routes.map((route, i) => {
                            return (
                                <Route
                                    key={i}
                                    path={route.path}
                                    render={props => (<route.component {...props} routes={route.routes} />)}
                                />
                            )
                        })}
                    </div>
                </Router>
            </div>
        );
    }
}