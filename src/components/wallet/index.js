import React, { useEffect, useState } from 'react';
import Unlocked from './Ublocked';

function Wallet() {

    const [keys, setKeys] = useState([]);
    useEffect(() => {

        setKeys(Object.keys(localStorage));

    }, [])

    return (
        <div className="container">
            {

                keys.map((k) => (
                    <Unlocked name={k} key={k} />))

            }
        </div>
    );
}

export default Wallet; 
