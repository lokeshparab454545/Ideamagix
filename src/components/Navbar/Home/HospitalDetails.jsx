import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './Home.css'
const HospitalDetails = () => {
    const hospital = [
        {
            imgSrc: "https://www.bing.com/images/search?view=detailV2&ccid=KBoVeqNs&id=27219189CBEBDB98839295F88D055DD62AC5696A&thid=OIP.KBoVeqNsoripRttj9Gj_9AHaDt&mediaurl=https%3a%2f%2ftheoptimist.news%2fwp-content%2fuploads%2f2021%2f06%2fapollo-hospital.jpg&exph=450&expw=900&q=apollo+hospitals&simid=608046586583329653&FORM=IRPRST&ck=61724F617D9E7B3D9F27D8CD42971E62&selectedIndex=9",
            name: "Apollo Hospital",
            city: "Bangalore",
        },
        {
            imgSrc: "https://www.bing.com/images/search?view=detailV2&ccid=9m%2fca76V&id=35DB5CCBD598738FDC0C0D00A7264E9780B021EF&thid=OIP.9m_ca76VpoZT_3IjWOxdjwHaE9&mediaurl=https%3a%2f%2fmedia.indiatimes.in%2fmedia%2fcontent%2f2017%2fNov%2fcapture_1511519209_725x725.jpg&exph=486&expw=725&q=medanta+hospital&simid=608041084728247021&FORM=IRPRST&ck=5422DB82D4F4017232B50688E552B251&selectedIndex=0",
            name: "Medanta Hospital",
            city: "Gurgaon",
        },
        {
            imgSrc: "https://www.bing.com/images/search?view=detailV2&ccid=jIPyxtBy&id=4FAC2034C6C97E84B4D9B74A80F870DDC8D7DF33&thid=OIP.jIPyxtByRXuKAgC-HU80CAHaGa&mediaurl=https%3a%2f%2fwww.spineandneurosurgeryhospitalindia.com%2fjaslok-hospital-mumbai-india%2fimg%2fjaslok-hospital.jpg&exph=737&expw=850&q=jaslok+hospital&simid=608035303697499122&FORM=IRPRST&ck=35CE1AE8A59B1B7356A49EFFF2CFFCBB&selectedIndex=0",
            name: "Jaslok Hospital",
            city: "Mumbai",
        },
        {
            imgSrc: "https://www.bing.com/images/search?view=detailV2&ccid=KBoVeqNs&id=27219189CBEBDB98839295F88D055DD62AC5696A&thid=OIP.KBoVeqNsoripRttj9Gj_9AHaDt&mediaurl=https%3a%2f%2ftheoptimist.news%2fwp-content%2fuploads%2f2021%2f06%2fapollo-hospital.jpg&exph=450&expw=900&q=apollo+hospitals&simid=608046586583329653&FORM=IRPRST&ck=61724F617D9E7B3D9F27D8CD42971E62&selectedIndex=9",
            name: "Apollo Hospital",
            city: "Bangalore",
        },
        {
            imgSrc: "https://www.bing.com/images/search?view=detailV2&ccid=9m%2fca76V&id=35DB5CCBD598738FDC0C0D00A7264E9780B021EF&thid=OIP.9m_ca76VpoZT_3IjWOxdjwHaE9&mediaurl=https%3a%2f%2fmedia.indiatimes.in%2fmedia%2fcontent%2f2017%2fNov%2fcapture_1511519209_725x725.jpg&exph=486&expw=725&q=medanta+hospital&simid=608041084728247021&FORM=IRPRST&ck=5422DB82D4F4017232B50688E552B251&selectedIndex=0",
            name: "Medanta Hospital",
            city: "Gurgaon",
        },
        {
            imgSrc: "https://www.bing.com/images/search?view=detailV2&ccid=jIPyxtBy&id=4FAC2034C6C97E84B4D9B74A80F870DDC8D7DF33&thid=OIP.jIPyxtByRXuKAgC-HU80CAHaGa&mediaurl=https%3a%2f%2fwww.spineandneurosurgeryhospitalindia.com%2fjaslok-hospital-mumbai-india%2fimg%2fjaslok-hospital.jpg&exph=737&expw=850&q=jaslok+hospital&simid=608035303697499122&FORM=IRPRST&ck=35CE1AE8A59B1B7356A49EFFF2CFFCBB&selectedIndex=0",
            name: "Jaslok Hospital",
            city: "Mumbai",
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
            1100: {
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
        <section className='hospital-details '>
            <div className="container">
                <h4>Hospitals</h4>
                <h1>Recommended <span style={{ color: "#32b2fa" }}>Hospitals</span></h1>
                <div className="hospital">
                    <OwlCarousel className='owl-theme' {...options}>
                        {
                            hospital.map((card, index) => {
                                return <div key={index} className='hospital-card' >
                                    <img src="assets/hospital.jpeg" alt="" />
                                    <div className="hospital-profile">
                                        <h4>{card.name}</h4>
                                        <h5>{card.city}</h5>
                                    </div>
                                </div>
                            })
                        }
                    </OwlCarousel>
                </div>
                <h6>Don't hesitate, contact us for better help and services <a>Explore all hospitals</a></h6>
            </div>
        </section>
    )
}

export default HospitalDetails
