import React, { useState } from 'react';
import { Tx  } from '../../pweb3/';

function SendTransaction(props) {

    const [to, setTo] = useState("");
    const [piValue, setPiValue] = useState(0);
    const [isExec, setIsExec] = useState(false);

    const handleChange1 = e => {

        setTo(e.target.value);
    }
    const handleChange2 = e => {

        setPiValue(e.target.value);
    }
    const handleSend = async (e) => {
        e.preventDefault();
        setIsExec(true);
             
                const privateKey1 =   new Buffer('57d54ca2d72ced0021bae39919305bee77d47862ae3d878177fddbdaf99354f6' , 'hex');
                
                const rawTx = {
                    nonce: '0x7',
                    gasPrice: '0x4A817C800',
                    gasLimit: '0x5208',
                    to: '0xEA048c9D9B3D226550bDDb6515a6425153474D8b',
                    value: '0x218711A00',
                    data: '',
                    chainId: "pchain"
                } 

                // var rawTx = {
                //     nonce: '0x00',
                //     gasPrice: '0x09184e72a000', 
                //     gasLimit: '0x2710',
                //     to: '0x0000000000000000000000000000000000000000', 
                //     value: '0x00', 
                //     data: '0x7f7465737432000000000000000000000000000000000000000000000000000000600057'
                //    }
                const tx = new Tx(rawTx);
                tx.sign(privateKey1);
                const serializedTx = tx.serialize();
                console.log(serializedTx.toString('hex'));

                // web3.pi.sendRawTransaction('0x' + serializedTx.toString('hex'), function (err, hash) {
                //     console.error('error : ', err);
                //     if (!err)
                //         console.log(hash);
                // });
            }



        //   web3.pi.signTransaction({
        //     from : "0x71509F188a846032029E93E2bBe2B9FC61329F25" ,
        //     to:"0xEA048c9D9B3D226550bDDb6515a6425153474D8b", 
        //     gasPrice: "20000000000",
        //     gas: "21000",
        //     value: "1000000000000000000",
        //     data:""

        // } ).then(console.log) ; 

    
    const handleClose = () => {
        setIsExec(false);
    }

    return (
        <>
            {
                isExec ?
                    <div className="notification">
                        <button onClick={handleClose} className="delete"></button>
                        <div className="card-content">
                            {/* <pre> {JSON.stringify(data, null, 2)}</pre> */}
                        </div>
                    </div>
                    :
                    <div className="card">
                        <header className="card-header">
                            <code className="card-header-title has-text-danger is-size-5 is-size-6-mobile">
                                Send Pi
                        </code>
                        </header>
                        <div className="card-content">
                            <div className="content">
                                <div className="field">

                                    <div className="control">
                                        <input value={to} onChange={handleChange1}
                                            className="input is-primary is-small" type="text" placeholder="To Address" />
                                    </div>
                                    <br />
                                    <div className="control">
                                        <input value={piValue} onChange={handleChange2}
                                            className="input is-primary is-small" type="text" placeholder="Pi value" />
                                    </div>

                                </div>
                                <button onClick={handleSend}
                                    className="button is-info is-small is-fullwidth has-text-weight-bold" > Send </button>
                            </div>
                        </div>


                    </div>

            }
        </>
    )

}

export default SendTransaction; 
