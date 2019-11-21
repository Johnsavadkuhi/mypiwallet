import React, { useState } from 'react';
import loadable from '@loadable/component'
import { GET_BALANCE, GET_FULL_BALANCE } from '../../request';
import Moneparam from '../methods_with_one_param';
import Mthreeparam from '../methods_with_three_param';
import RadioButton from '../RadioButton';
const CreateAccount = loadable(() => import('../account/CreateAccount'),
  {
    fallback: <div>
      <progress className="progress is-small is-primary" max="100">15%</progress>
      <progress className="progress is-danger" max="100">30%</progress>
      <progress className="progress is-medium is-dark" max="100">45%</progress>
      <progress className="progress is-large is-info" max="100">60%</progress>
    </div>
  });
  const SendTransaction = loadable(() => import('../account/SendTransaction'),
  {
    fallback: <div>
      <progress className="progress is-small is-primary" max="100">15%</progress>
      <progress className="progress is-danger" max="100">30%</progress>
      <progress className="progress is-medium is-dark" max="100">45%</progress>
      <progress className="progress is-large is-info" max="100">60%</progress>
    </div>
  });

function Account() {
  const [selected, setSelected] = useState("Balance");

  const radioChangeHandler = e => {

    setSelected(e.target.value)

  }
  return (<>

    <br />
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
              label="Create Account"
              value="CreateAccount"
            />
            <RadioButton
              name="answer"
              changed={radioChangeHandler}
              isSelected={selected === "SendTransaction"}
              id="4"
              label="Send Transaction"
              value="SendTransaction"
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
              label="Full Balance"
              value="FullBalance"
            />
          </div>


        </div>
        <div className="column is-9">

          {
            selected === "Balance" && <Moneparam header="getBalance" request={GET_BALANCE} placeholder="Address" />
          }
          {
            selected==="SendTransaction" && <SendTransaction  />
          }
          {
            selected === "CreateAccount" &&

            <CreateAccount header="Create Account " />


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