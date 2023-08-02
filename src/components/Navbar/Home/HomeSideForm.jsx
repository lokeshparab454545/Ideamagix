import React from 'react'

const HomeSideForm = () => {
    return (
        <div className='home-side'>
            <h2>Need Help?</h2>
            <p>Let us know, we will be happy to assit you.</p>
            <input type="text" placeholder='Full Name' />
            <input type="email" placeholder='Email' />
            <input type="number" placeholder='Phone Number' />
            <textarea name="" id="" cols="24" rows="4" placeholder='Describe Your Treatment Requiremnet'></textarea>
            <button className='btn'>Send Enquiry</button>
        </div>
    )
}

export default HomeSideForm
