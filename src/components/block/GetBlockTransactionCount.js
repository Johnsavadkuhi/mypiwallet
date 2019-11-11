import React from 'react';

function GetBlockTransactionCount() {


    return (
        <>
        <hr/>
        <div className="card">
            <header className="card-header">
                <p className="card-header-title">
                getBlockTransactionCount
                </p>

                <a href="void" className="card-header-icon" aria-label="more options">
                    <span className="icon">
                        <i className="fas fa-angle-down" aria-hidden="true"></i>
                    </span>
                </a>
            </header>
            <div className="card-content">
                <div className="content">
                    <button  className="button is-info is-small is-fullwidth" > Execute </button>
                </div>
            </div>

           
        </div>
        </>
    )

}

export default GetBlockTransactionCount; 
