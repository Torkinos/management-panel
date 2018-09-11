import triangle from '../../../static/icons/rectangle.png';

import calendarIcon from '../../../static/icons/calendar.svg';
import reports from '../../../static/icons/reports.svg';
import booking from '../../../static/icons/booking.svg';
import meeting from '../../../static/icons/meeting.svg';
import reminders from '../../../static/icons/reminders.svg';
import conference from '../../../static/icons/conference.svg';
import forms from '../../../static/icons/forms.svg';
import router from '../../../static/icons/router.svg';
import userSettings from '../../../static/icons/user-settings.svg';
import integrations from '../../../static/icons/integrations.svg';
import hide from '../../../static/icons/hide.svg';

export const DRAWER_DATA = {
  title: 'marketing',
  showMore: triangle,
  nav: [
    {icon: calendarIcon, name: 'events', path: '/events'},
    {icon: reports, name: 'reports', path: '/reports'},
    {icon: booking, name: 'booking links', path: '/'},
    {icon: reminders, name: 'reminders', path: '/reminders'},
    {icon: meeting, name: 'meeting templates', path: '/meeting'},
    {icon: conference, name: 'conference rooms', path: '/conference'},
    {icon: forms, name: 'forms', path: '/forms'},
    {icon: router, name: 'inbound router', path: '/router'},
    {icon: userSettings, name: 'user settings', path: '/user-settings'},
    {icon: integrations, name: 'integrations', path: '/integrations'},
  ],
  hide: {icon: hide, name: 'hide sidebar'},
};
