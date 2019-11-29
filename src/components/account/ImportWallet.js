import React, { useState } from 'react';
// import { Account } from '../../pweb3';
// import { Toast, Warning } from '../../popup';
import Container from '../container';
import Input from '../container/Input';
import Textarea from '../container/Textarea';

function ImportWallet() {

    const [password, setPassword] = useState("");
    const [privateKey, setPrivateKey] = useState('');
    const [helper, setHelper] = useState('Enter 8 chars as password.');
    const [helper1, setHelper1] = useState('Enter a valid privateKey')

    const handleChangePrivateKey = e => {

        setPrivateKey(e.target.value)

        if (e.target.value.length === 0) {
            setHelper1('privateKey can not be empty.');
            document.getElementById("helper1").classList.add('is-danger');


        } else if (e.target.value.length < 66) {
            setHelper1('the privateKey length is less than 64 chars.');
            document.getElementById("helper1").classList.add('is-danger');


        }
        else {

            document.getElementById("helper1").classList.remove('is-danger');
            document.getElementById("helper1").classList.add('is-success');
            setHelper1('ok !!!');

        }

    }
    const handleChangePassword = e => {

        setPassword(e.target.vlaue);

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

    const handleImport = () => {

        console.log(privateKey);
        
        localStorage.setItem(`prv${localStorage.length}` , privateKey) ; 
        
        console.log(localStorage.length) ; 


    }

    return (

        <Container header="Import Wallet">

               {console.log(password)}
            <Input className="input is-small" value={password}
                onChange={handleChangePassword}
                helper={helper}
            />

            <Textarea value={privateKey} onChange={handleChangePrivateKey} helper={helper1}/>

            <div className="has-text-centered download_btn_margin">
                <button onClick={handleImport} 
                    className="button is-info is-small is-fullwidth has-text-weight-bold" > Import </button>
            </div>

        </Container>
    )

}

export default ImportWallet; 
