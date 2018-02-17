// This file is shared across the demos.

import React from 'react';
import { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import InboxIcon from 'material-ui-icons/MoveToInbox';
import StarIcon from 'material-ui-icons/Star';

import { NavLink } from 'react-router-dom';

export const navItems = [
  {
    link: '/',
    name: 'Clients',
    icon: 'MoveToInbox'
  },
  {
    link: '/tab1',
    name: 'Employyes',
    icon: 'Star'
  },
  {
    link: '/tab2',
    name: 'Milestones',
    icon: 'Star'
  }
]

export const classes = {
  drawerHeader: 'drawer-header'
}

export const urls = {
  logo: 'https://www.omidyar.com/sites/default/files/styles/investee_logo/public/investees/logos/Goodera_282x149.jpg'
}