import React, { useState } from 'react';
import Container from '../container';
import Input from '../container/Input';
import Tx from 'pchainjs-tx';
import { GET_TRANSACTION_COUNT } from '../../request/';
import { Account } from '../../pweb3';

function Send(props) {

    // const [rawTx , setRawTx] = useState({nonce : '' , gasPrice:'0x4A817C800' , gasLimit: '0x5208', to:'' , value :'' , data:'', chainId:'pchain'});

    const [to, setTo] = useState('');
    const [piValue, setPiValue] = useState('');
    // const [address , setAddress] = useState(''); 

    const handleClick = async () => {

        const pr = await localStorage.getItem('mywallet');
        const { address } = Account.privateKeyToAccount(pr);

        fetch(process.env.REACT_APP_END_POINT, {
            method: 'POST',
            body: JSON.stringify(GET_TRANSACTION_COUNT(address)),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => {
            return res.json();
        }).then(resData => {
            const p = pr.slice(2).toString(); 
            const privateKey1 = Buffer.from(p, 'hex');
            
            const rawTx = { 
                nonce: resData.data.getTransactionCount + 1,
                 gasPrice: '0x4A817C800',
                 gasLimit: '0x5208',
                 to: to, 
                 value: piValue, 
                 data: '', 
                 chainId: 'pchain'
                 };

            const tx = new Tx(rawTx);
            tx.sign(privateKey1);
            const serializedTx = tx.serialize();
            console.log(serializedTx.toString('hex'));

        }).catch(error => {
            console.log(error);
            throw new Error(error);
        });

    }

    const handleChangeTo = e => {

        setTo(e.target.value)

    }

    const handleChangeValue = e => {

        setPiValue(e.target.value);

    }

    return (<>

        <Container header="Send Pi" close={<button onClick={props.onClick} className="delete" aria-label="delete"></button>}>

            <Input value={to} onChange={handleChangeTo}
                type="text" placeholder="To " className="input is-small" icon="hashtag" />
            <Input value={piValue} onChange={handleChangeValue}
                type="text" placeholder="PI Value" className="input is-small" icon="rub" />

            <button onClick={handleClick}
                className="button is-info is-small is-fullwidth has-text-weight-bold" >
                Send
            </button>

        </Container>

    </>);
}

export default Send; 