import React, { useState } from 'react';

function GetChainId() {

    const requestBody = {
        query : `
        query {
            getChainId
        }    `
    } 

    const [blockNumber, setBlockNumber] = useState('');
   
    const handleClick = e =>{
        e.preventDefault() ;
        fetch("http://localhost:5001/graphql" , {
            method:'POST',
            body:JSON.stringify(requestBody),
            headers : {
                "Content-Type" : "application/json" 
            }

        }).then(res=>{
            return res.json();
        }).then(resData=>{
            setBlockNumber(resData);
        }).catch(error=>{
            console.log(error);
            throw error; 
        })
    }
    return (
        <>
            <hr />
            <div className="card">
                <header className="card-header">
                    <p className="card-header-title">
                    getChainId
                                    </p>

                    <a href="void" className="card-header-icon" aria-label="more options">
                        <span className="icon">
                            <i className="fas fa-angle-down" aria-hidden="true"></i>
                        </span>
                    </a>
                </header>
                <div className="card-content">
                    <div className="content">

                        <button onClick ={handleClick}
                        className="button is-info is-small is-fullwidth" > Execute </button>
                    </div>
                </div>
                <div className="card-footer">
                    <pre>{JSON.stringify(blockNumber , null , 2 )}</pre>
                </div>

            </div>
        </>
    )

}

export default GetChainId; 
