import React from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { pageFactory } from 'utils/pages';

import {
  Landing,
  Account,
  Map
} from 'pages';

const routes = [
  {
    component: Landing,
    path: '/',
    title: 'Home'
  },
  {
    component: Account,
    path: '/profile',
    title: 'My Account'
  },
  {
    component: Map,
    path: '/find-place',
    title: 'Find place'
  }
];

export const { pageUrl, pageBreadcrumb } = pageFactory(routes);

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          {routes.map(({ path, name, component }, key) => (
            <Route
              exact
              key={key}
              path={path}
              render={props => {
                const Component = component;

                return (
                  <Component
                    crumbs={pageBreadcrumb(component, props.match.params)}
                    {...props}
                  />
                );
              }}
            />
          ))}
        </Switch>
      </Router>
    );
  }
}

export default Routes;
