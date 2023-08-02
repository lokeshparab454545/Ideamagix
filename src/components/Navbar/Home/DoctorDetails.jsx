import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './Home.css'
const DoctorDetails = () => {
    const doctors = [
        {
            name: "Dr.Faikue Falke",
            city: "Doctors city",
            degree: "Doctor Degree and Specialist",
        },
        {
            name: "Dr.Faikue Falke",
            city: "Doctors city",
            degree: "Doctor Degree and Specialist",
        },
        {
            name: "Dr.Faikue Falke",
            city: "Doctors city",
            degree: "Doctor Degree and Specialist",
        },
        {
            name: "Dr.Faikue Falke",
            city: "Doctors city",
            degree: "Doctor Degree and Specialist",
        },
        {
            name: "Dr.Faikue Falke",
            city: "Doctors city",
            degree: "Doctor Degree and Specialist",
        },
        {
            name: "Dr.Faikue Falke",
            city: "Doctors city",
            degree: "Doctor Degree and Specialist",
        },
        {
            name: "Dr.Faikue Falke",
            city: "Doctors city",
            degree: "Doctor Degree and Specialist",
        },
    ]
    const options = {
        items: 1,
        loop: true,
        autoplay: false,
        autoplayTimeout: 4000,
        animateOut: 'slideOutUp',
        nav: false,
        dots: true,
        margin: 15,
        responsive: {
            1200: {
                items: 3,
            },
            724: {
                items: 2,
            },
            500: {
                items: 2,
            },
            370: {
                items: 1,
                innerWidth: "100%",
                outerWidth: "100%",
            }
        }
    };
    return (
        <section className='doctor-details '>
            <div className="container">
                <h4>Doctors</h4>
                <h1>Top Orthopaedic <span style={{ color: "#32b2fa" }}>Doctors</span></h1>
                <div className="doctor">
                    <OwlCarousel className='owl-theme' {...options}>
                        {
                            doctors.map((card, index) => {
                                return <div key={index} className='doctor-card' >
                                    <div className="doctor-img">
                                    </div>
                                    <div className="doctor-profile">
                                        <h4>{card.name}</h4>
                                        <h5>{card.city}</h5>
                                        <p>{card.degree}</p>
                                    </div>
                                </div>
                            })
                        }
                    </OwlCarousel>
                </div>
            </div>
        </section>
    )
}

export default DoctorDetails
