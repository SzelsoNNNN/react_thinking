import React, { useState } from 'react'
import Header from './Components/Header/Header'
import Main from './Components/Main/Main'
import FilterContext from './filters'

const filtersBasic = {
    filterText: '',
    filterMonth: 0,
    filterYear: 0,
    showNewOnly: false
}

const Home = () => {
    const [filters, setFilters] = useState(filtersBasic)
    return (
        <div className="home_page">
            <FilterContext.Provider value={[filters, setFilters]}>
                <Header />
                <Main />
            </FilterContext.Provider>
        </div>
    )
}

export default Home