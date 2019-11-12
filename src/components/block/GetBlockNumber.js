import React, { useState } from 'react';

function GetBlockNumber() {

    const requestBody = {
        query: `
        query {
            getBlockNumber
        }
        `
    }

    const [blockNumber, setBlockNumber] = useState('');
    const [isExec, setIsExec] = useState(false);


    const handleClick = e => {
        e.preventDefault();
        setIsExec(true);

        fetch("http://localhost:5000/graphql", {
            method: 'POST',
            body: JSON.stringify(requestBody),
            headers: {
                "Content-Type": "application/json"
            }

        }).then(res => {
            return res.json();
        }).then(resData => {
            setBlockNumber(resData);
        }).catch(error => {
            console.log(error);
            throw error;
        })
    }
    const handleClose = () => {
        setIsExec(false);
    }


    return (
        <>
            <hr />
            {isExec ? 
            <div className="notification ">
                <button onClick={handleClose} className="delete"></button>
                <div>
                <div className="card-content">
                    <pre> {JSON.stringify(blockNumber, null, 2)}</pre>
                </div>  
                
            </div>
            </div>
             :
            <div className="card">
                    <header className="card-header">
                        <p className="card-header-title has-text-danger	">
                            getBlockNumber
                         </p>

                        <a href="void" className="card-header-icon" aria-label="more options">
                            <span className="icon">
                                <i className="fas fa-angle-down" aria-hidden="true"></i>
                            </span>
                        </a>
                    </header>
                    <div className="card-content">
                        <div className="content">

                            <button onClick={handleClick}
                                className="button is-rounded is-info is-small is-fullwidth has-text-weight-bold" > Execute </button>
                        </div>
                    </div>


                </div>}
        </>
    )

}

export default GetBlockNumber; 
