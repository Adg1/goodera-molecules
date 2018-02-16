// This file is shared across the demos.

import React from 'react';
import { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import InboxIcon from 'material-ui-icons/MoveToInbox';
import StarIcon from 'material-ui-icons/Star';

import { NavLink } from 'react-router-dom';

export const listItems = (
  <div>
    <ListItem button component={NavLink} exact to='/' activeClassName={'selected'}>
      <ListItemIcon>
        <InboxIcon />
      </ListItemIcon>
      <ListItemText primary="Clients" />
    </ListItem>
    <ListItem button component={NavLink} exact to='/tab1' activeClassName={'selected'}>
      <ListItemIcon>
        <StarIcon />
      </ListItemIcon>
      <ListItemText primary='Employees' />
    </ListItem>
  </div>
);

export const classes = {
  drawerHeader: 'drawer-header'
}

export const urls = {
  logo: 'https://www.omidyar.com/sites/default/files/styles/investee_logo/public/investees/logos/Goodera_282x149.jpg'
}