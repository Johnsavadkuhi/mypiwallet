import React, { useState } from 'react';
import { Account } from '../../pweb3';
import { Toast, Warning } from '../../popup';

function ImportWallet(props) {

    const [isExec, setIsExec] = useState(false);
    const [state, setState] = useState({ password: '', privateKey: '' });
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

    const handleCopyPrivateKey = () => {

        const copyText = document.getElementById("privatekey");
        /* Select the text field */
        copyText.select();
        copyText.setSelectionRange(0, 99999); /*For mobile devices*/
        /* Copy the text inside the text field */
        document.execCommand("copy");
        Toast.fire({
            icon: 'success',
            title: 'copied'
        })
    }

    const handleDownloadClick = () => {
        Warning.fire({}).then(result => {
            if (result.value) {
                const element = document.createElement('a');
                const encryptedPrivatedKey = Account.encrypt(state.privateKey, password);
                element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(encryptedPrivatedKey));
                element.setAttribute('download', state.address);

                element.style.display = 'none';
                document.body.appendChild(element);

                element.click();

                document.body.removeChild(element);

                Toast.fire({
                    icon: 'success',
                    title: 'Downloaded'
                })
            }

        });

    }
    const handleClose = () => {
        setIsExec(false);
        setState({ address: '', privateKey: '' })
    }

    return (
        <>
            
            
                    <article className="message is-light">
                        <div className="message-header">
                            <code className="is-size-5 is-size-6-mobile has-text-grey-dark"> Import Wallet </code>
                            <button className="delete" aria-label="delete" onClick={handleClose}></button>
                        </div>
                        <div className="message-body">

                            <fieldset >
                                <span className=" is-family-code has-text-grey-dark"> Password </span>
                                <div className="field has-addons">

                                    <p className="control is-expanded">
                                        <input id="account_address" readOnly={true} className="input has-background-light is-small has-text-grey-light" type="text" value={state.password} />
                                    </p>

                                </div>
                                <span className=" is-family-code has-text-grey-dark">Privatekey</span>
                                <div className="field is-horizontal">
                                    <div className="field-body">
                                        <div className="field has-addons">
                                            <div className="control is-expanded">
                                                <textarea id="privatekey" readOnly={true} className="textarea has-background-light is-small has-text-grey-light  " value={state.privateKey} />
                                            </div>
                                           
                                        </div>
                                    </div>
                                </div>
                            </fieldset>

                            <div className="has-text-centered download_btn_margin">
                                <div className="field">
                                    <div className="file is-light has-name is-boxed is-fullwidth" onClick={handleDownloadClick}>
                                        <label className="file-label">
                                            <input className="file-input " type="text" readOnly={true} name="resume" />
                                            <span className="file-cta">
                                                <span className="file-icon has-text-grey-dark ">
                                                    <i className="fa fa-cloud-download"></i>
                                                </span>
                                                <span className="file-label has-text-grey-dark is-family-code">
                                                    Import
                                            </span>
                                            </span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </article>
        </>
    )

}

export default ImportWallet; 
