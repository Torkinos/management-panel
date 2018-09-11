import React, { Component } from 'react';

import classes from './layout.css';

import Aux from '../../hoc/auxiliary.js';
import Header from './header/header';
import Drawer from './drawer/drawer';
import Booking from '../booking/booking.js';

import { LAYOUT_DATA } from './data';

class Layout extends Component {
  state = {
    showDrawer: true
  };

  hideDrawer = () => {
    this.setState({showDrawer: false});
  };

  showDrawer = () => {
    this.setState({showDrawer: true});
  };

  render() {
    const data = LAYOUT_DATA;

    return (
      <Aux>
        <Header showDrawer={this.showDrawer}/>
        <div className={classes.layout}>
          <Drawer
            drawerState={this.state.showDrawer}
            hideDrawer={this.hideDrawer}
          />
          <div className={classes.layoutInner}>
            <div className={classes.titleContainer}>
              <img
                className={classes.arrow}
                src={data.arrow.src}
                alt={data.arrow.alt}
              />
              <span className={classes.title}>{data.title}</span>
            </div>

            <div className={classes.content}>
              <Booking/>
            </div>
          </div>
        </div>
      </Aux>
    );
  }
}

export default Layout;
