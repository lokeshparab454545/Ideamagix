import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import StoriesCard from './StoriesCard';
import './HomeStories.css'
const HomeStories = () => {
    const stories = [
        {
            title: "UnderWent Procedure for retinal deatchment",
            desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt, fugit in ducimus nesciunt perspiciatis ad consequuntur voluptate suscipit. Fugiat, consectetur!",
            name: "Luke Olfert",
            city: "New York, USA",
        },
        {
            title: "UnderWent Colonoscopy and Medical Management",
            desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt, fugit in ducimus nesciunt perspiciatis ad consequuntur voluptate suscipit. Fugiat, consectetur!",
            name: "Luke Olfert",
            city: "Sydney, Australia",
        },
        {
            title: "UnderWent Procedure for retinal deatchment",
            desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt, fugit in ducimus nesciunt perspiciatis ad consequuntur voluptate suscipit. Fugiat, consectetur!",
            name: "Luke Olfert",
            city: "New York, USA",
        },
        {
            title: "UnderWent Colonoscopy and Medical Management",
            desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt, fugit in ducimus nesciunt perspiciatis ad consequuntur voluptate suscipit. Fugiat, consectetur!",
            name: "Luke Olfert",
            imgSrc: "https://www.bing.com/images/search?view=detailV2&ccid=jryuUgIH&id=32D60098CA6AE70C7621FD36B23974A4B7EA037A&thid=OIP.jryuUgIHWL-1FVD2ww8oWgHaHa&mediaurl=https%3a%2f%2fwritestylesonline.com%2fwp-content%2fuploads%2f2016%2f08%2fFollow-These-Steps-for-a-Flawless-Professional-Profile-Picture.jpg&exph=2801&expw=2801&q=profile+image&simid=608020679356141502&FORM=IRPRST&ck=62F9353F0DFE9DFAA6F47EC5F6BFA5EB&selectedIndex=0",
            city: "Sydney, Australia",
        },
        {
            title: "UnderWent Colonoscopy and Medical Management",
            desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt, fugit in ducimus nesciunt perspiciatis ad consequuntur voluptate suscipit. Fugiat, consectetur!",
            name: "Luke Olfert",
            imgSrc: "https://www.bing.com/images/search?view=detailV2&ccid=jryuUgIH&id=32D60098CA6AE70C7621FD36B23974A4B7EA037A&thid=OIP.jryuUgIHWL-1FVD2ww8oWgHaHa&mediaurl=https%3a%2f%2fwritestylesonline.com%2fwp-content%2fuploads%2f2016%2f08%2fFollow-These-Steps-for-a-Flawless-Professional-Profile-Picture.jpg&exph=2801&expw=2801&q=profile+image&simid=608020679356141502&FORM=IRPRST&ck=62F9353F0DFE9DFAA6F47EC5F6BFA5EB&selectedIndex=0",
            city: "Sydney, Australia",
        },
    ]
    const options = {
        items: 1,
        loop: true,
        autoplay: true,
        autoplayTimeout: 4000,
        animateOut: 'slideOutUp',
        nav: false,
        dots: true,
        margin: 0,
        responsive: {
            1100: {
                items: 2,
            },
            724: {
                items: 1,
            },
            500: {
                items: 1,
            },
            370: {
                items: 1,
                innerWidth: "100%",
                outerWidth: "100%",
            }
        }
    };

    return (
        <section className='home-stories'>
            <h2>Patient Stories & Videos<span>.</span></h2>
            <div className="stories">
                <OwlCarousel className='owl-theme' {...options}>
                    {
                        stories.map((card, index) => {
                            return <StoriesCard key={index} cardDetails={card} />
                        })
                    }
                </OwlCarousel>
            </div>
        </section>
    )
}

export default HomeStories
