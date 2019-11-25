import React from 'react';

function Textarea(props) {
    return (<div className="field">
        <div className="field-body">
            <div className="field">
                <div className="control is-expanded">
                    <textarea placeholder="PrivateKey"
                        onChange={props.onChange}
                        className="textarea  is-small has-text-grey-light"
                        value={props.value} />
                </div>
            </div>
        </div>
        <p id="helper1" className="help">{props.helper}</p>
    </div>)
}
export default Textarea