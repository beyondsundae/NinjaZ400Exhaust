import React from 'react'
import ReactPlayer from "react-player"
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';


import AudioPlayer, { RHAP_UI } from "react-h5-audio-player";
import 'react-h5-audio-player/lib/styles.css';

import N400y from "../Cover/400y.jpg"
import RAkraCarbon from "../Cover/Real AkraCarbon.jpg"
import RAkraTita from "../Cover/Real AkraTita.jpg"
import FAkraGP from "../Cover/Fake Akra GP.jpg"
import RLeolv10 from "../Cover/Real Leo lv10.jpg"
import RSCCRT from "../Cover/Real SC CRT.jpg"
import FSCShorty from "../Cover/Fake SC Shorty.jpg"
import FSCCRT from "../Cover/Fake SC CRT.jpg"
import FSCCNC from "../Cover/Fake SC CNC.jpg"

const Section2 = () => {

    const Style = ({
        Menu:{
            height: "7vh",
        },
        Content:{
            height: "92vh"
        }
    })

    const Data = [
        {
            Pic:N400y,
            Link: "https://www.mboxdrive.com/400y.mp3",
            Message: ""}, 
        {
            Pic:RAkraCarbon,
            Link: "https://www.mboxdrive.com/Real_AkraCarbon.mp3",
            Message: ""}, 
        {
            Pic:RAkraTita,
            Link: "https://www.mboxdrive.com/Real_AkraTita.mp3",
            Message: ""}, 
        {
            Pic:FAkraGP,
            Link: "https://www.mboxdrive.com/Fake_Akra_GP.mp3",
            Message: ""}, 
        {
            Pic:RLeolv10,
            Link: "https://www.mboxdrive.com/Real_Leo_lv10.mp3",
            Message: ""}, 
        {
            Pic:RSCCRT,
            Link: "https://www.mboxdrive.com/Real_SC_CRT.mp3",
            Message: ""}, 
        {
            Pic:FSCShorty,
            Link: "https://www.mboxdrive.com/Fake_SC_Shorty.mp3",
            Message: ""}, 
        {
            Pic:FSCCRT,
            Link: "https://www.mboxdrive.com/Fake_SC_CRT.mp3",
            Message: ""}, 
        {
            Pic:FSCCNC,
            Link: "https://www.mboxdrive.com/Fake_SC_CNC.mp3",
            Message: ""}
    ];

    return (
        <div className="section2">
           <div className="container-fluid border border-danger" style={Style.Menu}/>

           <div className="container-fluid border border-danger" style={Style.Content}>
               <div className="row" style={{height: "91vh", paddingTop: "2vh"}}>
                   <div className="col-6 col-md-12 col-lg-6 offset-lg-6 border border-danger" >
                       <div  data-aos="fade-up" data-aos-anchor-placement="center-center">

                            <AwesomeSlider infinite={false} transitionDelay="0" >        
                                {Data.map((item, index) =>{
                                    return(
                                        <div className="row d-flex justify-content-center border border-danger">
                                            <div><img src={item.Pic} style={{height:"50vh"}}/></div>

                                            <div className="col-9 border border-danger" style={{position: "relative", bottom: "55px"}}>
                                                <AudioPlayer style={{ height: '50px',width: "auto", backgroundColor: "transparent" }}
                                                    src={item.Link}
                                                    autoPlayAfterSrcChange={false}
                                                    showJumpControls={false}
                                                    layout="horizontal-reverse"
                                                    customProgressBarSection={[RHAP_UI.PROGRESS_BAR]}
                                                    customControlsSection={[RHAP_UI.MAIN_CONTROLS]}
                                                />
                                            </div>

                                            <div className="col-10 border border-danger" style={{bottom:"45px"}}>
                                                {index}
                                            </div>
                                        </div>
                                        )
                                    })}

                            </AwesomeSlider>        
                       </div>
                       
                   </div>
               </div>
           </div>
        </div>
    )
}

export default Section2
