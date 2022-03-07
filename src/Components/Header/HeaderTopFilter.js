import React, { Component } from 'react'
import TextField from '@mui/material/TextField'
import states from './../states'

export default class HeaderTopFilter extends Component {
    constructor(props) {
        super(props)
        this.state = states
    }
    setTextFilter(value) {
        this.setState({ filterText: value })
        console.log(value)
    }
    render() {
        return(
            <div className="header_topFilter">
                <TextField id="outlined-basic" onChange={e => this.setTextFilter(e.target.value)} label="Wprowadź nazwę" variant="outlined" size="small" sx={{ m: 2, width: '100%' }} color="secondary"/>
                {this.state.filterText}
            </div>
        )
    }
}