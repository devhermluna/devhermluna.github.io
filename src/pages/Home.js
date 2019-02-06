import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import uuidv4 from 'uuid/v4';
import MENU from '../constants/MENU';
import '../sass/app.sass';
import '../sass/header.sass';

const App = () => (
  <Fragment>
    <img src="/images/design.jpg" className="app-design" alt="logo" />

    <header className="header">
      <div className="header-top-bar">
        <div className="site-logo" />
        <nav className="navigation-menu">
          <ul>
            {
              MENU.map(({
                path,
                name
              }) => (
                <li key={uuidv4()}>
                  <Link to={path}>{name}</Link>
                </li>
              ))
            }
          </ul>
        </nav>
      </div>
      <div className="position-titles">
        <p>Senior Frontend Developer</p>
        <p>UI/UX Developer</p>
      </div>
    </header>
  </Fragment>
);

export default App;
