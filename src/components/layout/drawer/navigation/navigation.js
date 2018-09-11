import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import classes from './navigation.css';

class Navigation extends Component {
  render() {
    const data = this.props.data;
    return (
      <ul className={classes.navigation}>
        {
          data.nav.map(i => {
            return (
              <li
                className={classes.linkContainer}
                key={i.name}
              >
                <NavLink
                  className={classes.link}
                  to={i.path}
                  activeClassName="drawerActive"
                  exact
                >
                  <img
                    className={classes.icon}
                    src={i.icon}
                    alt=""/>
                  {i.name}
                </NavLink>
              </li>
            );
          })
        }
        <div className={classes.border}></div>
      </ul>
    );
  }
}

export default Navigation;
