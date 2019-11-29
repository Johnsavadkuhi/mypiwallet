import React from 'react'; 

function Input(props){

    return( <div className="field">
    <div className="control has-icons-left">
    
        <input value={props.value}
            onChange={props.onChange}
            id={props.id}
            readOnly={props.readOnly}
            className={props.className}
            type={props.type} placeholder={props.placeholder} />
       
        <span className="icon is-small is-left">
            <i className={`fa fa-${props.icon}`} aria-hidden="true"></i>
        </span>

    </div>

    <p id="helper" className="help">{props.helper}</p>

</div>)
}

export default Input ; 
