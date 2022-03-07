import React, { useContext } from 'react'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import FilterContext from './../../filters'

const LeftContainer = () => {
        const [filters, setFilters] = useContext(FilterContext)
        return(
            <div className="main_leftContainer">
                <div className="filters_container">
                    <div className="filters_top_name">Filtry</div>
                    <div className="filters_current_month">Obecny miesiąc: {filters.filterMonth + 1}</div>
                </div>
            </div>
        )
}

export default LeftContainer