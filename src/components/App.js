import React from 'react';
import '../style/main.scss'
import GetBlockNumber from './block/GetBlockNumber'
import GetBlock from './block/GetBlock'
function App() {

  return (
    <>
      <div class="container is-fluid">
        <div class="notification has-text-centered">
          <strong className="  is-size-4 has-text-gray">Pchain Api</strong>
        </div>
      </div>

      <div className="container is-fluid">
        <div className="columns has-text-grey	">
          <div className="column is-half is-offset-one-quarter">

            <GetBlockNumber />
            <GetBlock />
            

          </div>


        </div>
      </div>
       </>
  );
}

export default App;
