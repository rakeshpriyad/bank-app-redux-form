import React  from 'react';
import {Home} from './container/Home';
import {User} from './container/User';
import { Provider } from 'react-redux';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import MenuBar  from './component/menu/MenuBar'
import Footer  from './component/footer/Footer'
import Header from './component/header/Header';
import UsersWithReduxSaga from './component/reports/users/UsersWithReduxSaga';
import UserTable from './component/reports/users/UsersWithReduxSaga'; 
import {configureStore} from "./store/configureStore";
import AccountSummary from './component/reports/accounts/AccountSummary';
import AccountStatement from './component/reports/accounts/AccountStatement';
import Payments from './component/forms/Payments/index';
import Recharge from './component/forms/BillPayments/index';
import ElectricityBill from './component/forms/BillPayments/ElectricityBill';

import UserApp from './component/reports/users/UserApp'; 

const store = configureStore();

const App = (
    <Provider store={store}>
    <Router>
      <div>
        <Header />
        <MenuBar />
        
        <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/UserApp' component={UserApp} />

        <Route exact path='/AccountSummary' component={AccountSummary} />
        <Route exact path='/AccountStatement' component={AccountStatement} />
        <Route exact path='/Recharge' component={Recharge} />
        <Route exact path='/ElectricityBill' component={ElectricityBill} />
        <Route exact path='/Payments' component={Payments} />
        <Route exact path='/User' component={User} />
        <Route exact path='/Users' component={UserTable} />
        <Route exact path='/UsersLoad' component={UsersWithReduxSaga} />
        </Switch>
        <Footer />
      </div>
    </Router>
    </Provider>
  );

  export default App