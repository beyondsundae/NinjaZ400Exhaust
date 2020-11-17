import React from 'react'

import scroll from '../Pic/mousedown1.gif'
import bg1 from '../Pic/bg1.png'

import Exhaust from '../Pic/exhaust.png'
import Z400 from '../Pic/z400-logo.png'
import N400 from '../Pic/n400-logo.png'

const Section1 = () => {

    const Style = ({
        Menu:{
            height: "7vh",
        },
        Content:{
            height: "92vh"
        }
    })

    return (
        <div className="section1">
            <div className="container-fluid pt-2 text-left" style={ Style.Menu }>
                <img src={N400} style={{height: "90%"}}/>
                <img src={Z400} style={{height: "80%"}}/>
            </div>

            <div className="container-fluid border border-danger " style={ Style.Content }>
                <div className="row " style={{paddingTop: "30vh"}}>
                    <div className="col-6 col-md-8 col-lg-6 border border-success " >
                    <img className="animate__animated animate__zoomInDown" src={Exhaust} style={{height: "50%"}}/><br/>
                        
                        <div className="ExhaustName" >
                            Exhaust Sound
                        </div>

                    </div>

                    <div className="col-12 text-center" style={{marginTop: "1vh"}}>

                        <img src={scroll} style={{height: "10vh"}}/>
                    </div>
                    
                </div>
            </div>
                
        </div>
    )
}

export default Section1
