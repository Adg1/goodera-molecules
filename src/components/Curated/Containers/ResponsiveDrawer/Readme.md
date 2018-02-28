Example of Responsive Drawer

```jsx
const navItems = [
  {
    link: '/',
    name: 'Clients',
    icon: 'MoveToInbox'
  },
  {
    link: '/tab1',
    name: 'Employees',
    icon: 'Star'
  },
  {
    link: '/tab2',
    name: 'Milestones',
    icon: 'Star'
  }
];
const classes = {
  drawerHeader: 'drawer-header'
};
const urls = {
  logo: 'https://www.omidyar.com/sites/default/files/styles/investee_logo/public/investees/logos/Goodera_282x149.jpg'
};
<ResponsiveDrawer navItems={navItems} classes={classes} urls = {urls}></ResponsiveDrawer>
```