import React from 'react'
import LeftContainer from './LeftContainer'
import RightContainer from './RightContainer'
import './styles.css'

const Home = () => {
    return(
        <div className="home_main">
            <LeftContainer/>
            <RightContainer />
        </div>
    )
}

export default Home