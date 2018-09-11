import React, { Component } from 'react';

import classes from './section.css';

import plus from '../../../static/booking-icons/add.svg';
import minus from '../../../static/booking-icons/minus.svg';

class Section extends Component {
  state = {
    open: false
  };

  toggleSection = () => {
    let toggle = !this.state.open;

    this.setState({open: toggle});
  };

  render() {
    let sectionHidden = classes.body + ' ' + classes.hidden;
    let iconActive    = classes.iconContainer + ' ' + classes.active;

    return (
      <div className={classes.section}>
        <div className={classes.header}>
          <div className={classes.headerInner}>
            <div className={this.state.open ? iconActive : classes.iconContainer}>
              <img
                className={classes.icon}
                src={this.state.open ? this.props.iconActive : this.props.icon}
                alt="icon"
              />
            </div>
            <div className={classes.textContainer}>
              <div className={classes.title}>{this.props.name}</div>
              <div className={classes.description}>{this.props.text}</div>
            </div>
          </div>
          <img
            className={classes.toggle}
            onClick={() => this.toggleSection()}
            src={this.state.open ? minus : plus}
            alt={'toggle'}
          />
        </div>

        <div className={this.state.open ? classes.body : sectionHidden}></div>
      </div>
    );
  }
}

export default Section;
