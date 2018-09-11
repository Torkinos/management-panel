import React, { Component } from 'react';

import classes from './header.css';
import { HEADER_DATA } from './data';

import Navigation from './navigation/navigation';

class Header extends Component {
  render() {
    const data = HEADER_DATA;

    return (
      <div className={classes.header}>
        <img
          onClick={this.props.showDrawer}
          className={classes.logo}
          src={data.logo.src}
          alt={data.logo.alt}
        />

        <Navigation data={data}/>

        <div className={classes.userContainer}>
          <img
            className={classes.alertIcon}
            src={data.icons.notifications.src}
            alt={data.icons.notifications.name}
          />
          <img
            className={classes.userIcon}
            src={data.icons.user.src}
            alt={data.icons.user.name}
          />
        </div>
      </div>
    );
  }
}

export default Header;
