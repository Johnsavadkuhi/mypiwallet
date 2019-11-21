import React, { useState } from 'react';
 import {_Personal , Account} from '../../pweb3/'; 
import Swal from 'sweetalert2'; 
function SendTransaction(props) {

    const [data, setData] = useState("");
    const [from , setFrom] = useState("");
    const [to, setTo] = useState("");
    const [piValue, setPiValue] = useState(0);
    const [isExec, setIsExec] = useState(false);
    const [privateKey , setPrivateKey] = useState(); 

    const handleChange = e => {

        setFrom(e.target.value);
    }
    const handleChange1 = e => {

        setTo(e.target.value);
    }
    const handleChange2 = e => {

        setPiValue(e.target.value);
    }
    const handleSend = async (e) => {
        e.preventDefault();
        setIsExec(true);
        
        const { value: password } = await Swal.fire({
            title: 'Enter your privatekey',
            input: 'password',
            inputPlaceholder: 'privateKey',
            inputAttributes: {
              maxlength: 64,
              autocapitalize: 'off',
              autocorrect: 'off'
            }
          })
          
          if (password) {
              setPrivateKey(password); 
            Swal.fire(`Entered privateKey: ${password}`)
          }
          
       const signedTransaction =  Account.signTransaction({
            from : "0x71509F188a846032029E93E2bBe2B9FC61329F25" ,
            to:"0xEA048c9D9B3D226550bDDb6515a6425153474D8b", 
            gasPrice: "20000000000",
            gas: "21000",
            value: "1000000000000000000",
            data:""
 
        } ,"0x57d54ca2d72ced0021bae39919305bee77d47862ae3d878177fddbdaf99354f6").then(r=>{
            console.log("result  : " , r); 

        }); 
        

    }
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
                            <pre> {JSON.stringify(data, null, 2)}</pre>
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
                                        <input value={from} onChange={handleChange}
                                            className="input is-primary is-small" type="text" placeholder="From Address" />

                                    </div>
                                    <br />
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
