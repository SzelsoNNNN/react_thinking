import React, { Component } from 'react'
import Advertisement from './Advertisement.js'
import TopFilter from './TopFilter.js'
import HeaderTopFilter from './HeaderTopFilter.js'
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