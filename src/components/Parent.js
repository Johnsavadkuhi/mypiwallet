import React, { useState } from 'react';
import useDataFetching from '../hooks/useDataFetching'; 

function Parent(props) {

    const [data , setData ] = useState(""); 
    const [error , setError] = useState(""); 
    const [loading , setLoading]= useState(true); 

    const [input, setInput] = useState("");

    const [isExec , setIsExec ] = useState(false); 

    
    const handleChange = e => {
        setInput(e.target.value);
    }

    const handleClick = e => {
        e.preventDefault();

        setIsExec(true); 

        fetch("http://localhost:5000/graphql", {
            method: 'POST',
            body: JSON.stringify(props.request),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => {
            return res.json();
        }).then(resData => {
            setData(resData);
        }).catch(error => {
            console.log(error);
            throw error;
        })


       
    }

    const handleClose = ()=>{
        setIsExec(false); 
    }

    return (
        <>
            <hr />
            {
                isExec ? <div className="notification is-link">
                <button onClick={handleClose} className="delete"></button>
                <div className="card-footer">
                        <pre> {JSON.stringify(data, null, 2)}</pre>
                    </div>
              </div> : 
                <div className="card">
                    <header className="card-header">
                        <p className="card-header-title has-text-danger">
                            {props.header}
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
                                className="button is-rounded is-info is-small is-fullwidth has-text-weight-bold" > Execute </button>
                        </div>
                    </div>
                  
    
                </div>
            
            }
        </>
    )

}

export default Parent; 
