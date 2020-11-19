import React, {useState, useEffect} from 'react'

import Scrollbar from 'smooth-scrollbar-react';


import Section1 from './Pages/Section1'
import Section2 from './Pages/Section2'

function Home() {
    
    const {width} = useWidth()
    const breakPoint = 500
    
    return (
        <div>
            {width < breakPoint?
            (
                <div style={{height: "100vh"}}>
                    <Section1/>
                    <Section2/>
                </div>
            )
            :(
                <Scrollbar damping={0.3}>
                    <div style={{height: "100vh"}}>
                        <Section1/>
                        <Section2/>
                    </div>
                </Scrollbar>
            )}
            
            
        </div>
    )
}

export default Home

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