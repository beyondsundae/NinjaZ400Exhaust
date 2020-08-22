import React from 'react'
import { PlayButton, Timer, Progress, Icons } from 'react-soundplayer/components';
import { withCustomAudio } from 'react-soundplayer/addons';
import { withSoundCloudAudio } from 'react-soundplayer/addons';
const { SoundCloudLogoSVG } = Icons;

const Section2 = () => {
    const {
        SoundCloudLogoSVG,
        PlayIconSVG,
        PauseIconSVG,
        NextIconSVG,
        PrevIconSVG
      } = Icons;
    const streamUrl = 'https://soundcloud.com/libliss/ninja400';
    const trackTitle = 'Great song by random artist';

    const AWSSoundPlayer = withCustomAudio(props => {
        const { trackTitle } = props;
      
        return (
          <div>
            <PlayButton />
            <h2>{trackTitle}</h2>
            <Timer  />
          </div>
        );
      });

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
                   <div className="col-6 offset-6 border border-danger" >
                       <div data-aos="fade-up" data-aos-anchor-placement="center-center">
                           xxxx
                           <iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay"
  src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/880255492">
</iframe>
                       </div>
                       
                   </div>
               </div>
           </div>
        </div>
    )
}

export default Section2
