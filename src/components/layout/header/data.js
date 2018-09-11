import logo from '../../../static/logos/logo.png';
import calendarIcon from '../../../static/icons/calendar.png';
import notebook from '../../../static/icons/notebook.png';
import checkMark from '../../../static/icons/checkmark.png';
import email from '../../../static/icons/email.png';
import settings from '../../../static/icons/settings.png';
import bell from '../../../static/icons/bell.png';
import user from '../../../static/icons/user.png';

export const HEADER_DATA = {
  logo: {
    alt: 'company logo',
    src: logo
  },
  nav: [
    {icon: calendarIcon, name: 'calendar', path: '/'},
    {icon: notebook, name: 'notes', path: '/notebook'},
    {icon: checkMark, name: 'tasks', path: '/tasks'},
    {icon: email, name: 'email', path: '/email'},
    {icon: settings, name: 'settings', path: '/settings'}
  ],
  icons: {
    notifications: {name: 'notifications', src: bell},
    user: {name: 'user', src: user},
  }
};
