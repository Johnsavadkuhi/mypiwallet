import React, { useState } from 'react';

function Mnoparam(props) {

    const [data, setData] = useState('');
    const [isExec, setIsExec] = useState(false);

    const handleClick = e => {
        e.preventDefault();
        setIsExec(true);

        fetch(`http://${process.env.REACT_APP_END_POINT}:5000/graphql`, {
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
                            <pre> {JSON.stringify(data, null, 2)}</pre>
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

export default Mnoparam; 
