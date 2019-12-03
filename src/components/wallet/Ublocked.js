import React, { useState } from 'react';
import Send from './Send';
import Receive from './Receive';
import Balance from './Balance';
import Swal from 'sweetalert2';

function Unlocked(props) {


    const [selected, setSelected] = useState('wallet');

    const handleClickSend = () => {

        setSelected('send');

    }

    const handleClickReceive = () => {

        setSelected('receive');

    }

    const handleClose = () => {
        setSelected('wallet');
    }

    const handleDeleteClick = () => {
        Swal.fire({
            title: "Are you sure ?",
            text: "This action will remove the wallet from your browser.",
            icon: 'warning',
            cancelButtonText: 'Cancerl',
            showConfirmButton: true,
            showCancelButton: true,
            confirmButtonText: "Remove",
            confirmButtonColor: 'red'

        }).then(r => {

            if (r.value) 
            {
                console.log(localStorage.getItem(props.name))
                localStorage.removeItem(props.name);
                
            }
        })
    }


    return (<>
        <br />

        {
            selected === "send" &&
            <Send onClick={handleClose} name={props.name} />
        }

        {
            selected === "wallet" &&

            <div className="card">
                <header className="card-header">
                    <p className="card-header-title">
                        {props.name}
                    </p>
                    <span className="card-header-icon" >
                        <a onClick={handleClickSend}
                            href=" #" className="icon " style={{ marginRight: '20px' }} >
                            <i className="fa fa-send" ></i>
                        </a>

                        <a onClick={handleClickReceive}
                            href=" #" className="icon" style={{ marginRight: '10px' }}>
                            <i className="fa fa-qrcode" ></i>
                        </a>

                    </span>
                </header>


                <div className="card-content">
                    <div className="content">
                        <Balance name={props.name} />

                    </div>
                </div>

                <footer className="card-footer">
                    <button className="is-fullwidth button  is-small ">Reload</button>
                    <button onClick={handleDeleteClick}
                        className="button is-fullwidth is-small">Delete</button>
                </footer>
            </div>

        }

        {
            selected === "receive" &&
            <Receive onClick={handleClose} />
        }
        <br />
    </>)
}

export default Unlocked; 
