import groupIcon from '../../static/booking-icons/group.svg';
import union from '../../static/booking-icons/union.svg';
import cpu from '../../static/booking-icons/cpu.svg';
import cloud from '../../static/booking-icons/cloud.svg';
import calendar from '../../static/booking-icons/calendar.svg';
import room from '../../static/booking-icons/room.svg';
import user from '../../static/booking-icons/user.svg';

import unionActive from '../../static/booking-icons/union-active.svg';
import cpuActive from '../../static/booking-icons/cpu-active.svg';
import cloudActive from '../../static/booking-icons/cloud-active.svg';
import calendarActive from '../../static/booking-icons/calendar-active.svg';
import roomActive from '../../static/booking-icons/room-active.svg';
import userActive from '../../static/booking-icons/user-active.svg';

export const BOOKING_DATA = {
  header: {
    icon: groupIcon,
    alt: 'group icon',
    title: 'inbound demos',
    label: 'name'
  },
  sections: [
    {
      icon: union, iconActive: unionActive,
      name: 'rules',
      text: 'Filter which events get assigned.For instance only events with accounts in San Francisco'
    },
    {icon: cpu, iconActive: cpuActive, name: 'algorithm', text: 'Filter which events get assigned.'},
    {icon: cloud, iconActive: cloudActive, name: 'online booking URL', text: 'Filter which events get assigned.'},
    {icon: calendar, iconActive: calendarActive, name: 'Meeting Settings', text: 'Filter which events get assigned.'},
    {
      icon: calendar,
      iconActive: calendarActive,
      name: 'Advanced Meeting Settings',
      text: 'Filter which events get assigned.'
    },
    {icon: room, iconActive: roomActive, name: 'Active Meeting Rooms', text: 'Filter which events get assigned.'},
    {icon: user, iconActive: userActive, name: 'Active Users', text: 'Filter which events get assigned.'}
  ]
};
