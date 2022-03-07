import React, { useContext } from 'react'
import TextField from '@mui/material/TextField'
import FilterContext from './../../filters'

const HeaderTopFilter = () => {
    const [filters, setFilters] = useContext(FilterContext)
    const textUpdate = (text) => {
        const currentYear = filters.filterYear
        const currentMonth = filters.filterMonth
        const currentNew = filters.showNewOnly
        setFilters({
            filterYear: currentYear,
            filterMonth: currentMonth,
            filterText: text,
            showNewOnly: currentNew
        })
    }
    return(
        <div className="header_topFilter">
            <TextField id="outlined-basic" onChange={e => textUpdate(e.target.value)} label="Wprowadź nazwę" variant="outlined" size="small" sx={{ m: 2, width: '100%' }} color="secondary"/>
        </div>
    )
}

export default HeaderTopFilter