import React from 'react';
import '../style/main.scss'
import Navigation from './navigation';
import Blocks from './Blocks'; 
import Contracts from './Contracts'; 
import Utilities from './Utilities'; 
import Account from './account/Account';
import Transactions from './Transactions';
import Wallet from './wallet'; 

import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";



function App() {

  return (
    <>
      <Router >

        <Navigation />

        <Switch>

          <Route exact path="/">
            <Account/>
          </Route>
          <Route path="/wallet">
            <Wallet/>
          </Route>
          <Route path="/transactions">
            <Transactions/>
          </Route>
          <Route path="/contracts">
            <Contracts/>
          </Route>
          <Route path="/utilities">
            <Utilities/>
            </Route>
            <Route path="/blocks">
              <Blocks/>
            </Route>
        

        </Switch>

      
      </Router>

    </>
  );
}

export default App;
