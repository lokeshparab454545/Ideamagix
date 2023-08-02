import React from 'react'
import 'remixicon/fonts/remixicon.css'
import './Navbar.css'
import Header from './Home/Header'
import HomeNav from './Home/HomeNav'
import Overview from './Home/Overview'
import HomeComp from './Home/HomeComp'
import HomeSideForm from './Home/HomeSideForm'
import HomeFAQ from './Home/HomeFAQ'
import HomeStories from './Home/HomeStories/HomeStories'
import DoctorDetails from './Home/DoctorDetails'
import HospitalDetails from './Home/HospitalDetails'
const Home = () => {
    return (
        <div>
            <Header />
            <HomeNav />
            <Overview />
            <div className="home-section container">
                <div className="home-content">
                    <HomeComp title={"Eligibilty for Treatment"} />
                    <HomeComp title={"Preperation Before Treatment"} />
                    <HomeComp title={"About Treatment"} />
                    <HomeComp title={"Post-Treatment Care Treatment"} />
                    <HomeComp title={"Treatment Recovery Tips"} />
                    <HomeFAQ />
                    <HomeStories />
                </div>
                <aside>
                    <HomeSideForm />
                </aside>
            </div>
            <DoctorDetails />
            <HospitalDetails />
        </div>
    )
}

export default Home
