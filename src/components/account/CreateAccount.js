import React, { useState } from 'react';
import {Account } from '../../pweb3'; 

function CreateAccount (props) {

    const [isExec, setIsExec] = useState(false);
    const [state , setState] = useState({address:'' , privateKey:''}); 

    const handleClick =async  e => {
        e.preventDefault();
        
        setIsExec(true); 
        let {address , privateKey  } = Account.create() ; 
        setState({address:address , privateKey:privateKey}) ; 
        console.log(Account); 

    }
    const handleClose = () => {
        setIsExec(false);
    }

    return (
        <>
            {isExec ?
                <div className="notification ">
                    <button onClick={handleClose} className="delete"></button>

                    <div>
                        <div className="card-content">
                            <pre> {JSON.stringify(state, null, 2)}</pre>
                        </div>

                    </div>
                </div>
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
