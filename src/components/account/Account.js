import React, {useState} from 'react'; 
import {GET_BALANCE , GET_FULL_BALANCE} from '../../request'; 
import Moneparam from '../methods_with_one_param';
import Mthreeparam from '../methods_with_three_param';
import RadioButton from '../RadioButton';
import CreateAccount from '../account/CreateAccount'; 

function Account (){
  const [selected, setSelected] = useState("CreateAccount");
  
  const radioChangeHandler = e => {
 
    setSelected(e.target.value)
 
  }  
    return (<>
    
        <br/>
        <div className="container is-fluid">
          <div className="columns has-text-grey	">
          <div className="column is-3">
            <div className="box">
              <p className="title is-5">Select a Method -> </p>
              <RadioButton
                name="answer"
                changed={radioChangeHandler}
                isSelected={selected === "CreateAccount"}
                id="3"
                label="CreateAccount"
                value="CreateAccount"
              />
              <RadioButton
                changed={radioChangeHandler}
                isSelected={selected === "Balance"}
                name="answer"
                id="1"
                label="Balance"
                value="Balance"
              />

              <RadioButton
                name="answer"
                changed={radioChangeHandler}
                isSelected={selected === "FullBalance"}
                id="2"
                label="FullBalance"
                value="FullBalance"
              />
            </div>


          </div>
          <div className="column is-9">
          {
              selected === "CreateAccount" && <CreateAccount header="Create Account " />
            }
            {
              selected === "Balance" && <Moneparam header="getBalance" request={GET_BALANCE} placeholder="Address"/>
            }
            {
              selected === "FullBalance" && <Mthreeparam header="getFullBalance" request={GET_FULL_BALANCE} placeholder="Address" placeholdertwo="Block Number" 
              placeholderthree="Full Proxied" />
            }
            
          

          </div> 
          </div>
        </div>
      
      
    </>)

}

export default Account; 