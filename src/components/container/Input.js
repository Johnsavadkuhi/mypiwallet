import React from 'react'; 

function Input(props){

    return( <div className="field">
    <div className="control has-icons-left">
        <input value={props.value}
            onChange={props.onChange}
            id={props.id}
            readOnly={props.readOnly}
            className={props.className}
             type="password" placeholder="Password" />
        <span className="icon is-small is-left">
            <i className="fa fa-lock" aria-hidden="true"></i>
        </span>
    </div>
    <p id="helper" className="help">{props.helper}</p>

</div>)
}

export default Input ; 
