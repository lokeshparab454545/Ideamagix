import React from 'react'
import './Home.css'
const HomeComp = ({ title }) => {
    return (
        <section className='home-space borderBtm'>
            <h2>{title}<span>.</span></h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur perspiciatis Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, rem? Lorem, ipsum dolor sit amet consectetur adipisicing elit. At soluta cum vel quis est eveniet repellendus exercitationem odio! Cupiditate, ab. tempore voluptates dicta quia dolor reprehenderit hic! Libero, maxime dicta!</p>
            <p>In general, gastric bypass could be a goof option if: </p>
            <ul>
                <li><p>The BMI is 40 or more</p></li>
                <li><p>Your BMI is 30 or more with severe weight-related health conditons like type-2 diabetes and high blood pressure</p></li>
                <li><p>Your are willing to make permanent changes in the lifestyle</p></li>
            </ul>
        </section>
    )
}

export default HomeComp
