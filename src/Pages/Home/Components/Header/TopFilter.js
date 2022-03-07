import React, { Component } from 'react'
import YearButtons from './YearButtons'
import MonthButtons from './MonthButtons'

export default class TopFilter extends Component {
    render() {
        return(
            <div className="top_filter_buttons">
                <MonthButtons />
            </div>
        )
    }
}