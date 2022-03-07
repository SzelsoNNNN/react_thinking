import React, { Component } from 'react'
import Header from './../../Components/Header/Header'
import Main from './../../Components/Main/Main'

class Home extends Component {
    render() {
        return (
            <div className="home_page">
                <Header />
                <Main />
            </div>
        )
    }
}

export default Home