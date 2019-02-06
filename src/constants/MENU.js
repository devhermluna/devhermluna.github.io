import React from 'react';
import Home from '../pages/Home';

export default [
  {
    path: '/',
    name: 'Home',
    component: Home,
    exact: true
  },
  {
    path: '/about',
    name: 'About Me',
    component: () => (
      <h1>About</h1>
    )
  },
  {
    path: '/skills',
    name: 'Skills',
    component: () => (
      <h1>Skills</h1>
    )
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: () => (
      <h1>Portfolio</h1>
    )
  },
  {
    path: '/work-experience',
    name: 'Work Experience',
    component: () => (
      <h1>Work experience</h1>
    )
  },
  {
    path: '/blog',
    name: 'Blog',
    component: () => (
      <h1>Blog</h1>
    )
  }
];
