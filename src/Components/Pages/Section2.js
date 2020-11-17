import React from 'react'
import ReactPlayer from "react-player"
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';


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

const Section2 = () => {

    const Style = ({
        Menu:{
            height: "7vh",
        },
        Content:{
            height: "92vh"
        }
    })

    const [ref, inView] = useInView({
        threshold: 0.5,
        triggerOnce: true
      });

    const Data = [
        {
            Pic:N400y,
            Link: "https://cf-media.sndcdn.com/YE266kPqoCZw.128.mp3?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiKjovL2NmLW1lZGlhLnNuZGNkbi5jb20vWUUyNjZrUHFvQ1p3LjEyOC5tcDMiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE2MDU1OTA2NjN9fX1dfQ__&Signature=TSenLBKNw7ASm3XnhhNtdpxCF~dtVReqByTmYSJ95Y4zKP3P-XiDr-lWtO99eAxejzmmQ~qiwHF2a05PqDVz4X3hH00ROUlgN90S8-vcpNzB2fsdyCRZkgMoiFkZFPdkaTNK6sgV4YL0Uh5hrsZSDZ~PASJ-RrJ6ff00ABVfQ1ClxxN5q7r7f-Q4R8Hnao7q-tcZPYklP9GMOaD6hf76LnmeQ16nPyhBMtnv5DuajYqHGy02yH~PU38yYbJeDvwZzBtWrObh11vNmfv-rD3JAQvminExSLanf7TsVk-912Y~T0pFwr~nwDLX3tsXdnzpWe2Z6RY27SgDrnBvEHJI6w__&Key-Pair-Id=APKAI6TU7MMXM5DG6EPQ",
            Message: "ราคาโดยประมาณ: ฿1,200"}, 
        {
            Pic:RAkraCarbon,
            Link: "https://download1980.mediafire.com/6z8a1ni0newg/y7jnnjp6r5t5uo1/Real_AkraCarbon.mp3",
            Message: "ราคาโดยประมาณ: ฿13,600"}, 
        {
            Pic:RAkraTita,
            Link: "https://download1323.mediafire.com/a156wycpjkzg/lrkexo6qotrelhp/Real_AkraTita.mp3",
            Message: "ราคาโดยประมาณ: ฿15,000"}, 
        {
            Pic:FAkraGP,
            Link: "https://download1334.mediafire.com/p1hznqameuag/a5xdu65q91pkicp/Fake_Akra_GP.mp3",
            Message: "ราคาโดยประมาณ: ฿2,690"}, 
        {
            Pic:RLeolv10,
            Link: "https://download1327.mediafire.com/h4zopqoa5s2g/7lb3xtgcogx84ru/Real_Leo_lv10.mp3",
            Message: "ราคาโดยประมาณ: B6,700"}, 
        {
            Pic:RSCCRT,
            Link: "https://download853.mediafire.com/9gojuy93xsdg/hgdz63mudwbw938/Real_SC_CRT.mp3",
            Message: "ราคาโดยประมาณ: ฿18,000"}, 
        {
            Pic:FSCShorty,
            Link: "https://download948.mediafire.com/ox1evr5guoeg/dbw0x6daq8qj153/Fake_SC_Shorty.mp3",
            Message: "ราคาโดยประมาณ: ฿2,900"}, 
        {
            Pic:FSCCRT,
            Link: "https://download1491.mediafire.com/c7jsrbbporxg/it3i9rtv0m80dsk/Fake_SC_CRT.mp3",
            Message: "ราคาโดยประมาณ: ฿700-900"}, 
        {
            Pic:FSCCNC,
            Link: "https://download857.mediafire.com/9j8hr6wmexag/mtoiwwzbqrake3n/Fake_SC_CNC.mp3",
            Message: "ราคาโดยประมาณ: ฿1,400"}
    ];
    //I try to using audio deposit website but Audio URL always change. So I thing using own database or add audio to folder. ;__;

    return (
        <div className="section2">
           <div className="container-fluid border border-danger" style={Style.Menu}/>

           <div className="container-fluid border border-danger" style={Style.Content}>
               <div className="row" style={{height: "91vh", paddingTop: "2vh"}}>
                   <div className="col-12 col-xs-12 col-sm-12 col-md-12 col-lg-6 offset-lg-6 border border-danger" ref={ref}>
                       <div className={inView ? "animate__animated animate__slideInRight" : "d-none"} >
                                <AwesomeSlider infinite={false} transitionDelay="0" className="border border-danger"  style={{height:"70vh"}}>        
                                    {Data.map((item, index) =>{
                                        return(
                                            <div className="row d-flex justify-content-center " >
                                                <div><img src={item.Pic} style={{height:"50vh", borderRadius: "0%"}}/></div>

                                                <div className="col-7" style={{position: "relative", bottom: "55px", paddingLeft:"50px", paddingRight:"50px"}}>
                                                    <AudioPlayer style={{ height: '50px',width: "auto", backgroundColor: "transparent"}}
                                                        src={item.Link}
                                                        autoPlayAfterSrcChange={false}
                                                        showJumpControls={false}
                                                        layout="horizontal-reverse"
                                                        customProgressBarSection={[RHAP_UI.PROGRESS_BAR]}
                                                        customControlsSection={[RHAP_UI.MAIN_CONTROLS]}
                                                    />
                                                </div>

                                                <div className="col-9" style={{bottom:"45px", fontSize:"3rem", fontWeight: "bold"}}>
                                                    {item.Message}
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
