import React from 'react';
import Container from '../container';

function Unlocked(props) {

    const handleClickSend = ()=>{
        
        

    }
    return (<>

        <div className="card">
            <header className="card-header">
                <p className="card-header-title">
                    {props.name}
                    </p>
                <span className="card-header-icon" >
                <a onClick={handleClickSend}
                 href="#" className="icon " style={{marginRight:'20px'}} >
                        <i className="fa fa-send" ></i>
                    </a>

                    <a href="#" className="icon" style={{marginRight:'10px'}}>
                        <i className="fa fa-qrcode" ></i>
                    </a>
                    
                </span>
            </header>
            
            
            <div className="card-content">
                <div className="content">
                    
                </div>
            </div>

            
           
            <footer className="card-footer">
                <button  className="is-fullwidth button  is-small ">Reload</button>
                <button className="button is-fullwidth is-small">Delete</button>
            </footer>
        </div>

    </>)
}

export default Unlocked; 
