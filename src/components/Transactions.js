import React from 'react'; 
import {GET_BLOCK } from '../request/'; 
import Mnoparma from './methods_with_no_param'; 
import Moneparam from './methods_with_one_param';

function Transactions (){

    return (<>

        <div className="container is-fluid">
          <div className="columns has-text-grey	">
            <div className="column is-half is-offset-one-quarter">


              <Moneparam header="getBlock" request={GET_BLOCK} />

            </div>


          </div>
        </div>
      
      
    </>)

}

export default Transactions; 