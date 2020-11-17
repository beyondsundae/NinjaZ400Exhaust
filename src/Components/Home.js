import React from 'react'

import Scrollbar from 'smooth-scrollbar-react';

import Section1 from './Pages/Section1'
import Section2 from './Pages/Section2'

function Home() {
    return (
        <div>
            <Scrollbar
            //   style={{ height: "100vh" }}
              damping={0.3}
            //   renderByPixels={true}
            //   plugins={{
            //     overscroll: { damping: 0.1 }
            //   }}
            >
                <div style={{height: "100vh"}}>
                    <Section1/>
                    <Section2/>
                </div>
            </Scrollbar>
            
        </div>
    )
}

export default Home
