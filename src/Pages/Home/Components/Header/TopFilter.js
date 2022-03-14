import React, { Component } from 'react'
import MonthButtons from './MonthButtons'
import YearButtons from './YearButtons'

export default class TopFilter extends Component {
    render() {
        return(
            <div className="top_filter_buttons">
                <YearButtons />
                <MonthButtons />
            </div>
        )
    }
}