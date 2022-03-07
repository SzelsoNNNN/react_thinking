import React, { Component } from 'react'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'

export default class LeftContainer extends Component {
    constructor(props) {
        super(props)
        this.state = props
    }
    render() {
        return(
            <div className="main_leftContainer">
                <div className="filters_container">
                    <div className="filters_top_name">Filtry</div>
                    <div className="filters_current_year">Obecny rok: {this.state.currentYear}</div>
                    <div className="filters_current_month">Obecny miesiąc: {this.state.currentMonth}</div>
                    <div className="filters_current_name">Obecna nazwa: {this.state.currentInput}</div>
                </div>
                <FormControlLabel control={<Checkbox color="secondary" defaultChecked />} label="Pokazuj tylko nowości" />
            </div>
        )
    }
}