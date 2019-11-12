import React from 'react';
import '../style/main.scss'
import Mnoparma from './methods_with_no_param' ; 

import Parent from './Parent'; 
import { GET_BLOCK_NUMBER, GET_PENDING_TRANSACTIONS, GET_BLOCK } from '../request';
import Moneparam from './methods_with_one_param';
function App() {

  return (
    <>
      <div className="container is-fluid">
        <div className="notification has-text-centered">
          <strong className="  is-size-4 has-text-gray">Pchain Api</strong>
        </div>
      </div>

      <div className="container is-fluid">
        <div className="columns has-text-grey	">
          <div className="column is-half is-offset-one-quarter">

            <Mnoparma header="getBlockNumber" request={GET_BLOCK_NUMBER}/>
            <Mnoparma header="getPendingTransactions" request={GET_PENDING_TRANSACTIONS}/>
            <Moneparam header = "getBlock" request={GET_BLOCK}/>

          </div>


        </div>
      </div>
       </>
  );
}

export default App;
