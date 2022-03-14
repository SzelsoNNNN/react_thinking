import React, { useContext } from 'react'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import FilterContext from './../../filters'

const LeftContainer = () => {
        const [filters, setFilters] = useContext(FilterContext)
        return(
            <div className="main_leftContainer">
                <div className="filters_container">
                    <div className="filters_current_year">Obecny rok: {filters.filterYear}</div>
                    <div className="filters_current_year">Obecny miesiąc: {filters.filterMonth + 1}</div>
                    <div className="filters_current_text">Filtrowanie tekstem: {filters.filterText.charAt(0).toUpperCase() + filters.filterText.slice(1)}</div>
                </div>
            </div>
        )
}

export default LeftContainer