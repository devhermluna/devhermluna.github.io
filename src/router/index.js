import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import uuidv4 from 'uuid/v4';
import MENU from '../constants/MENU';

export default () => (
  <Router>
    <Fragment>
      {
        MENU.map(({
          path,
          component,
          ...rest
        }) => (
          <Route
            {...rest}
            key={uuidv4()}
            path={path}
            component={component}
          />
        ))
      }
    </Fragment>
  </Router>
);
