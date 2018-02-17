import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/app/App';
import Page1 from './pages/page1/Page1';
import Page2 from './pages/page2/Page2';
import registerServiceWorker from './registerServiceWorker';

import {
  BrowserRouter as Router,
  Route, Switch
} from 'react-router-dom';

import { MuiThemeProvider } from 'material-ui/styles';

import { classes, urls, navItems } from './config/nav.config';
import { theme } from './config/ui.config';

import ResponsiveDrawer from '../../components/Curated/Containers/ResponsiveDrawer/ResponsiveDrawer';

ReactDOM.render((
  <div>
    <Router>
      <MuiThemeProvider theme={theme}>
        <ResponsiveDrawer classes={classes} urls = {urls} navItems={navItems}>
          <Switch>
            <Route exact path='/' component={App} />
            <Route exact path='/tab1' component={Page1} />
            <Route exact path='/tab2' component={Page2} />
          </Switch>
        </ResponsiveDrawer>
      </MuiThemeProvider>
    </Router>
  </div>
), document.getElementById('root'));
registerServiceWorker();


{/* <Route exact path='/campaign/:cid' component={Campaign} />
<Route path='/campaign/:cid/opportunity/:oid' component={Opportunity} />
<Route exact path='/terms' component={Terms} />
<Route exact path='/privacy' component={Privacy} />
<Route exact path='/cyclothon2017' component={Cyclothon} />
<Route path='/:slug' component={Landing} /> */}