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
        route: "/drconnect"
    }
]


const Services = () => {    
    return (
        <div className="service-container">
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