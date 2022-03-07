import React, { Component } from 'react'
import Button from '@mui/material/Button'

export default class YearButtons extends Component {
    setCurrentYear(btnId) {
        this.setState({ filterYear: btnId })
        const button = document.getElementById(btnId)
        button.classList = 'MuiButton-root MuiButton-contained MuiButton-containedSecondary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButtonBase-root  css-zcbmsk-MuiButtonBase-root-MuiButton-root'
        const buttons = document.querySelectorAll('.top_filter_buttons_years > button')
        buttons.forEach(button => {
            if(button.id != btnId) {
                button.classList = 'MuiButton-root MuiButton-outlined MuiButton-outlinedSecondary MuiButton-sizeMedium MuiButton-outlinedSizeMedium MuiButtonBase-root  css-wnpvqa-MuiButtonBase-root-MuiButton-root'
            }
        })
    }
    render() {
        return(
            <div className="top_filter_buttons_years">
                <Button variant="contained" onClick={() => this.setCurrentYear(12)} id={12} color="secondary">2021 i później</Button>
                <Button variant="outlined" onClick={() => this.setCurrentYear(13)} id={13} color="secondary">2020 i wcześniej</Button>
            </div>
        )
    }
}