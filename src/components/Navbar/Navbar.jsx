import React from 'react'
import 'remixicon/fonts/remixicon.css'
import { Link } from 'react-router-dom'
import './Navbar.css'
const Navbar = () => {
    return (
        <nav>
            <div className="nav-wrapper container">
                <div className="nav-links">
                    <ul>
                        <Link to="/"><li>Home</li></Link>
                        <Link to="/about"><li>About Us</li></Link>
                        <Link to="/treatment"><li>Treatments</li></Link>
                        <Link to="/destination"><li>Destinations</li></Link>
                        <Link to="/hospital"><li>Hospitals</li></Link>
                        <Link to="/faq"><li>FAQs</li></Link>
                        <Link to="/blog"><li>Blog</li></Link>
                        <Link to="/quote"><li>Request A Quote</li></Link>
                    </ul>
                </div>
                <div className="nav-search">
                    <i className="ri-search-line"></i>
                    <input type="text" placeholder='Search' />
                </div>
            </div>
        </nav>
    )
}

export default Navbar
