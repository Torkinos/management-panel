import React, { Component } from 'react';

import classes from './drawer.css';

import Navigation from './navigation/navigation';
import { DRAWER_DATA } from './data';

class Drawer extends Component {

  render() {
    const data       = DRAWER_DATA;
    let drawerHidden = classes.drawer + ' ' + classes.drawerHide;

    return (
      <div className={this.props.drawerState ? classes.drawer : drawerHidden}>
        <div className={classes.drawerInner}>
          <div className={classes.titleContainer}>
            <div className={classes.ball}></div>
            <span className={classes.title}>{data.title}</span>
            <img
              className={classes.triangle}
              src={data.showMore}
              alt=""
            />
          </div>
          <Navigation data={data}/>

          <div
            className={classes.hideContainer}
            onClick={this.props.hideDrawer}
          >
            <div className={classes.hide}>
              <img
                className={classes.hideIcon}
                src={data.hide.icon}
                alt=""/>
              {data.hide.name}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Drawer;
