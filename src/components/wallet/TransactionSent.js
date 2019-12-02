import React from 'react'; 
import Input from '../container/Input';
import Textarea from '../container/Textarea';

function TransactionSent(props){

    return (<>
    <div className="box">

        <Input className="input is-small " value ={props.info.data.sendRawTransaction.blockNumber} />
        <Textarea value ={props.info.data.sendRawTransaction.transactionHash} />

    </div>
    </>); 
}

export default TransactionSent;  
