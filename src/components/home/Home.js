import React from 'react';
import { AnimateOnChange } from 'react-animation'



function Home() {


    return (<>

        <div className="container-fluid" style={{ margin: "15px" }}>
                       
            <section className="hero is-medium  is-bold " >
                <div className="hero-body">

                    <div className="container">
                        <h1 className="title is-size-1">
                            <AnimateOnChange
                                animationIn="bounceIn"
                                animationOut="bounceOut"
                                durationOut={5000}>

                                MyPiWallet.org
                                
                            </AnimateOnChange>
                       
                        </h1>

                        <h2 className="subtitle"  >
                            Pchain Wallet web base!
                        </h2>

                        <div className="contnet">

                        </div>
                    </div>
                </div>
            </section>
            <br />
        </div>

    </>)
}

export default Home;

