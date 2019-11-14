import React from 'react'; 
import {GET_TRANSACTION_COUNT, GET_TRANSACTION , GET_TRANSACTION_RECEIPT , GET_TRANSACTION_FROM_BLOCK} from '../request/'; 
import Moneparam from './methods_with_one_param';
import Mtwoparam from './methods_with_two_param'; 
function Transactions (){

    return (<>

        <div className="container is-fluid">
          <div className="columns has-text-grey	">
            <div className="column is-half is-offset-one-quarter">

              <Moneparam header="getTransaction" request={GET_TRANSACTION} placeholder="Transaction Hash" />
              <Moneparam header="getTransactionCount" request={GET_TRANSACTION_COUNT} placeholder="Address"/>
              <Moneparam header="getTransactionReceipt" request={GET_TRANSACTION_RECEIPT} placeholder="Transaction Hash"/>
              <Mtwoparam header="getTransactionFromBlock" request={GET_TRANSACTION_FROM_BLOCK} placeholder="Block Number" placeholdertwo ="Transaction Index"/>
            </div>


          </div>
        </div>
      
      
    </>)

}

export default Transactions; 