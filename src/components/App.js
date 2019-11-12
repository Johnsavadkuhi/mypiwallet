import React from 'react';
import '../style/main.scss'
import GetBlockNumber from './block/GetBlockNumber'
import GetBlock from './block/GetBlock'
import Parent from './Parent'; 
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

            <Parent header ="transaction"/>
            <GetBlockNumber />
            <GetBlock />


          </div>


        </div>
      </div>
       </>
  );
}

export default App;
