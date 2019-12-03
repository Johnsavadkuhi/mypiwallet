import React from 'react';
import Input from '../container/Input';

function PasswordForm(props) {

    return (<>
            <Input className="is-small" value={props.password}
                onChange={props.handleChangePassword}
                helper={props.helper}
                icon="lock"
                placeholder="Password"
                id="helper"
            />
            <div className="has-text-centered download_btn_margin">
                <button onClick={props.onClick}
                    className="button is-info is-small is-fullwidth has-text-weight-bold" > Send </button>
            </div>
    </>)
}

export default PasswordForm; 