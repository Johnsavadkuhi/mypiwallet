import React, { useState } from 'react';
import { Account } from '../../pweb3';

function CreateAccount(props) {

    const [isExec, setIsExec] = useState(false);
    const [state, setState] = useState({ address: '', privateKey: '' });

    const handleClick = e => {
        e.preventDefault();

        setIsExec(true);
        let { address, privateKey } = Account.create();
        setState({ address: address, privateKey: privateKey });

    }

    const handleCopyAddress = ()=>{

        const  copyText = document.getElementById("account_address");
        
        /* Select the text field */
        console.log(copyText)
        copyText.select();
        copyText.setSelectionRange(0, 99999); /*For mobile devices*/
        /* Copy the text inside the text field */

        document.execCommand('copy');

        
    }
    const handleCopyPrivateKey =()=>{

        const  copyText = document.getElementById("privatekey");
        /* Select the text field */
        copyText.select();
        copyText.setSelectionRange(0, 99999); /*For mobile devices*/
        /* Copy the text inside the text field */
        document.execCommand("copy");
    }

    const handleClose = () => {
        setIsExec(false);
        setState({address:'' , privateKey:''})
    }

    return (
        <>
            {isExec ?
                <>
                    <article className="message  is-info">
                        <div className="message-header">
                            <p className="is-size-5 is-size-6-mobile">Account Info </p>
                            <button className="delete" aria-label="delete" onClick={handleClose}></button>
                        </div>
                        <div className="message-body">

                            <fieldset >
                                <label >Address</label>

                                <div className="field has-addons">

                                    <p className="control is-expanded">
                                        <input id="account_address" readOnly={true} className="input is-small" type="text" value={state.address} />
                                    </p>
                                    <div className="control">
                                        <button  onClick={handleCopyAddress} className="button is-small">copy</button>
                                    </div>

                                </div>
                                <label  >PrivateKey</label>
                                <div className="field is-horizontal">
                                
                                    <div className="field-body">
                                        <div className="field has-addons">
                                            <div className="control is-expanded">
                                                <textarea id="privatekey" readOnly={true} className="textarea is-small" value={state.privateKey} />
                                            </div>
                                            <div className="control">
                                                <button  onClick={handleCopyPrivateKey} className="button is-small height_button">copy</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </fieldset>
                        </div>
                    </article>

                </>

                :
                <div className="card">
                    <header className="card-header">
                        <code className="card-header-title has-text-danger is-size-5 is-size-6-mobile">
                            {props.header}
                        </code>
                    </header>
                    <div className="card-content">
                        <div className="content">

                            <button onClick={handleClick}
                                className="button is-info is-small is-fullwidth has-text-weight-bold" > Execute </button>
                        </div>
                    </div>


                </div>}
        </>
    )

}

export default CreateAccount; 
