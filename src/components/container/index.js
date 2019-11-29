import React from 'react'; 

function Container(props){

    return (<>

    <article className="message is-light">
                <div className="message-header">
                    <code className=" has-text-danger is-size-5 is-size-6-mobile"> {props.header} </code> 
                    {props.close}
                </div>
                <div className="message-body">

                    <fieldset >
                       
                     {props.children}

                    </fieldset>
                   
                </div>
            </article>
    
    </>); 

}

export default Container;  
