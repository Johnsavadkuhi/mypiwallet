import React, { useState } from 'react';
import { Account } from '../../pweb3';

function CreateAccount(props) {

    const [isExec, setIsExec] = useState(false);
    const [state, setState] = useState({ address: '', privateKey: '' });
    const [password, setPassword] = useState("");
    const [helper, setHelper] = useState('Enter 8 chars as password.');

    const handleChange = e => {

        setPassword(e.target.value);
        if (e.target.value.length === 0) {
            setHelper('password can not be empty.');
            document.getElementById("helper").classList.add('is-danger');


        } else if (e.target.value.length < 8) {
            setHelper('the password length is less than 8 chars.');
            document.getElementById("helper").classList.add('is-danger');


        } else {

            document.getElementById("helper").classList.remove('is-danger');
            document.getElementById("helper").classList.add('is-success');
            setHelper('ok !!!');

        }

    }
    const handleClick = e => {
        e.preventDefault();

        setIsExec(true);
        let { address, privateKey } = Account.create();
        setState({ address: address, privateKey: privateKey });

    }

    const handleCopyAddress = () => {

        const copyText = document.getElementById("account_address");

        /* Select the text field */
        console.log(copyText)
        copyText.select();
        copyText.setSelectionRange(0, 99999); /*For mobile devices*/
        /* Copy the text inside the text field */

        document.execCommand('copy');


    }
    const handleCopyPrivateKey = () => {

        const copyText = document.getElementById("privatekey");
        /* Select the text field */
        copyText.select();
        copyText.setSelectionRange(0, 99999); /*For mobile devices*/
        /* Copy the text inside the text field */
        document.execCommand("copy");
    }

    const handleDownloadClick = () => {

        const element = document.createElement('a');
        const encryptedPrivatedKey = Account.encrypt(state.privateKey , password); 
        element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(encryptedPrivatedKey.toString()));
        element.setAttribute('download', state.address);

        element.style.display = 'none';
        document.body.appendChild(element);

        element.click();

        document.body.removeChild(element);

    }
    const handleClose = () => {
        setIsExec(false);
        setState({ address: '', privateKey: '' })
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
                                <span class="label tag is-danger">Address</span>
                                <div className="field has-addons">

                                    <p className="control is-expanded">
                                        <input id="account_address" readOnly={true} className="input is-small" type="text" value={state.address} />
                                    </p>
                                    <div className="control">
                                        <button onClick={handleCopyAddress} className="button is-small ">copy</button>
                                    </div>

                                </div>
                                <span class="label tag is-danger">Private Key</span>
                                <div className="field is-horizontal">

                                    <div className="field-body">
                                        <div className="field has-addons">
                                            <div className="control is-expanded">
                                                <textarea id="privatekey" readOnly={true} className="textarea is-small " value={state.privateKey} />
                                            </div>
                                            <div className="control">
                                                <button onClick={handleCopyPrivateKey} className="button is-small height_copy_button">copy</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </fieldset>
                            <div className="has-text-centered download_btn_margin">
                                <button className="button is-fullwidth " onClick={handleDownloadClick}>
                                    <span>Keystore</span>
                                    <span class="icon is-small">
                                        <i class="fa fa-download"></i>
                                    </span>
                                </button>
                            </div>
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

                            <div className="field">
                                <p className="control has-icons-left">
                                    <input value={password}
                                        onChange={handleChange}
                                        className="input is-small" type="password" placeholder="Password" />
                                    <span className="icon is-small is-left">
                                        <i class="fa fa-lock" aria-hidden="true"></i>                                        </span>
                                </p>
                            </div>
                            <p id="helper" className="help">{helper}</p>

                            <button onClick={handleClick}
                                disabled={!(password.length >= 8)}
                                className="button is-info is-small is-fullwidth has-text-weight-bold" > Create </button>
                        </div>
                    </div>


                </div>}
        </>
    )

}

export default CreateAccount; 
