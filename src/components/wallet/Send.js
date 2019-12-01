import React, { useState, useEffect } from 'react';
import Container from '../container';
import Input from '../container/Input';
import Tx from 'pchainjs-tx';
import { GET_TRANSACTION_COUNT, GET_BALANCE, SEND_RAW_TRANSACTION} from '../../request/';
import { Account } from '../../pweb3';
import Swal from 'sweetalert2'
import Loader from 'react-loader-spinner'

function Send(props) {

    const [to, setTo] = useState('');
    const [piValue, setPiValue] = useState('');
    const [balance, setBalance] = useState(0);
    const [helper, setHelper] = useState({ to: 'Enter wallet address you want send Pi to.', value: 'Enter the number of Pi to send.' })
    const [selected, setSelected] = useState('sendForm');

    useEffect(() => {

        const pr = localStorage.getItem('mywallet');
        const { address } = Account.privateKeyToAccount(pr);

        fetch(process.env.REACT_APP_END_POINT, {
            method: 'POST',
            body: JSON.stringify(GET_BALANCE(address)),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => {
            return res.json();
        }).then(resData => {

            const b = (Number.parseFloat(resData.data.getBalance) / Number.parseFloat(1000000000000000000));
            setBalance('' + b);
        }).catch(error => {
            console.log(error);
            throw new Error(error);
        });

    }, []);

    const handleClick = async () => {

        const pr = await localStorage.getItem('mywallet');
        const { address } = Account.privateKeyToAccount(pr);

        Swal.fire({
            title: 'Are you sure to send ?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Send!'
        }).then(async (result) => {

            setSelected('sending');
            console.log("selected 1 : ", selected);

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

                console.log("nonce : ", (resData.data.getTransactionCount));

                const rawTx = {
                    nonce: (resData.data.getTransactionCount),
                    gasPrice: '0x3B9ACA00',// '0x4A817C800'
                    gasLimit: '0xA410',
                    to: to, //'0xEA048c9D9B3D226550bDDb6515a6425153474D8b',
                    value: '0x' + (Number.parseFloat(piValue) * 1000000000000000000).toString(16),//'0x2C68AF0BB140000',//'' + (Number.parseFloat(piValue) * 1000000000000000000)
                    data: '',
                    chainId: 'pchain'
                };

                const tx = new Tx(rawTx);
                tx.sign(privateKey1);
                const serializedTx = tx.serialize();
                console.log(serializedTx.toString('hex'));

                //sendRawTransaction 

                fetch(process.env.REACT_APP_END_POINT ,{
                    method: 'POST',
                    body: JSON.stringify(SEND_RAW_TRANSACTION('0x' + serializedTx.toString('hex'))),
                    headers: {
                        "Content-Type": "application/json"
                    }
                }).then(res1=>{

                    return res1.json(); 

                }).then(resData1=>{

                    resData1.then(r=>{
                        console.log("rrrr r: ", r ); 
                    })
                    console.log("transaction Hash : " , resData1); 


                }).catch(error=>{
                    throw new Error(error); 

                }).finally(async ()=>{

                    console.log("finally .... ");
                    setSelected('sendForm');
                    console.log("selected : ", selected);
    
                })

//End of sendRawTransaction 

            }).catch(error => {
                console.log(error);
                throw new Error(error);

            })
        })

    }

    const handleChangeTo = e => {

        setTo(e.target.value)

    }

    const handleChangeValue = e => {

        setPiValue(e.target.value);
        if (e.target.value.length === 0) {
            setHelper({ to: 'Enter wallet address you want send Pi to.', value: 'This field can not be empty.' });
            document.getElementById('valueTo').classList.add('is-danger');
            document.getElementById('valueHelperTo').classList.add('is-danger');



        } else if (e.target.value === '0' || Number.parseFloat(e.target.value) < 0) {
            setHelper({ to: 'Enter wallet address you want send Pi to.', value: 'Invalid value.' });
            document.getElementById('valueTo').classList.add('is-danger');
            document.getElementById('valueHelperTo').classList.add('is-danger');


        }
        else if (e.target.value > balance) {
            setHelper({ to: 'Enter wallet address you want send Pi to.', value: 'The balance is not enough.' });
            document.getElementById('valueTo').classList.add('is-danger');
            document.getElementById('valueHelperTo').classList.add('is-danger');

        } else {
            setHelper({ to: 'Enter wallet address you want send Pi to.', value: 'Ok!' });
            document.getElementById('valueTo').classList.remove('is-danger');
            document.getElementById('valueHelperTo').classList.remove('is-danger');
            document.getElementById('valueTo').classList.add('is-success');
            document.getElementById('valueHelperTo').classList.add('is-success');

        }

    }

    return (<>

        <Container header="Send Pi" close={<button onClick={props.onClick} className="delete" aria-label="delete"></button>}>

            {
                selected === "sendForm" &&

                <>
                    <Input value={to} onChange={handleChangeTo} id="addressTo" helperId="addressHelperTo"
                        type="text" placeholder="To " className="input is-small" icon="hashtag" helper={helper.to} />
                    <Input value={piValue} onChange={handleChangeValue} id="valueTo" helperId="valueHelperTo"
                        type="number" placeholder="PI Value" className="input is-small" icon="rub" helper={helper.value} />

                    <button onClick={handleClick}
                        className="button is-info is-small is-fullwidth has-text-weight-bold" >
                        Send
                    </button>
                </>

            }

            {
                selected === "sending" &&
                <div className="has-text-centered">
                    <Loader
                        type="Oval"
                        color="#00BFFF"
                        height={100}
                        width={100} />
                </div>
            }


        </Container>



    </>);
}

export default Send; 