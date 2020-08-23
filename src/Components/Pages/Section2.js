import React from 'react'
import ReactPlayer from "react-player"

import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';


const Section2 = () => {

    const Style = ({
        Menu:{
            height: "7vh",
        },
        Content:{
            height: "92vh"
        }
    })

    return (
        <div className="section2">
           <div className="container-fluid border border-danger" style={Style.Menu}/>

           <div className="container-fluid border border-danger" style={Style.Content}>
               <div className="row" style={{height: "91vh", paddingTop: "2vh"}}>
                   <div className="col-6 col-md-12 col-lg-6 offset-lg-6 border border-danger" >
                       <div data-aos="fade-up" data-aos-anchor-placement="center-center">
                           {/* xxxx */}

                            {/* <ReactPlayer
                                    url="https://soundcloud.com/libliss/ninja400"
                                    width='640px'
                                    height='640px'
                                    playing={false}
                                    muted='true'
                                /> */}

                            <AwesomeSlider>
                                <div><ReactPlayer
                                    url="https://soundcloud.com/libliss/ninja400zeus"
                                    width='640px'
                                    height='500px'
                                    playing={false}
                                    muted='true'
                                /></div>
                                <div><ReactPlayer
                                    url="https://soundcloud.com/libliss/ninja400realakracarbon"
                                    width='640px'
                                    height='500px'
                                    playing={false}
                                    muted='true'
                                />xxx</div>
                                <div><ReactPlayer
                                    url="https://soundcloud.com/libliss/ninja400realakratitanium"
                                    width='640px'
                                    height='500px'
                                    playing={false}
                                    muted='true'
                                />xxx</div>
                                <div><ReactPlayer
                                    url="https://soundcloud.com/libliss/ninja400fakegpr1"
                                    width='640px'
                                    height='500px'
                                    playing={false}
                                    muted='true'
                                />xxx</div>
                                <div><ReactPlayer
                                    url="https://soundcloud.com/libliss/ninja400realleovincelv10"
                                    width='640px'
                                    height='500px'
                                    playing={false}
                                    muted='true'
                                />xxx</div>
                                <div><ReactPlayer
                                    url="https://soundcloud.com/libliss/ninja400realsccrt"
                                    width='640px'
                                    height='500px'
                                    playing={false}
                                    muted='true'
                                />xxx</div>
                                <div><ReactPlayer
                                    url="https://soundcloud.com/libliss/sc-project-shorty-titanium-ninja400"
                                    width='640px'
                                    height='500px'
                                    playing={false}
                                    muted='true'
                                />xxx</div>
                                <div><ReactPlayer
                                    url="https://soundcloud.com/libliss/ninja400fakesc"
                                    width='640px'
                                    height='500px'
                                    playing={false}
                                    muted='true'
                                />xxx</div>
                                <div><ReactPlayer
                                    url="https://soundcloud.com/libliss/ninja400fakesccnc"
                                    width='640px'
                                    height='500px'
                                    playing={false}
                                    muted='true'
                                />xxx</div>
                                
                                
                            </AwesomeSlider>
                            

                       </div>
                       
                   </div>
               </div>
           </div>
        </div>
    )
}

export default Section2
