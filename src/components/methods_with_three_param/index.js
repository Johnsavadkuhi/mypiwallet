import React, { useState } from 'react';

function Mthreeparam(props) {

    const [data, setData] = useState("");
    const [input, setInput] = useState("");
    const [input1 , setInput1]=useState("");
    const [input2 , setInput2]= useState(false);
    const [isExec , setIsExec ] = useState(false); 

    const handleChange = e => {

        setInput(e.target.value);
    }
    const handleChange1 = e => {

        setInput1(e.target.value);
    }
    const handleChange2 = e => {

        setInput2(e.target.value);
    }
    const handleClick = e => {
        e.preventDefault();
        setIsExec(true);

        fetch("http://localhost:5000/graphql", {
            method: 'POST',
            body: JSON.stringify(props.request(input , input1 , input2)),
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
            {
                isExec ? <div className="notification">
                <button onClick={handleClose} className="delete"></button>
                <div className="card-content">
                        <pre> {JSON.stringify(data, null, 2)}</pre>
                    </div>
              </div> : 
                <div className="card">
                    <header className="card-header">
                        <code className="card-header-title has-text-danger is-size-5 is-size-6-mobile">
                            {props.header}
                        </code>
                    </header>
                    <div className="card-content">
                        <div className="content">
                            <div className="field">
                              
                                <div className="control">
                                    <input value={input} onChange={handleChange}
                                        className="input is-primary is-small" type="text" placeholder={props.placeholder} />
                                        
                                </div>
                            <br/>
                                <div className="control">
                                    <input value={input1} onChange={handleChange1}
                                        className="input is-primary is-small" type="text" placeholder={props.placeholdertwo} />
                                </div>
                                <br/>
                                <div className="control">
                                    <input value={input2} onChange={handleChange2}
                                        className="input is-primary is-small" type="text" placeholder={props.placeholderthree} />
                                </div>
                            
                            </div>
                            <button onClick={handleClick}
                                className="button is-info is-small is-fullwidth has-text-weight-bold" > Execute </button>
                        </div>
                    </div>
                  
    
                </div>
            
            }
        </>
    )

}

export default Mthreeparam; 
