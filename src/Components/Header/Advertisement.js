import React from 'react'
import Ads from './Ads.json'

const Advertisement = () => {
    return(
        <div className="top_ad_container">
            {Ads.map((ad) => (
                    <div className="top_ad_box">
                        <img alt={ad.name} src={ad.image} />
                    </div>
            ))}
        </div>
    )
}

export default Advertisement