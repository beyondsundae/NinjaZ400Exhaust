import React from 'react'
import ReactPlayer from "react-player"
import AwesomeSlider from 'react-awesome-slider';
import '../customCSS/styles.css';


import AudioPlayer, { RHAP_UI } from "react-h5-audio-player";
import 'react-h5-audio-player/lib/styles.css';

import { useInView } from "react-intersection-observer";

import N400y from "../Cover/400y.jpg"
import RAkraCarbon from "../Cover/Real AkraCarbon.jpg"
import RAkraTita from "../Cover/Real AkraTita.jpg"
import FAkraGP from "../Cover/Fake Akra GP.jpg"
import RLeolv10 from "../Cover/Real Leo lv10.jpg"
import RSCCRT from "../Cover/Real SC CRT.jpg"
import FSCShorty from "../Cover/Fake SC Shorty.jpg"
import FSCCRT from "../Cover/Fake SC CRT.jpg"
import FSCCNC from "../Cover/Fake SC CNC.jpg"
import RLEOCORSAWK from '../Cover/Real LeoVince GP CORSA EVO with.jpg'
import RLEOCORSAOK from "../Cover/Real LeoVince GP CORSA EVO wout.jpg"

const Section2 = () => {

    const Style = ({
        Menu:{
            height: "7vh",
        },
        Content:{
            height: "87vh"
        },
        Footer:{
            height: "6vh",
            textAlign: "right"
        }
    })

    const [ref, inView] = useInView({
        threshold: 0.5,
        triggerOnce: true
      });

    const Data = [
        {
            Pic:N400y,
            Link: "https://audio.jukehost.co.uk/9hY73vD2xQIMAfjFWskUrg0bHe6avQzg.mp3",
            Message: "ราคาโดยประมาณ: ฿1,000 - ฿1,200"}, 
        {
            Pic:RAkraCarbon,
            Link: "https://od.lk/s/MjBfMTI4NjcxNDhf/Real_AkraCarbon.mp3",
            Message: "ราคาโดยประมาณ: ฿13,600"}, 
        {
            Pic:RAkraTita,
            Link: "https://audio.jukehost.co.uk/n13patyw2ePcwi7sdasgQu6h1oyDvwAv.mp3",
            Message: "ราคาโดยประมาณ: ฿15,000"}, 
        {
            Pic:FAkraGP,
            Link: "https://audio.jukehost.co.uk/1nHrJEkvxhKV3YZHl7gcOKDTDXM2ePRh.mp3",
            Message: "ราคาโดยประมาณ: ฿2,690"}, 
        {
            Pic:RLeolv10,
            Link: "https://audio.jukehost.co.uk/eZKROWoVTeklDqOzMHNmkJrISBWy3oCI.mp3",
            Message: "ราคาโดยประมาณ: B6,700"}, 
        {
            Pic:RSCCRT,
            Link: "https://audio.jukehost.co.uk/GIpq9TzEJtLuZgmQNmDam0C9sgSbswId.mp3",
            Message: "ราคาโดยประมาณ: ฿18,000"}, 
        {
            Pic:FSCShorty,
            Link: "https://audio.jukehost.co.uk/MJ2H2PHLBNoWrHsEU13PzWrMOT9zLb0q.mp3",
            Message: "ราคาโดยประมาณ: ฿2,900"}, 
        {
            Pic:FSCCRT,
            Link: "https://audio.jukehost.co.uk/3Eojwrh6re2Q0kc6zdOcXn6aTVWLQYXV.mp3",
            Message: "ราคาโดยประมาณ: ฿700-900"}, 
        {
            Pic:FSCCNC,
            Link: "https://audio.jukehost.co.uk/ZBSJOAxthpOCelVl0lmG1mK1mhDm2NEG.mp3",
            Message: "ราคาโดยประมาณ: ฿1,400"},
        {
            Pic:RLEOCORSAWK,
            Link: "https://audio.jukehost.co.uk/e8TbvieNMigMOEO1qQ1nAjO5IffysDDr.mp3",
            Message: "ราคาโดยประมาณ: ฿8,200"},
        {
            Pic:RLEOCORSAOK,
            Link: "https://audio.jukehost.co.uk/3TRBd0grs5Da1oaNd4TsyRBE3wQrqAFQ.mp3",
            Message: "ราคาโดยประมาณ: ฿8,200"}
    ];
    //I try to using audio deposit website but Audio URL always change. So I thing using own database or add audio to folder. ;__;
    //Local mp3 not working

    //Free Storage that working
    //https://jukehost.co.uk/
    //https://www.opendrive.com/

    return (
        <div className="section2">
           <div className="container-fluid " style={Style.Menu}/>

           <div className="container-fluid" style={Style.Content}>
               <div className="row" style={{height: "auto", paddingTop: "2vh"}}>
                   <div className="col-12 col-xs-12 col-sm-12 col-md-12 col-lg-6 offset-lg-6" ref={ref}>
                       <div className={inView ? "animate__animated animate__slideInRight" : "d-none"} >
                                <AwesomeSlider infinite={false} transitionDelay="0" className=""  style={{height:"70vh"}}>        
                                    {Data.map((item, index) =>{
                                        return(
                                            <div className="row d-flex justify-content-center " >
                                                <div><img src={item.Pic} style={{height:"50vh", borderRadius: "0%"}}/></div>

                                                <div className="col-7" style={{position: "relative", bottom: "55px", paddingLeft:"50px", paddingRight:"50px"}}>
                                                    <AudioPlayer style={{ height: '50px',width: "auto", backgroundColor: "transparent"}}
                                                        src={item.Link}
                                                        preload="auto"
                                                        autoPlayAfterSrcChange={false}
                                                        showJumpControls={false}
                                                        layout="horizontal-reverse"
                                                        customProgressBarSection={[RHAP_UI.PROGRESS_BAR]}
                                                        customControlsSection={[RHAP_UI.MAIN_CONTROLS]}
                                                    />
                                                </div>

                                                <div className="MufflerPrice col-9" style={{bottom:"45px", fontSize:"2.3rem", fontWeight: "bold"}}>
                                                    {item.Message}<br/>
                                                    
                                                </div>
                                                
                                            </div>
                                            )
                                        })}
                                </AwesomeSlider>        
                                    <p style={{display: "inline", bottom: "20px", position: 'relative'}}>(โดยราคาท่อแท้ส่วนใหญ่อ้างอิงจากเว็บต่างประเทศ)</p>
                       </div>
                       
                   </div>
               </div>
           </div>

           <div className="container-fluid pt-1" style={Style.Footer}>
          
                <strong className="px-4">
                    By beyondsundae 
                </strong> 
                <a target="_blank" href="https://github.com/beyondsundae" >
                    <img 
                        src="https://avatars2.githubusercontent.com/u/59742129?s=60&v=4" 
                        className="pr-3"
                        alt="Beyondsundae"
                        style={{ borderRadius:"50%", border: "0", height: "30px" }}/>
                </a>
           </div>
        </div>
    )
}

export default Section2
