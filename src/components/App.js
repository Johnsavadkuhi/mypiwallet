import React from 'react';
import '../style/main.scss'
import GetBlockNumber from './block/GetBlockNumber'
import GetBlock from './block/GetBlock'
function App() {

  return (
    <>
      <div className="has-text-centered is-size-3">  <strong>Pchain Api</strong> </div>

      <div className="columns">
        <div className="column is-half is-offset-one-quarter">
        
          <GetBlockNumber/> 
          <GetBlock/>
          

        </div>
        

      </div>
    </>
  );
}

export default App;
