import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"

export default class About extends Component {
    render() {
        console.log('about---this.props--', this.props);
        const { routes } = this.props;
        return (
            <div>
                <h2>About</h2>
                <ul>
                    <li>
                        <Link to="/about/a">A...</Link>
                    </li>
                    <li>
                        <Link to="/about/b">B...</Link>
                    </li>
                </ul>
                {routes.map((route, i) => {
                    return (
                        <Route
                            key={i}
                            path={route.path}
                            render={props => (
                                <route.component {...props} routes={route.routes} />
                            )}
                        />
                    )
                })}
            </div>
        );
    }
}