import React from 'react';
import Textarea from '../container/Textarea';

function SignedTransaction(props) {

    return (<>
           
           <Textarea defaultValue ={props.defaultValue}/>
            <div className="has-text-centered download_btn_margin">
                <button onClick={props.onClick}   
                    className="button is-info is-small is-fullwidth has-text-weight-bold" > send </button>
            </div>
    </>)
}

export default SignedTransaction; 