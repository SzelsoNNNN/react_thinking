import React from 'react'

//const API_db = require ('./../../API/db.json')

const Home = () => {
    return(
        <div className="home_page">
            <div className="home_header">
                <div className="header_topFilter">
                    <input className="filter_bookName" id="bookNameFilter" type="text" />
                </div>
                <div className="top_ad_container">
                    <div className="top_ad_square"><img src="https://i.imgur.com/Kbpf6sB.png" /></div>
                    <div className="top_ad_square"><img src="https://i.imgur.com/Kbpf6sB.png" /></div>
                    <div className="top_ad_square"><img src="https://i.imgur.com/Kbpf6sB.png" /></div>
                </div>
                <div className="top_filter_buttons">
                    <div className="top_filter_area_year">
                        <button className="filter_button">2020 i wcześniej</button>
                        <button className="filter_button">2021 i później</button>
                    </div>
                    <div className="top_filter_area_month">
                        <button className="filter_button">styczeń</button>
                        <button className="filter_button">luty</button>
                        <button className="filter_button">marzec</button>
                        <button className="filter_button">kwiecień</button>
                        <button className="filter_button">maj</button>
                        <button className="filter_button">czerwiec</button>
                        <button className="filter_button">lipiec</button>
                        <button className="filter_button">sierpień</button>
                        <button className="filter_button">wrzesień</button>
                        <button className="filter_button">październik</button>
                        <button className="filter_button">listopad</button>
                        <button className="filter_button">grudzień</button>
                    </div>
                </div>
            </div>
            <div className="home_main">
                <div className="main_leftContainer">
                    <div className="filters_container">
                        <div className="filters_top_name">Filtry</div>
                        <div className="filters_current_year">Obecny rok: 2137</div>
                        <div className="filters_current_month">Obecny miesiąc: luteń</div>
                        <div className="filters_current_name">Obecna nazwa: pobierane z inputa</div>
                    </div>
                </div>
                <div className="books_container">
                    <div className="book_square">
                        <div className="book_area_realease">Rok wydania</div>
                        <div className="book_area_photography"><img src="https://i.imgur.com/Kbpf6sB.png"/></div>
                        <div className="book_area_name"><img src="https://i.imgur.com/Kbpf6sB.png"/></div>
                    </div>
                    <div className="book_square">
                        <div className="book_area_realease">Rok wydania</div>
                        <div className="book_area_photography"><img src="https://i.imgur.com/Kbpf6sB.png"/></div>
                        <div className="book_area_name"><img src="https://i.imgur.com/Kbpf6sB.png"/></div>
                    </div>
                    <div className="book_square">
                        <div className="book_area_realease">Rok wydania</div>
                        <div className="book_area_photography"><img src="https://i.imgur.com/Kbpf6sB.png"/></div>
                        <div className="book_area_name"><img src="https://i.imgur.com/Kbpf6sB.png"/></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home