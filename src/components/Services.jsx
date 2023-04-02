import React from 'react'
import ServiceCard from './ServiceCard'
import '../styles/components/Services.css';

const data = [
    {
        type: "CHATBOT",
        name: "Bot Talk Time",
        route: "/chat"
    },
    {
        type: "VIDEOCALL",
        name: "Connect with people",
        route: 'video'
    },
    {
        type: "BLOG",
        name: "The SocioAid Blog",
        route: "/blog"
    },
    {
        type: "EXERCISE",
        name: "Exercise to imporve",
        route: "/exercises"
    },
    {
        type: "DR_CONNECT",
        name: "Connect with a professional",
        route: "/appointment"
    }
]


const Services = () => {    
    return (
        <div className="service-container">
            <p className="text-7xl font-serif font-semibold text-[#5d001e] mx-auto text-center">Services</p>
            <div className="service-list">
                {data.map((item, index) => {
                    return (
                        <ServiceCard
                            key={index}
                            type={item.type}
                            name={item.name}
                            route={item.route}
                        />
                    )
                })
                }
            </div>
        </div>
    )
}

export default Services