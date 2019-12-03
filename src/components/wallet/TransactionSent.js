import React from 'react'; 
import Input from '../container/Input';
import Textarea from '../container/Textarea';

function TransactionSent(props){

    return (<>
    <div className="box">

        <Input className="input is-small" defaultValue ="8599123" icon="calculator" readOnly={true}/>
        <Textarea defaultValue ="0x055f6aeb9ad1a6ba8efc21e6f7fa45d04182680488d69ec28f6f8795e14ee9ec"  readOnly={true} 
        className="has-text-grey"/>

    </div>
    </>); 
}

export default TransactionSent;  
