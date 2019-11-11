import React, { useState } from 'react';

function GetBlock() {

    const [block, setBlock] = useState("");
    const [input, setInput] = useState("");
    const requestBody = {
        query: `
        query {
            getBlock(numberBlock:"${input}"){
    number
    hash
    parentHash
    nonce
    sha3Uncles
    logsBloom
    transactionsRoot
    stateRoot
    receiptsRoot
    miner
    difficulty
    totalDifficulty
    extraData
    size
    gasLimit
    gasUsed
    timestamp
                
            }
        }           
        `
    };

    const handleChange = e => {

        setInput(e.target.value);
    }

    const handleClick = e => {
        e.preventDefault();

        fetch("http://localhost:5001/graphql", {
            method: 'POST',
            body: JSON.stringify(requestBody),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => {
            return res.json();
        }).then(resData => {
            setBlock(resData);
        }).catch(error => {
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
                        getBlock
                </p>

                    <a href="void" className="card-header-icon" aria-label="more options">
                        <span className="icon">
                            <i className="fas fa-angle-down" aria-hidden="true"></i>
                        </span>
                    </a>
                </header>
                <div className="card-content">
                    <div className="content">
                        <div className="field">
                            <div className="control">
                                <input value={input} onChange={handleChange}
                                    className="input is-primary is-small" type="text" placeholder="Block Number" />
                            </div>
                        </div>
                        <button onClick={handleClick}
                            className="button is-info is-small is-fullwidth" > Execute </button>
                    </div>
                </div>
                <div className="card-footer">
                    <pre> {JSON.stringify(block, null, 2)}</pre>
                </div>

            </div>
        </>
    )

}

export default GetBlock; 
