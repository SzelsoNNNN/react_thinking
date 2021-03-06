import React, { useContext } from 'react'
import Button from '@mui/material/Button'
import FilterContext from './../../filters'

const YearButtons = () => {
    const [filters, setFilters] = useContext(FilterContext)

    const setCurrentYear = (btnId) => {
        const currentMonth = filters.filterMonth
        const currentText = filters.filterText
        const currentNew = filters.showNewOnly
        setFilters({
            filterYear: btnId,
            filterMonth: currentMonth,
            filterText: currentText,
            showNewOnly: currentNew
        })
        const button = document.getElementById(btnId)
        button.classList = 'MuiButton-root MuiButton-contained MuiButton-containedSecondary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButtonBase-root  css-zcbmsk-MuiButtonBase-root-MuiButton-root'
        const buttons = document.querySelectorAll('.top_filter_buttons_years > button')
        buttons.forEach(button => {
            if(button.id != btnId) {
                button.classList = 'MuiButton-root MuiButton-outlined MuiButton-outlinedSecondary MuiButton-sizeMedium MuiButton-outlinedSizeMedium MuiButtonBase-root  css-wnpvqa-MuiButtonBase-root-MuiButton-root'
            }
        })
    }
    return(
        <div className="top_filter_buttons_years">
            <Button variant="contained" onClick={() => setCurrentYear(2022)} id={2022} color="secondary">2022</Button>
            <Button variant="outlined" onClick={() => setCurrentYear(2021)} id={2021} color="secondary">2021</Button>
            <Button variant="outlined" onClick={() => setCurrentYear(-1)} id={-1} color="secondary">Sortuj po miesiącach</Button>
            <Button variant="outlined" onClick={() => setCurrentYear(-2)} id={-2} color="secondary">Pokaż wszystkie</Button>
        </div>
    )
}

export default YearButtons