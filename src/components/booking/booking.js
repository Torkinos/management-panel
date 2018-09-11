import React, { Component } from 'react';

import classes from './booking.css';

import Section from './section/section';
import { BOOKING_DATA } from './data';

class Booking extends Component {
  state = {
    inputValue: BOOKING_DATA.header.title
  };

  render() {
    const data = BOOKING_DATA;

    return (
      <div className={classes.booking}>
        <div className={classes.header}>
          <img
            className={classes.headerIcon}
            src={data.header.icon}
            alt={data.header.alt}
          />
          <label className={classes.label}>
            <span className={classes.labelText}>{data.header.label}</span>
            <input
              className={classes.input}
              defaultValue={this.state.inputValue}
              type="text"
            />
          </label>
        </div>

        {
          data.sections.map(section => {
            return (
              <Section
                key={section.name}
                icon={section.icon}
                iconActive={section.iconActive}
                name={section.name}
                text={section.text}
              />
            );
          })
        }
      </div>
    );
  }
}

export default Booking;
