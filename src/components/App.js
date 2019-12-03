import React from 'react';
import '../style/main.scss'
import Navigation from './navigation';
import Blocks from './Blocks'; 
import Contracts from './Contracts'; 
import Utilities from './Utilities'; 
import Account from './account/Account';
import Transactions from './transaction/Transactions';
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

          <Route exact path="/" component={Account}/>
          
          <Route path="/wallet" component={Wallet}/>
            
          <Route path="/transactions" component={Transactions}/>
            
          <Route path="/contracts" component={Contracts}/>
          
          <Route path="/utilities" component={Utilities}/>
            
          <Route path="/blocks" component={Blocks}/>
              
        </Switch>

      
      </Router>

    </>
  );
}

export default App;
