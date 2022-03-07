import React, { Component } from 'react'
import Button from '@mui/material/Button'

export default class MonthButtons extends Component {
    constructor(props) {
        super(props)
        this.state = {
            filterText: '',
            filterMonth: 0,
            filterYear: 0,
            showNewOnly: false
        }
    }

    setCurrentMonth(btnId) {
        this.setState({ filterMonth: btnId })
        const button = document.getElementById(btnId)
        button.classList = 'MuiButton-root MuiButton-contained MuiButton-containedSecondary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButtonBase-root  css-zcbmsk-MuiButtonBase-root-MuiButton-root'
        const buttons = document.querySelectorAll('.top_filter_buttons_months > button')
        buttons.forEach(button => {
            if(button.id != btnId) {
                button.classList = 'MuiButton-root MuiButton-outlined MuiButton-outlinedSecondary MuiButton-sizeMedium MuiButton-outlinedSizeMedium MuiButtonBase-root  css-wnpvqa-MuiButtonBase-root-MuiButton-root'
            }
        })
    }

    render() {
        return(
            <div className="top_filter_buttons_months">
                <Button variant="outlined" onClick={() => this.setCurrentMonth(0)} id={0} color="secondary">Styczeń</Button>
                <Button variant="outlined" onClick={() => this.setCurrentMonth(1)} id={1} color="secondary">Luty</Button>
                <Button variant="outlined" onClick={() => this.setCurrentMonth(2)} id={2} color="secondary">Marzec</Button>
                <Button variant="outlined" onClick={() => this.setCurrentMonth(3)} id={3} color="secondary">Kwiecień</Button>
                <Button variant="outlined" onClick={() => this.setCurrentMonth(4)} id={4} color="secondary">Maj</Button>
                <Button variant="outlined" onClick={() => this.setCurrentMonth(5)} id={5} color="secondary">Czerwiec</Button>
                <Button variant="outlined" onClick={() => this.setCurrentMonth(6)} id={6} color="secondary">Lipiec</Button>
                <Button variant="outlined" onClick={() => this.setCurrentMonth(7)} id={7} color="secondary">Sierpień</Button>
                <Button variant="outlined" onClick={() => this.setCurrentMonth(8)} id={8} color="secondary">Wrzesień</Button>
                <Button variant="outlined" onClick={() => this.setCurrentMonth(9)} id={9} color="secondary">Październik</Button>
                <Button variant="outlined" onClick={() => this.setCurrentMonth(10)} id={10} color="secondary">Listopad</Button>
                <Button variant="outlined" onClick={() => this.setCurrentMonth(11)} id={11} color="secondary">Grudzień</Button>
            </div>
        )
    }
}