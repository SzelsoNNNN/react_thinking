import React from 'react'
import LeftContainer from './LeftContainer'
import RightContainer from './RightContainer'
import './styles.css'

const Home = () => {
    return(
        <div className="home_main">
            <LeftContainer currentMonth={2} currentYear={2022} currentInput={'asdasd'}/>
            <RightContainer />
        </div>
    )
}

export default Home