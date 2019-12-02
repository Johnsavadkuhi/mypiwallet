import React from 'react'; 

function TransactionSent(props){

    return (<>
    <div className="box">

<p >Transaction Hash : {props.info.data.sendRawTransaction.transactionHash}</p>


    </div>
    </>); 
}

export default TransactionSent;  
