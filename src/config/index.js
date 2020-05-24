import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {
  Landing,
  Account,
  Map,
  AddVehicle,
  AddSubscription,
  AddPayment,
} from 'pages';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route path="/addsubscription">
              <AddSubscription />
            </Route>
            <Route path="/addvehicle">
              <AddVehicle />
            </Route>
            <Route path="/add-payment">
              <AddPayment />
            </Route>
            <Route path="/profile">
              <Account />
            </Route>
            <Route path="/map">
              <Map />
            </Route>
            <Route path="/">
              <Landing />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
