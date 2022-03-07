import React, { Component } from 'react'
import HeaderTopFilter from './HeaderTopFilter'
import Advertisement from './Advertisement.js'
import TopFilter from './TopFilter.js'
import states from './../states'
import './styles.css'

export default class Home extends Component {
    constructor(props) {
        super(props)
        this.state = states
    }
    render() {
        return(
            <div className="home_header">
                <HeaderTopFilter />
                <Advertisement />
                <TopFilter />
            </div>
        )
    }
}