import React from 'react'; 
import {GET_BALANCE , GET_FULL_BALANCE} from '../request/'; 
import Moneparam from './methods_with_one_param';
import Mthreeparam from './methods_with_three_param';

function Account (){

    return (<>

        <div className="container is-fluid">
          <div className="columns has-text-grey	">
            <div className="column is-half is-offset-one-quarter">
                
              <Moneparam header="getBalance" request={GET_BALANCE} placeholder="Address"/>
              <Mthreeparam header="getFullBalance" request={GET_FULL_BALANCE} placeholder="Address" placeholdertwo="Block Number" 
              placeholderthree="Full Proxied" />

            </div>
          </div>
        </div>
      
      
    </>)

}

export default Account; 