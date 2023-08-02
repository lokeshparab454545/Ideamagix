import React from 'react'
import './Header.css'
import 'remixicon/fonts/remixicon.css'
import HeaderContent from './HeaderContent'
const Header = () => {
    return (
        <div className="header container">
            <img loading='lazy' src="/assets/logo.png" alt="" />
            <div className="header-content">
                <HeaderContent icon={"ri-macbook-line"} subtitle={"Second Medical Opinon"} title={"Book Consulation"} />
                <HeaderContent icon={"ri-phone-line"} subtitle={"Call Us On"} title={"985 896 2222"} />
                <HeaderContent icon={"ri-mail-line"} subtitle={"Email Us On"} title={"info@mediretreats.com"} />
            </div>
            <div className="header-region">
                <img loading='lazy' src="https://flagpedia.net/data/flags/w1600/gb.png" alt="" />
                <i className="ri-arrow-down-s-fill"></i>
            </div>
        </div>

    )
}

export default Header
