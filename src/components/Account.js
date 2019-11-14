import React from 'react'; 
import {GET_BALANCE} from '../request/'; 
import Moneparam from './methods_with_one_param';

function Account (){

    return (<>

        <div className="container is-fluid">
          <div className="columns has-text-grey	">
            <div className="column is-half is-offset-one-quarter">
                
              <Moneparam header="getBalance" request={GET_BALANCE} placeholder="Address"/>

            </div>
          </div>
        </div>
      
      
    </>)

}

export default Account; 