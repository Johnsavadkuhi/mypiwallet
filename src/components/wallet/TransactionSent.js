import React from 'react'; 
import Input from '../container/Input';

function TransactionSent(props){

    return (<>
    <div className="box">

        <Input className="input is-small " value ={props.info.data.sendRawTransaction.transactionHash} />

    </div>
    </>); 
}

export default TransactionSent;  
