import React from 'react'
import './HomeStories.css'
const StoriesCard = ({ cardDetails }) => {
    return (
        <div className='card'>
            <h4>{cardDetails.title}</h4>
            <p>{cardDetails.desc}</p>
            <div className="card-bottom">
                <img loading='lazy' src="https://th.bing.com/th/id/OIP.audMX4ZGbvT2_GJTx2c4GgHaHw?pid=ImgDet&rs=1" alt="card-img" />
                <div className="card-name">
                    <h6>{cardDetails.name}</h6>
                    <p>{cardDetails.city}</p>
                </div>
            </div>
        </div>
    )
}

export default StoriesCard
