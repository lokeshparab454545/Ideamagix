import React from 'react'
import './Footer.css'
const Footer = () => {
    return (
        <div className='footer '>
            <div className="footer-banner">
                <div className="container">
                    <p>Stay Healthy and Stay Strong to enjoy life</p>
                    <h1>We have team of Healthcare experts</h1>
                    <div className="footer-details">
                        <button className='btn' style={{ backgroundColor: "#107df7" }}>Get In Touch</button>
                        <h4>+91 898 777 999</h4>
                    </div>
                </div>
            </div>
            <div className="footer-content">
                <div className="container footer-wrapper">
                    <div className="footer-col">
                        <h5>Important Links</h5>
                        <p><span>-</span>Home</p>
                        <p><span>-</span>About Us</p>
                        <p><span>-</span>FAQs</p>
                        <p><span>-</span>Blog</p>
                        <p><span>-</span>Contact Us</p>
                    </div>
                    <div className="footer-col">
                        <h5>Top Hospitals</h5>
                        <p><span>-</span>Apollo Hospital Delhi</p>
                        <p><span>-</span>Medanta Hospital Gurgaon</p>
                        <p><span>-</span>Max Hospital Delhi</p>
                        <p><span>-</span>Artemis Hospital Gurgaon</p>
                        <p><span>-</span>Fortis Hospital Gurgaon</p>
                        <p><span>-</span>View All</p>
                    </div>
                    <div className="footer-col">
                        <h5>Speciality Treatments</h5>
                        <p><span>-</span>Knee Replacement Surgeon</p>
                        <p><span>-</span>Urologist</p>
                        <p><span>-</span>Spine Surgeon</p>
                        <p><span>-</span>ENT Surgeon</p>
                        <p><span>-</span>Orthopedic</p>
                        <p><span>-</span>Cardiologist</p>
                        <p><span>-</span>Cardiologist</p>
                        <p><span>-</span>View All</p>
                    </div>
                    <div className="footer-col">
                        <h5>Medical Tourism Destinations</h5>
                        <p><span>-</span>Medical Tours in India</p>
                        <p><span>-</span>Medical Tours in Sri Lanka</p>
                        <p><span>-</span>Medical Tours in UAE</p>
                        <p><span>-</span>View All</p>
                    </div>
                </div>
            </div>
            <div className="footer-wrapper container">
                <div className="footer-about">
                    <img src="/assets/logo.png" alt="" />
                    <div className="footer-about-content">
                        <h5>About Hospital IQ</h5>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus eos sint, vero ipsa eaque doloribus adipisci! Illum assumenda voluptas expedita? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident, obcaecati?</p>
                    </div>
                    <div className="footer-links">
                        <h5>Follow Us On</h5>
                        <div className="links">
                            <i className="ri-facebook-box-fill"></i>
                            <i className="ri-twitter-fill"></i>
                            <i className="ri-instagram-fill"></i>
                            <i className="ri-youtube-fill"></i>
                        </div>
                        <h5>Customer Service</h5>
                        <h6>+91 9856555666</h6>
                    </div>
                </div>
            </div>
            <div className="footer-copyright">
                <div className="container footer-wrapper">
                    <p>Copyright @2023, All Rights Reserved. Designed by IdeaMagix</p>
                    <div className="footer-condn">
                        <p>Terms and Conditions</p>
                        <p>Privacy Policy</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
