import React from 'react'
import './Header.css'
const HeaderContent = ({ icon, subtitle, title }) => {
    return (
        <div className='content'>
            <div className="content-icon">
                <i className={icon}></i>
            </div>
            <div className="content-text">
                <p>{subtitle}</p>
                <h4>{title}</h4>
            </div>
        </div>
    )
}

export default HeaderContent