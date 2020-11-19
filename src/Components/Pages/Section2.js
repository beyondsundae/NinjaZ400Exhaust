import React, {useEffect, useState} from 'react'
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

import Scroll from '../Pic/scroll.gif'

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

      const {width} = useWidth()
        const breakPoint = 500

    const Data = [
        {
            Pic:N400y,
            Link: "https://soundcloud.com/libliss/ninja400zeus",
            Message: "ราคาโดยประมาณ: ฿1,000 - ฿1,200"}, 
        {
            Pic:RAkraCarbon,
            Link: "https://soundcloud.com/libliss/ninja400realakracarbon",
            Message: "ราคาโดยประมาณ: ฿13,600"}, 
        {
            Pic:RAkraTita,
            Link: "https://soundcloud.com/libliss/ninja400realakratitanium",
            Message: "ราคาโดยประมาณ: ฿15,000"}, 
        {
            Pic:FAkraGP,
            Link: "https://soundcloud.com/libliss/ninja400fakegpr1",
            Message: "ราคาโดยประมาณ: ฿2,690"}, 
        {
            Pic:RLeolv10,
            Link: "https://soundcloud.com/libliss/ninja400realleovincelv10",
            Message: "ราคาโดยประมาณ: ฿6,700"}, 
        {
            Pic:RSCCRT,
            Link: "https://soundcloud.com/libliss/ninja400realsccrt",
            Message: "ราคาโดยประมาณ: ฿18,000"}, 
        {
            Pic:FSCShorty,
            Link: "https://soundcloud.com/libliss/ninja400fakescshortytita",
            Message: "ราคาโดยประมาณ: ฿2,900"}, 
        {
            Pic:FSCCRT,
            Link: "https://soundcloud.com/libliss/ninja400fakesc",
            Message: "ราคาโดยประมาณ: ฿700-900"}, 
        {
            Pic:FSCCNC,
            Link: "https://soundcloud.com/libliss/ninja400fakesccnc",
            Message: "ราคาโดยประมาณ: ฿1,400"},
        {
            Pic:RLEOCORSAWK,
            Link: "https://soundcloud.com/libliss/ninja400realleocrswodbkll",
            Message: "ราคาโดยประมาณ: ฿8,200"},
        {
            Pic:RLEOCORSAOK,
            Link: "https://soundcloud.com/libliss/ninja400realleocrswdbkll",
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

                                                <div className="col-12 col-md-10 col-lg-12 col-xl-10" style={{position: "relative", bottom: "55px", paddingLeft:"50px", paddingRight:"50px"}}>
                                                    
                                                    {width < breakPoint? 
                                                    (
                                                        <div dangerouslySetInnerHTML={{ __html: getHTMLSm(item.Link)}}/>
                                                    )
                                               
                                                    :(
                                                        <div  dangerouslySetInnerHTML={{__html: getHTMLXl(item.Link)}} />
                                                    ) 
                                                    }
                                                </div>

                                                <div className="MufflerPrice col-9" style={{bottom:"45px", fontSize:"2.3rem", fontWeight: "bold"}}>
                                                    {item.Message}<br/>
                                                    
                                                </div>
                                                
                                            </div>
                                            )
                                        })}
                                </AwesomeSlider>        
                                        {width < 800? 
                                                    (
                                                        <p style={{display: "ิblock", bottom: "90px", position: 'relative', fontSize: "2rem"}}>← เลื่อนที่นี่ →</p>
                                                    )
                                               
                                                    :(
                                                        ""
                                                    ) 
                                                    }
                                    
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

const useWidth = () => {
    const [ width, setWidth ] = useState(window.innerWidth)

    const widthHandler =()=>{
        setWidth(window.innerWidth)
    }

    useEffect(()=>{
        window.addEventListener("resize", widthHandler)

        return()=>{
            window.removeEventListener("resize", widthHandler)
        }
    }, [])

    return { width };
}

const getSoundcloudIFrameSrc = (string) =>
    `https://w.soundcloud.com/player` +
    `?url=${string}` +
    `&color=ff5500` +
    `&auto_play=false` +
    `&hide_related=true` +
    `&show_comments=true` +
    `&show_user=true` +
    `&show_reposts=false` +
    `&show_teaser=false` +
    `&visual=true`;

export const getHTMLXl = (string) => {
    const iframeUrl = getSoundcloudIFrameSrc(string);
  
    return (
      `<iframe` +
      ` width="100%"` +
      ` height="480"` +
      ` scrolling="no"` +
      ` frameborder="no"` +
      ` allow="autoplay"` +
      ` src=${iframeUrl}` +
      `></iframe>`
    );
  };

  export const getHTMLSm = (string) => {
    const iframeUrl = getSoundcloudIFrameSrc(string);
  
    return (
      `<iframe` +
      ` width="100%"` +
      ` height="280"` +
      ` scrolling="no"` +
      ` frameborder="no"` +
      ` allow="autoplay"` +
      ` src=${iframeUrl}` +
      `></iframe>`
    );
  };