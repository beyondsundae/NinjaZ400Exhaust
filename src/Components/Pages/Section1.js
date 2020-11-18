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
                <img src={N400} className="NinjaLogo"/>
                <img src={Z400} className="ZLogo"/>
            </div>

            <div className="container-fluid border border-danger " style={ Style.Content }>
                <div className="row FarFromTopMuffler">
                    <div className="col-12 col-md-8 col-lg-5 border border-success " >
                    <img src={Exhaust} className="Exhaust animate__animated animate__zoomInDown" 
                        /><br/>
                        
                        <div className="ExhaustName" >
                        MufflerSD, a website that collects sounds and prices for Ninja400 and Z400's muffler.
                        </div>
                        <br/>
                        <div className="ExhaustName" >
                        MufflerSD, เป็นเว็บที่รวบรวมเสียงและราคาท่อไอเสียสำหรับ Ninja400 และ Z400.
                        </div>
                        

                    </div>

                    <div className="Scroll col-12 text-center" style={{marginTop: "1vh"}}>

                        <img src={scroll} style={{height: "10vh"}}/>
                    </div>
                    
                </div>
            </div>
                
        </div>
    )
}

export default Section1
