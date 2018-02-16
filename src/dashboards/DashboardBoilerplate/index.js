import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/app/App';
import Page1 from './pages/page1/Page1';
import registerServiceWorker from './registerServiceWorker';

import {
  BrowserRouter as Router,
  Route, Switch
} from 'react-router-dom';

ReactDOM.render((
  <div>
    <Router>
      <Switch>
        <Route exact path='/' component={App} />
        <Route path='/tab1' component={Page1} />
      </Switch>
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