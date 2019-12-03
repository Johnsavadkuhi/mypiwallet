import React, { useState } from 'react';
import Container from '../container';
import Input from '../container/Input';
import Textarea from '../container/Textarea';
import { Account } from '../../pweb3';

function ImportWallet() {

    const [password, setPassword] = useState("");
    const [privateKey, setPrivateKey] = useState('');
    const [helper, setHelper] = useState('Enter 8 chars as password.');
    const [helper1, setHelper1] = useState('Enter a valid privateKey');
    const [helper2, setHelper2] = useState('Enter a name for Wallet');
    const [name, setName] = useState('');



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

    const handleChangeName = (e) => {

        setName(e.target.value);

        if (localStorage.getItem(e.target.value) != null) {
            setHelper2('This name already exist!');
        }
        else if (e.target.value.length === 0) {
            setHelper2('This field can not be empty.');
        } else {
            setHelper2('Ok!');
        }
    }

    const handleImport = async () => {

        const myWallet = {
            address: Account.privateKeyToAccount(privateKey).address,
            privateKey: null
        };

        if (localStorage.getItem(name) === null) {

            const encrypted_privateKey = Account.encrypt(privateKey, password);
            myWallet.privateKey= JSON.stringify(encrypted_privateKey) ; 
            localStorage.setItem(name, JSON.stringify(myWallet) ) ;

        } else {

            alert('The name is already exist.');

        }

    }

    return (

        <Container header="Import Wallet">

            <Input className=" is-small" value={name}
                onChange={handleChangeName}
                helper={helper2}
                icon="registered"
                placeholder="Name" />

            <Input className=" is-small" value={password}
                onChange={handleChangePassword}
                helper={helper}
                icon="lock"
                placeholder="Password"
                id="helper"
            />

            <Textarea value={privateKey} onChange={handleChangePrivateKey} helper={helper1} />

            <div className="has-text-centered download_btn_margin">
                <button onClick={handleImport}
                    className="button is-info is-small is-fullwidth has-text-weight-bold" > Import </button>
            </div>

        </Container>
    )

}

export default ImportWallet; 
